"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { Sparkles, Check } from "lucide-react";

export default function SettingsPage() {
  const [user, setUser] = useState<{ email?: string } | null>(null);
  const [isPro, setIsPro] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }: { data: { user: { id: string; email?: string } | null } }) => {
      setUser(data.user);
      if (data.user) {
        supabase.from("profiles").select("is_pro").eq("id", data.user.id).single()
          .then(({ data: profile }: { data: { is_pro?: boolean } | null }) => setIsPro(profile?.is_pro || false));
      }
    });
  }, []);

  const handleUpgrade = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="p-8 lg:p-10 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Settings</h1>
        <p className="text-neutral-500 text-sm">Manage your account and subscription</p>
      </div>

      {/* Account */}
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 mb-6">
        <h2 className="text-sm font-semibold text-white mb-4">Account</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-neutral-500">Email</span>
            <span className="text-sm text-white">{user?.email || "..."}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-neutral-500">Plan</span>
            <span className={`text-sm font-semibold ${isPro ? "text-brand" : "text-neutral-300"}`}>
              {isPro ? "Pro" : "Free"}
            </span>
          </div>
        </div>
      </div>

      {/* Subscription */}
      {!isPro && (
        <div className="bg-white/[0.02] border border-brand/30 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-brand" />
            <h2 className="text-sm font-semibold text-white">Upgrade to Pro</h2>
          </div>
          <p className="text-xs text-neutral-500 mb-4">Unlock all 19 strategies, unlimited analyses, quiz mode, and trading journal.</p>
          <div className="text-3xl font-extrabold text-white mb-1">$19<span className="text-sm font-normal text-neutral-500">/month</span></div>
          <ul className="space-y-2 my-5">
            {[
              "Unlimited chart analyses",
              "All 19 trading strategies",
              "Quiz mode with real charts",
              "Trading journal",
              "All markets (Crypto, Stocks, Forex)",
              "Priority AI responses",
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                <Check className="w-3.5 h-3.5 text-brand" /> {f}
              </li>
            ))}
          </ul>
          <button
            onClick={handleUpgrade}
            disabled={loading}
            className="w-full bg-brand text-black py-3 rounded-xl text-sm font-bold hover:bg-brand-light transition disabled:opacity-50"
          >
            {loading ? "Loading..." : "Upgrade Now"}
          </button>
        </div>
      )}

      {isPro && (
        <div className="bg-white/[0.02] border border-brand/30 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-5 h-5 text-brand" />
            <h2 className="text-sm font-semibold text-white">Pro Plan Active</h2>
          </div>
          <p className="text-xs text-neutral-500">You have access to all features. Manage your subscription via the Stripe customer portal.</p>
        </div>
      )}
    </div>
  );
}
