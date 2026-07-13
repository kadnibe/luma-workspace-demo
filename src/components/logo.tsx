import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className="inline-flex items-center gap-2.5" href="/" aria-label="Luma home">
      <span className="relative grid size-8 place-items-center overflow-hidden rounded-[10px] bg-violet-600 shadow-lg shadow-violet-200">
        <span className="absolute h-2.5 w-5 rotate-[-35deg] rounded-full bg-white/90" />
        <span className="absolute h-2.5 w-5 translate-x-1.5 translate-y-1.5 rotate-[-35deg] rounded-full bg-violet-300" />
      </span>
      <span className={`text-lg font-semibold tracking-[-0.03em] ${inverse ? "text-white" : "text-slate-950"}`}>luma</span>
    </Link>
  );
}
