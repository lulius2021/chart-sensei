import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@/lib/supabase/server";

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

    // TODO: Check daily limit for free users (3/day)

    const formData = await request.formData();
    const image = formData.get("image") as File;
    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const bytes = await image.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");
    const mediaType = image.type as "image/jpeg" | "image/png" | "image/gif" | "image/webp";

    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2000,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: { type: "base64", media_type: mediaType, data: base64 },
            },
            {
              type: "text",
              text: "Analyze this trading chart. Return your analysis as JSON following the system prompt format.",
            },
          ],
        },
      ],
      system: SYSTEM_PROMPT,
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";

    // Parse JSON from response
    let analysis;
    try {
      analysis = JSON.parse(text);
    } catch {
      // Try extracting JSON from potential markdown
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        analysis = JSON.parse(jsonMatch[0]);
      } else {
        return NextResponse.json({ error: "Failed to parse analysis", raw: text }, { status: 500 });
      }
    }

    // Save to Supabase
    const { error: dbError } = await supabase.from("analyses").insert({
      user_id: user.id,
      analysis: analysis,
      created_at: new Date().toISOString(),
    });

    if (dbError) console.error("DB save error:", dbError);

    return NextResponse.json({ analysis });
  } catch (error: unknown) {
    console.error("Analysis error:", error);
    return NextResponse.json({ error: "Analysis failed" }, { status: 500 });
  }
}
