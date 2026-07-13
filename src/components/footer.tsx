import Link from "next/link";

import { Logo } from "@/components/logo";

const groups = [
  { title: "Product", links: ["Features", "Integrations", "Pricing", "Changelog"] },
  { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
  { title: "Resources", links: ["Help center", "Community", "Templates", "Status"] },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 sm:py-16">
      <div className="container-shell">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">A calmer, clearer workspace for teams doing meaningful work.</p>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold text-slate-900">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((item) => <li key={item}><Link className="text-sm text-slate-500 transition hover:text-violet-700" href="/#cta">{item}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Luma, Inc. All rights reserved.</p>
          <div className="flex gap-5"><Link href="/">Privacy</Link><Link href="/">Terms</Link><Link href="/">Cookies</Link></div>
        </div>
      </div>
    </footer>
  );
}
