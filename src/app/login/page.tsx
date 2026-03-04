"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-surface-0 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-extrabold text-white">
            Chart<span className="text-brand">-Sensei</span>
          </Link>
          <p className="text-text-muted text-sm mt-2">Sign in to your account</p>
        </div>
        <div className="bg-surface-2 border border-surface-4 rounded-2xl p-8">
          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 bg-surface-3 border border-surface-4 text-white py-3 rounded-xl text-sm font-medium hover:border-text-dim transition mb-4">
            <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-surface-4" />
            <span className="text-xs text-text-faint">or</span>
            <div className="flex-1 h-px bg-surface-4" />
          </div>

          {/* Email */}
          <form className="space-y-4">
            <div>
              <label className="block text-xs text-text-muted mb-1.5">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-surface-3 border border-surface-4 rounded-lg px-3 py-2.5 text-sm text-white placeholder-text-dim focus:border-brand focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs text-text-muted mb-1.5">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-surface-3 border border-surface-4 rounded-lg px-3 py-2.5 text-sm text-white placeholder-text-dim focus:border-brand focus:outline-none transition"
              />
            </div>
            <button type="submit" className="w-full bg-brand text-surface-0 py-3 rounded-xl text-sm font-bold hover:bg-brand-light transition">
              Sign In
            </button>
          </form>

          <p className="text-center text-xs text-text-dim mt-5">
            Don&apos;t have an account?{" "}
            <Link href="/login" className="text-brand hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
