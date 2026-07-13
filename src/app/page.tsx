import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  CirclePlay,
  Clock3,
  Layers3,
  ShieldCheck,
  Sparkles,
  Users2,
  Zap,
} from "lucide-react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const features = [
  {
    icon: Layers3,
    title: "Everything in one place",
    description:
      "Plan projects, share updates, and keep important work moving without switching between tools.",
  },
  {
    icon: Zap,
    title: "Move at your pace",
    description:
      "Automate repetitive steps and turn ideas into clear, trackable workflows in a few clicks.",
  },
  {
    icon: ShieldCheck,
    title: "Built for trust",
    description:
      "Thoughtful permissions and reliable infrastructure keep your team’s work safe and organized.",
  },
];

const activity = [
  { label: "Design review", person: "Maya", color: "bg-violet-500" },
  { label: "Launch checklist", person: "Noah", color: "bg-cyan-500" },
  { label: "Customer insights", person: "Ava", color: "bg-amber-500" },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />

      <section className="relative pb-24 pt-16 sm:pt-20 lg:pb-32 lg:pt-28">
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[680px] max-w-7xl rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.12),transparent_66%)] blur-2xl" />
        <div className="container-shell grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div className="max-w-2xl">
            <div className="eyebrow">
              <Sparkles className="size-3.5" />
              The calmer way to get work done
            </div>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
              Make space for work that <span className="text-gradient">matters.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
              Luma brings projects, people, and progress together in one focused workspace—so your team can do its best work.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="button-primary" href="/register">
                Start for free
                <ArrowRight className="size-4" />
              </Link>
              <a className="button-secondary" href="#features">
                <CirclePlay className="size-4" />
                See how it works
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2"><Check className="size-4 text-violet-600" />No credit card</span>
              <span className="inline-flex items-center gap-2"><Check className="size-4 text-violet-600" />Free 14-day trial</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -left-8 top-14 h-32 w-32 rounded-full bg-violet-300/40 blur-3xl" />
            <div className="absolute -right-12 bottom-12 h-40 w-40 rounded-full bg-cyan-200/60 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/80 bg-white/80 p-3 shadow-[0_36px_100px_-32px_rgba(15,23,42,0.3)] backdrop-blur-xl sm:p-5">
              <div className="rounded-[1.4rem] border border-slate-200/80 bg-slate-50 p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Weekly overview</p>
                    <h2 className="mt-1 text-xl font-semibold text-slate-900">Good morning, Alex</h2>
                  </div>
                  <div className="grid size-10 place-items-center rounded-full bg-slate-900 text-sm font-semibold text-white">AS</div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between text-slate-400"><span className="text-xs font-medium">Tasks completed</span><BarChart3 className="size-4" /></div>
                    <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">84%</p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-[84%] rounded-full bg-violet-600" /></div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-900 p-4 text-white shadow-sm">
                    <div className="flex items-center justify-between text-slate-400"><span className="text-xs font-medium">Focused time</span><Clock3 className="size-4" /></div>
                    <p className="mt-4 text-3xl font-semibold tracking-tight">24.5h</p>
                    <p className="mt-3 text-xs text-emerald-300">+12% from last week</p>
                  </div>
                </div>
                <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-900">Recent activity</p>
                    <span className="text-xs font-medium text-violet-600">View all</span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {activity.map((item, index) => (
                      <div className="flex items-center gap-3" key={item.label}>
                        <div className={`size-2 rounded-full ${item.color}`} />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-slate-800">{item.label}</p>
                          <p className="text-xs text-slate-400">Updated by {item.person}</p>
                        </div>
                        <span className="text-xs text-slate-400">{index + 1}h ago</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -top-6 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-3 pr-5 shadow-xl backdrop-blur sm:flex">
              <div className="grid size-9 place-items-center rounded-xl bg-emerald-100 text-emerald-700"><Users2 className="size-4" /></div>
              <div><p className="text-xs text-slate-400">Team sync</p><p className="text-sm font-semibold text-slate-800">12 online</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-slate-50/70 py-9">
        <div className="container-shell flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-center text-sm font-medium text-slate-500 md:text-left">Trusted by thoughtful teams building what’s next</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold tracking-wide text-slate-400 sm:text-base">
            <span>Northstar</span><span>Vertex</span><span>Contrast</span><span>Pulse</span><span>Arc</span>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28" id="features">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow">One workspace, less busywork</div>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">Built to keep your team in flow</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Simple enough to start today. Flexible enough to support your team as it grows.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50 sm:p-8" key={feature.title}>
                <div className="grid size-12 place-items-center rounded-2xl bg-violet-50 text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white">
                  <feature.icon className="size-5" />
                </div>
                <h3 className="mt-7 text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
                <a className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-700" href="#cta">Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-28" id="cta">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-16 text-center text-white sm:px-12 sm:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.45),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(8,145,178,0.24),transparent_42%)]" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Your best work starts with a little more space.</h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">Join teams who use Luma to spend less time managing work—and more time moving it forward.</p>
              <Link className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-violet-50" href="/register">Get started for free <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
