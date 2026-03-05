import Link from "next/link";
import { BarChart3, BookOpen, Brain, LineChart, PenLine, Search, Settings, Sparkles, Bell } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/sign-out-button";

const navItems = [
  { label: "Main", items: [
    { name: "Dashboard", icon: BarChart3, href: "/dashboard" },
    { name: "Analyze Chart", icon: Search, href: "/analyze", badge: "AI" },
    { name: "Learn", icon: BookOpen, href: "/learn" },
    { name: "Quiz", icon: Brain, href: "/quiz" },
  ]},
  { label: "Tools", items: [
    { name: "Journal", icon: PenLine, href: "/journal" },
    { name: "Live Charts", icon: LineChart, href: "/charts" },
    { name: "Alerts", icon: Bell, href: "/alerts" },
  ]},
  { label: "Account", items: [
    { name: "Settings", icon: Settings, href: "/settings" },
  ]},
];

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const isPro = false; // TODO: check Stripe subscription
  const initials = (user.email?.[0] || "U").toUpperCase();

  return (
    <div className="flex h-screen">
      <aside className="w-[240px] bg-surface-1 border-r border-surface-4 flex flex-col shrink-0">
        <div className="px-5 py-5 border-b border-surface-4">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <rect width="32" height="32" rx="6" fill="#0f1221" />
              <ellipse cx="11" cy="10" rx="2.5" ry="1.5" fill="#34d399" />
              <ellipse cx="21" cy="10" rx="2.5" ry="1.5" fill="#34d399" />
              <ellipse cx="11" cy="10" rx="4" ry="3" fill="#34d399" opacity="0.15" />
              <ellipse cx="21" cy="10" rx="4" ry="3" fill="#34d399" opacity="0.15" />
              <rect x="7" y="17" width="3" height="8" rx="0.5" fill="#34d399" opacity="0.8" />
              <rect x="12" y="19" width="3" height="6" rx="0.5" fill="#fb7185" opacity="0.8" />
              <rect x="17" y="15" width="3" height="10" rx="0.5" fill="#34d399" opacity="0.8" />
              <rect x="22" y="18" width="3" height="7" rx="0.5" fill="#34d399" opacity="0.8" />
            </svg>
            <span className="text-base font-extrabold text-white">Chart<span className="text-brand">-Sensei</span></span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto py-3">
          {navItems.map((section) => (
            <div key={section.label} className="px-3 mb-1">
              <div className="text-[10px] uppercase tracking-wider text-text-faint font-semibold px-3 pt-3 pb-1">
                {section.label}
              </div>
              {section.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium text-text-muted hover:bg-surface-3 hover:text-text-secondary transition"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                  {item.badge && (
                    <span className="ml-auto bg-brand text-surface-0 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          ))}
          {!isPro && (
            <div className="px-3 mt-2">
              <Link
                href="/settings"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium text-brand hover:bg-brand-muted transition"
              >
                <Sparkles className="w-4 h-4" />
                Upgrade to Pro
              </Link>
            </div>
          )}
        </nav>
        <div className="px-5 py-4 border-t border-surface-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-xs font-bold text-surface-0">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-white truncate">{user.email}</div>
              <div className="text-[10px] text-brand">{isPro ? "Pro" : "Free"}</div>
            </div>
            <SignOutButton />
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto bg-surface-0">
        {children}
      </main>
    </div>
  );
}
