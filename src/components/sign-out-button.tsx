"use client";

import { createClient } from "@/lib/supabase/client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <button onClick={handleSignOut} className="p-1 text-text-faint hover:text-text-muted transition" title="Sign out">
      <LogOut className="w-3.5 h-3.5" />
    </button>
  );
}
