import Link from "next/link";
import { BarChart3, BookOpen, Brain, LineChart, PenLine, Search, Settings, Sparkles, Bell } from "lucide-react";

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
    { name: "Upgrade to Pro", icon: Sparkles, href: "/pricing" },
  ]},
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-[240px] bg-surface-1 border-r border-surface-4 flex flex-col shrink-0">
        <div className="px-5 py-5 border-b border-surface-4">
          <Link href="/dashboard" className="text-lg font-extrabold text-white">
            Chart<span className="text-brand">-Sensei</span>
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
        </nav>
        <div className="px-5 py-4 border-t border-surface-4 flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-xs font-bold text-surface-0">
            U
          </div>
          <div>
            <div className="text-xs font-semibold text-white">User</div>
            <div className="text-[10px] text-brand">Free</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto bg-surface-0">
        {children}
      </main>
    </div>
  );
}
