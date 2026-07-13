import Link from "next/link";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";

import { Logo } from "@/components/logo";

export function AuthShell({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <main className="grid min-h-screen bg-white lg:grid-cols-[0.9fr_1.1fr]">
      <section className="flex min-h-screen flex-col px-5 py-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between">
          <Logo />
          <Link className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900" href="/">
            <ArrowLeft className="size-4" /> На главную
          </Link>
        </div>
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-14">
          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">{title}</h1>
          <p className="mt-3 leading-7 text-slate-500">{description}</p>
          <div className="mt-8">{children}</div>
        </div>
        <p className="text-center text-xs text-slate-400">© {new Date().getFullYear()} Luma</p>
      </section>
      <aside className="relative hidden overflow-hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(124,58,237,0.48),transparent_34%),radial-gradient(circle_at_20%_90%,rgba(8,145,178,0.23),transparent_35%)]" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-violet-200"><Sparkles className="size-3.5" />Нам доверяют более 2 000 команд</div>
        </div>
        <div className="relative max-w-lg">
          <blockquote className="text-3xl font-medium leading-tight tracking-[-0.035em]">«С Luma стало проще сосредоточиться на главном. Планирование стало понятнее, а команда — собраннее».</blockquote>
          <div className="mt-8 flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 font-semibold">JM</div>
            <div><p className="font-semibold">Анна Морозова</p><p className="text-sm text-slate-400">Руководитель продукта в Northstar</p></div>
          </div>
        </div>
        <div className="relative flex gap-6 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-400" />Безопасное хранение</span>
          <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-400" />Приватность данных</span>
        </div>
      </aside>
    </main>
  );
}
