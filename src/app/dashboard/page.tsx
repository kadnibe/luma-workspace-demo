import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  CircleHelp,
  Clock3,
  FolderKanban,
  LayoutDashboard,
  ListTodo,
  Menu,
  MessageSquareText,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Users2,
} from "lucide-react";

import { Logo } from "@/components/logo";
import { AuthGuard, DashboardGreeting, DashboardUser } from "@/components/auth-guard";

export const metadata: Metadata = { title: "Личный кабинет" };

const navItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "My tasks", icon: ListTodo },
  { label: "Projects", icon: FolderKanban },
  { label: "Calendar", icon: CalendarDays },
  { label: "Messages", icon: MessageSquareText, badge: "3" },
];

const tasks = [
  { title: "Review product brief", project: "Website refresh", due: "Today", tag: "High", tagClass: "bg-rose-50 text-rose-700" },
  { title: "Prepare team update", project: "Operations", due: "Tomorrow", tag: "Medium", tagClass: "bg-amber-50 text-amber-700" },
  { title: "Approve campaign assets", project: "Spring campaign", due: "Jul 16", tag: "Low", tagClass: "bg-slate-100 text-slate-600" },
  { title: "Customer discovery notes", project: "Research", due: "Jul 18", tag: "Medium", tagClass: "bg-amber-50 text-amber-700" },
];

const projects = [
  { title: "Website refresh", progress: 72, color: "bg-violet-600", members: ["AM", "KL", "RJ"] },
  { title: "Spring campaign", progress: 46, color: "bg-cyan-500", members: ["TS", "AM"] },
  { title: "Mobile experience", progress: 88, color: "bg-emerald-500", members: ["RJ", "KL", "TS"] },
];

