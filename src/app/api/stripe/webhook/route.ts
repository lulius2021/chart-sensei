import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createServerClient } from "@supabase/ssr";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-12-18.acacia" as Stripe.LatestApiVersion });
}

export async function POST(request: Request) {
  const stripe = getStripe();
  const body = await request.text();
  const sig = request.headers.get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { getAll: () => [], setAll: () => {} } }
  );

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.supabase_user_id;
      if (userId) {
        await supabase.from("profiles").update({
          is_pro: true,
          stripe_subscription_id: session.subscription as string,
        }).eq("id", userId);
      }
      break;
    }
    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      const { data } = await supabase
        .from("profiles")
        .select("id")
        .eq("stripe_subscription_id", subscription.id)
        .single();
      if (data) {
        await supabase.from("profiles").update({ is_pro: false, stripe_subscription_id: null }).eq("id", data.id);
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
