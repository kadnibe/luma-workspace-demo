import Link from "next/link";
import { Menu } from "lucide-react";

import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="relative z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="container-shell flex h-18 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex" aria-label="Main navigation">
          <Link className="transition hover:text-slate-950" href="/#features">Features</Link>
          <Link className="transition hover:text-slate-950" href="/#cta">Solutions</Link>
          <Link className="transition hover:text-slate-950" href="/#cta">Resources</Link>
          <Link className="transition hover:text-slate-950" href="/#cta">Pricing</Link>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link className="px-3 py-2 text-sm font-semibold text-slate-600 transition hover:text-slate-950" href="/login">Log in</Link>
          <Link className="button-primary h-10 px-4" href="/register">Get started</Link>
        </div>
        <details className="group relative md:hidden">
          <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-xl border border-slate-200 text-slate-700 [&::-webkit-details-marker]:hidden" aria-label="Open navigation">
            <Menu className="size-5" />
          </summary>
          <div className="absolute right-0 top-12 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
            <nav className="flex flex-col text-sm font-medium text-slate-700">
              <Link className="rounded-xl px-3 py-2.5 hover:bg-slate-50" href="/#features">Features</Link>
              <Link className="rounded-xl px-3 py-2.5 hover:bg-slate-50" href="/#cta">Solutions</Link>
              <Link className="rounded-xl px-3 py-2.5 hover:bg-slate-50" href="/#cta">Resources</Link>
              <Link className="rounded-xl px-3 py-2.5 hover:bg-slate-50" href="/#cta">Pricing</Link>
              <div className="my-2 border-t border-slate-100" />
              <Link className="rounded-xl px-3 py-2.5 hover:bg-slate-50" href="/login">Log in</Link>
              <Link className="mt-1 rounded-xl bg-violet-600 px-3 py-2.5 text-center text-white" href="/register">Get started</Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
