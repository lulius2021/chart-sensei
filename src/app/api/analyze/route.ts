import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@/lib/supabase/server";

const FREE_DAILY_LIMIT = 3;

const SYSTEM_PROMPT = `You are Chart-Sensei, an expert AI trading coach. Analyze the provided chart image and return a JSON response with the following structure:

{
  "pattern": "Name of the detected pattern (e.g., Ascending Triangle, Double Bottom, Head & Shoulders)",
  "direction": "bullish" | "bearish" | "neutral",
  "strategy": "Recommended trading strategy name",
  "timeframe": "Suggested holding period (e.g., Scalp 15min, Day Trade, Swing 2-7 days)",
  "entry": { "low": number, "high": number, "description": "Entry zone explanation" },
  "stopLoss": { "price": number, "description": "Why this stop loss level" },
  "takeProfits": [
    { "level": 1, "price": number, "description": "First target explanation" },
    { "level": 2, "price": number, "description": "Second target explanation" }
  ],
  "riskReward": "e.g. 1:2.4",
  "confidence": "high" | "medium" | "low",
  "signals": ["Volume Confirmed", "Clean Breakout", "RSI Overbought", etc.],
  "explanation": "2-3 paragraph explanation of WHY this trade setup exists. Explain the pattern, the market psychology behind it, and why entry/exit levels make sense. This is educational - help the user LEARN.",
  "steps": [
    "Step 1: ...",
    "Step 2: ...",
    "Step 3: ...",
    "Step 4: ...",
    "Step 5: ..."
  ],
  "mistakes": "Common mistake to avoid with this specific setup"
}

Rules:
- Always identify the asset and timeframe if visible
- Be specific with price levels
- Explain the WHY behind every decision
- If the chart is unclear or you can't identify a clear setup, say so honestly
- Focus on education, not just signals
- Return ONLY valid JSON, no markdown`;

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check daily limit for free users
    const { data: profile } = await supabase
      .from("profiles")
      .select("is_pro, analyses_today, analyses_reset_date")
      .eq("id", user.id)
      .single();

    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    const today = new Date().toISOString().split("T")[0];
    let analysesToday = profile.analyses_today || 0;

    // Reset counter if it's a new day
    if (profile.analyses_reset_date !== today) {
      analysesToday = 0;
      await supabase
        .from("profiles")
        .update({ analyses_today: 0, analyses_reset_date: today })
        .eq("id", user.id);
    }

    // Enforce limit for free users
    if (!profile.is_pro && analysesToday >= FREE_DAILY_LIMIT) {
      return NextResponse.json(
        {
          error: "Daily limit reached",
          message: `Free users can analyze ${FREE_DAILY_LIMIT} charts per day. Upgrade to Pro for unlimited analyses.`,
          limit: FREE_DAILY_LIMIT,
          used: analysesToday,
        },
        { status: 429 }
      );
    }

    const formData = await request.formData();
    const image = formData.get("image") as File;
    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const bytes = await image.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");
    const mimeType = image.type;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            { text: SYSTEM_PROMPT + "\n\nAnalyze this trading chart. Return your analysis as JSON." },
            {
              inlineData: {
                mimeType: mimeType,
                data: base64,
              },
            },
          ],
        },
      ],
      generationConfig: {
        maxOutputTokens: 2000,
        temperature: 0.3,
      },
    });

    const text = result.response.text();

    let analysis;
    try {
      analysis = JSON.parse(text);
    } catch {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        analysis = JSON.parse(jsonMatch[0]);
      } else {
        return NextResponse.json({ error: "Failed to parse analysis", raw: text }, { status: 500 });
      }
    }

    // Save to Supabase + increment counter
    const { error: dbError } = await supabase.from("analyses").insert({
      user_id: user.id,
      analysis: analysis,
      created_at: new Date().toISOString(),
    });

    if (dbError) console.error("DB save error:", dbError);

    // Increment daily counter
    await supabase
      .from("profiles")
      .update({
        analyses_today: analysesToday + 1,
        analyses_reset_date: today,
      })
      .eq("id", user.id);

    return NextResponse.json({
      analysis,
      remaining: profile.is_pro ? "unlimited" : FREE_DAILY_LIMIT - analysesToday - 1,
    });
  } catch (error: unknown) {
    console.error("Analysis error:", error);
    return NextResponse.json({ error: "Analysis failed" }, { status: 500 });
  }
}
