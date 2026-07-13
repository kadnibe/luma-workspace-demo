"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { LoaderCircle, LogOut } from "lucide-react";

import { getCurrentUser, logoutUser, type LocalUser } from "@/lib/local-auth";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<LocalUser | null>();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const currentUser = getCurrentUser();
      setUser(currentUser);
      if (!currentUser) router.replace("/login");
    }, 0);

    return () => window.clearTimeout(timer);
  }, [router]);

  if (!user) {
    return <main className="grid min-h-screen place-items-center bg-slate-50"><div className="flex items-center gap-3 text-sm font-medium text-slate-500"><LoaderCircle className="size-5 animate-spin text-violet-600" />Проверяем вход…</div></main>;
  }

  return <DashboardUserContext.Provider value={user}>{children}</DashboardUserContext.Provider>;
}

const DashboardUserContext = createContext<LocalUser | null>(null);

export function DashboardUser() {
  const router = useRouter();
  const user = useContext(DashboardUserContext);
  if (!user) return null;
  const initials = user.name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();

  return (
    <div className="flex items-center gap-2">
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xs font-semibold text-white">{initials}</span>
      <span className="hidden text-left sm:block"><span className="block max-w-36 truncate text-xs font-semibold text-slate-800">{user.name}</span><span className="block max-w-36 truncate text-[10px] text-slate-400">{user.email}</span></span>
      <button className="ml-1 grid size-9 place-items-center rounded-xl text-slate-400 transition hover:bg-rose-50 hover:text-rose-600" type="button" aria-label="Выйти" title="Выйти" onClick={() => { logoutUser(); router.replace("/login"); }}><LogOut className="size-4" /></button>
    </div>
  );
}

export function DashboardGreeting() {
  const user = useContext(DashboardUserContext);
  const firstName = user?.name.split(/\s+/)[0] ?? "друг";
  return <h1 className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-slate-950">Добро пожаловать, {firstName}</h1>;
}