export default function DashboardPage() {
  return (
    <AuthGuard>
      <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-200 bg-white lg:flex">
          <div className="flex h-18 items-center border-b border-slate-100 px-6"><Logo /></div>
          <nav className="flex-1 p-4" aria-label="Dashboard navigation">
            <p className="px-3 pb-2 pt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Workspace</p>
            <div className="space-y-1">
              {navItems.map((item) => (
                <a className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${item.active ? "bg-violet-50 text-violet-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`} href="#" key={item.label}>
                  <item.icon className="size-4.5" /><span className="flex-1">{item.label}</span>{item.badge && <span className="grid size-5 place-items-center rounded-full bg-violet-600 text-[10px] text-white">{item.badge}</span>}
                </a>
              ))}
            </div>
            <p className="mt-7 px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Manage</p>
            <a className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50" href="#"><Users2 className="size-4.5" />Team</a>
            <a className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50" href="#"><Settings className="size-4.5" />Settings</a>
          </nav>
          <div className="m-4 rounded-2xl bg-slate-950 p-4 text-white">
            <CircleHelp className="size-5 text-violet-300" />
            <p className="mt-3 text-sm font-semibold">Need a hand?</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">Browse quick guides or chat with our team.</p>
            <button className="mt-3 text-xs font-semibold text-violet-300" type="button">Visit help center</button>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="flex h-18 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-7">
            <div className="flex items-center gap-3 lg:hidden"><details className="relative"><summary className="grid size-9 cursor-pointer list-none place-items-center rounded-lg border border-slate-200 [&::-webkit-details-marker]:hidden"><Menu className="size-4.5" /></summary><div className="absolute left-0 top-11 z-20 w-60 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">{navItems.map((item) => <a className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50" href="#" key={item.label}><item.icon className="size-4" />{item.label}</a>)}</div></details><Logo /></div>
            <div className="relative hidden w-full max-w-sm lg:block"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" /><input className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-3 focus:ring-violet-100" placeholder="Search anything..." aria-label="Search" /></div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button className="relative grid size-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50" aria-label="Notifications"><Bell className="size-4.5" /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-violet-600 ring-2 ring-white" /></button>
              <div className="h-7 w-px bg-slate-200" />
              <DashboardUser />
            </div>
          </header>

          <div className="p-4 sm:p-7 lg:p-9">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div><p className="text-sm text-slate-500">Понедельник, 13 июля</p><DashboardGreeting /><p className="mt-2 text-sm text-slate-500">Вот что происходит с вашими задачами сегодня.</p></div>
              <button className="button-primary self-start sm:self-auto" type="button"><Plus className="size-4" />Create task</button>
            </div>

            <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Workspace statistics">
              <StatCard icon={ListTodo} label="Tasks due" value="8" change="3 due today" color="bg-violet-50 text-violet-700" />
              <StatCard icon={FolderKanban} label="Active projects" value="6" change="2 on track" color="bg-cyan-50 text-cyan-700" />
              <StatCard icon={Clock3} label="Hours focused" value="24.5" change="+12% this week" color="bg-amber-50 text-amber-700" />
              <StatCard icon={CheckCircle2} label="Completed" value="32" change="84% completion" color="bg-emerald-50 text-emerald-700" />
            </section>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_0.8fr]">
              <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6"><div><h2 className="font-semibold text-slate-900">My tasks</h2><p className="mt-0.5 text-xs text-slate-400">Your priority list for this week</p></div><button className="text-xs font-semibold text-violet-700" type="button">View all</button></div>
                <div className="divide-y divide-slate-100">
                  {tasks.map((task) => (
                    <div className="flex items-center gap-3 px-4 py-4 transition hover:bg-slate-50 sm:px-6" key={task.title}>
                      <button className="size-4.5 shrink-0 rounded-full border-2 border-slate-300 hover:border-violet-500" aria-label={`Complete ${task.title}`} />
                      <div className="min-w-0 flex-1"><p className="truncate text-sm font-medium text-slate-800">{task.title}</p><p className="mt-1 text-xs text-slate-400">{task.project}</p></div>
                      <span className={`hidden rounded-full px-2.5 py-1 text-[10px] font-semibold sm:inline ${task.tagClass}`}>{task.tag}</span>
                      <span className="w-16 text-right text-xs text-slate-500">{task.due}</span>
                      <button className="text-slate-400" aria-label="Task actions"><MoreHorizontal className="size-4" /></button>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center justify-between"><div><h2 className="font-semibold text-slate-900">Weekly progress</h2><p className="mt-0.5 text-xs text-slate-400">July 13–19</p></div><button className="rounded-lg border border-slate-200 p-2 text-slate-400"><MoreHorizontal className="size-4" /></button></div>
                <div className="mt-6 flex items-center gap-6">
                  <div className="relative grid size-28 shrink-0 place-items-center rounded-full bg-[conic-gradient(#7c3aed_0_84%,#ede9fe_84%_100%)]"><div className="grid size-20 place-items-center rounded-full bg-white"><div className="text-center"><p className="text-2xl font-semibold text-slate-900">84%</p><p className="text-[10px] text-slate-400">complete</p></div></div></div>
                  <div className="space-y-3 text-sm"><p className="flex items-center gap-2 text-slate-600"><span className="size-2 rounded-full bg-violet-600" />32 completed</p><p className="flex items-center gap-2 text-slate-600"><span className="size-2 rounded-full bg-violet-200" />6 remaining</p><p className="pt-1 text-xs font-medium text-emerald-600">You’re ahead of schedule</p></div>
                </div>
                <div className="mt-6 rounded-xl bg-slate-50 p-3 text-xs leading-5 text-slate-500">You completed <strong className="font-semibold text-slate-700">5 more tasks</strong> than last week. Nice momentum!</div>
              </section>
            </div>

            <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between"><div><h2 className="font-semibold text-slate-900">Active projects</h2><p className="mt-0.5 text-xs text-slate-400">Projects you’ve recently worked on</p></div><button className="inline-flex items-center gap-1 text-xs font-semibold text-violet-700" type="button">View all <ArrowUpRight className="size-3.5" /></button></div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {projects.map((project) => (
                  <article className="rounded-2xl border border-slate-200 p-4 transition hover:border-violet-200 hover:shadow-md" key={project.title}>
                    <div className="flex items-center justify-between"><div className={`size-2.5 rounded-full ${project.color}`} /><MoreHorizontal className="size-4 text-slate-400" /></div>
                    <h3 className="mt-4 text-sm font-semibold text-slate-900">{project.title}</h3>
                    <div className="mt-4 flex items-center justify-between text-xs"><span className="text-slate-400">Progress</span><span className="font-semibold text-slate-700">{project.progress}%</span></div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${project.color}`} style={{ width: `${project.progress}%` }} /></div>
                    <div className="mt-4 flex items-center justify-between"><div className="flex -space-x-1.5">{project.members.map((member) => <span className="grid size-7 place-items-center rounded-full border-2 border-white bg-slate-200 text-[8px] font-semibold text-slate-600" key={member}>{member}</span>)}</div><span className="text-[10px] text-slate-400">Updated 2h ago</span></div>
                  </article>
                ))}
              </div>
            </section>
            <p className="mt-6 text-center text-xs text-slate-400">Dashboard data is illustrative and stored in code until a backend is connected. <Link className="font-medium text-violet-700" href="/">Return to website</Link></p>
          </div>
        </div>
      </div>
      </main>
    </AuthGuard>
  );
}

function StatCard({ icon: Icon, label, value, change, color }: { icon: typeof ListTodo; label: string; value: string; change: string; color: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between"><div className={`grid size-10 place-items-center rounded-xl ${color}`}><Icon className="size-4.5" /></div><MoreHorizontal className="size-4 text-slate-300" /></div>
      <p className="mt-4 text-xs font-medium text-slate-400">{label}</p>
      <div className="mt-1 flex items-end justify-between gap-2"><p className="text-2xl font-semibold tracking-tight text-slate-900">{value}</p><p className="pb-0.5 text-[10px] font-medium text-slate-500">{change}</p></div>
    </article>
  );
}
