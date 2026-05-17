import Link from "next/link";

export default function Mimamsa2026Page() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
       
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-crimson">Last edition</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-charcoal sm:text-5xl">
          Mimamsa 2026
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal-soft sm:text-xl">
          Relive the energy of our latest edition — problem sets, photos, and stories from teams who made it to Pune.
        </p>
        <Link href="https://www.mimamsa.info/" className="cursor-pointer mt-10 inline-flex rounded-2xl border border-deep-red/20 bg-ivory px-6 py-3 text-sm font-semibold text-deep-red shadow-sm transition hover:border-deep-red/40 hover:shadow-md">
          Mimamsa 2026 →
        </Link>
      </div>
    </main>
  );
}
