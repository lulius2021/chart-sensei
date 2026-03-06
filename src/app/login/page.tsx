"use client";

import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/dashboard";
  const supabase = createClient();

  const handleGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback?redirect=${redirect}` },
    });
    if (error) setError(error.message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email, password,
          options: { emailRedirectTo: `${window.location.origin}/auth/callback?redirect=${redirect}` },
        });
        if (error) setError(error.message);
        else setMessage("Check your email for a confirmation link!");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) setError(error.message);
        else router.push(redirect);
      }
    } catch {
      setError("Connection failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-sm relative z-10">
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-300 transition mb-8">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to home
        </Link>

        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
              <rect width="32" height="32" rx="6" fill="#111" />
              <ellipse cx="11" cy="10" rx="2.5" ry="1.5" fill="#34d399" />
              <ellipse cx="21" cy="10" rx="2.5" ry="1.5" fill="#34d399" />
              <rect x="7" y="17" width="3" height="8" rx="0.5" fill="#34d399" opacity="0.8" />
              <rect x="12" y="19" width="3" height="6" rx="0.5" fill="#fb7185" opacity="0.8" />
              <rect x="17" y="15" width="3" height="10" rx="0.5" fill="#34d399" opacity="0.8" />
              <rect x="22" y="18" width="3" height="7" rx="0.5" fill="#34d399" opacity="0.8" />
            </svg>
            <span className="text-xl font-black text-white">Chart<span className="text-brand">-Sensei</span></span>
          </Link>
          <p className="text-neutral-500 text-sm mt-3">
            {isSignUp ? "Create your account" : "Welcome back"}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
          {/* Google */}
          <button onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-3 bg-white/[0.04] border border-white/[0.08] text-white py-3 rounded-xl text-sm font-medium hover:bg-white/[0.08] hover:border-white/[0.12] transition">
            <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span className="text-xs text-neutral-600">or</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          {/* Messages */}
          {error && (
            <div className="bg-loss/10 border border-loss/20 text-loss text-xs rounded-lg px-3 py-2.5 mb-4">
              {error}
            </div>
          )}
          {message && (
            <div className="bg-brand/10 border border-brand/20 text-brand text-xs rounded-lg px-3 py-2.5 mb-4">
              {message}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-neutral-500 mb-1.5">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com" required
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2.5 text-sm text-white placeholder-neutral-600 focus:border-brand/50 focus:outline-none transition" />
            </div>
            <div>
              <label className="block text-xs text-neutral-500 mb-1.5">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" required minLength={6}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2.5 text-sm text-white placeholder-neutral-600 focus:border-brand/50 focus:outline-none transition" />
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-brand text-black py-3 rounded-xl text-sm font-bold hover:bg-brand-light transition disabled:opacity-50 shadow-[0_0_20px_rgba(52,211,153,0.15)]">
              {loading ? "Loading..." : isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

          <p className="text-center text-xs text-neutral-600 mt-6">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button onClick={() => { setIsSignUp(!isSignUp); setError(""); setMessage(""); }}
              className="text-brand hover:underline font-medium">
              {isSignUp ? "Sign in" : "Sign up"}
            </button>
          </p>
        </div>

        <p className="text-center text-[10px] text-neutral-700 mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return <Suspense fallback={<div className="min-h-screen bg-black" />}><LoginForm /></Suspense>;
}
