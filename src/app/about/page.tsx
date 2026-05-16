import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-crimson">About</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-charcoal sm:text-5xl">
          What is Mimamsa?
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal-soft sm:text-xl">
          Derived from the Sanskrit word Mīmāṃsā (मीमांसा), meaning “deep inquiry” or “critical reflection,” Mimamsa is the annual national-level science competition organized by the students of Indian Institute of Science Education and Research, Pune. Designed for undergraduate students across India, the competition emphasizes conceptual understanding, logical reasoning, and scientific curiosity over rote memorization, encouraging participants to explore the true spirit of scientific thinking.
        </p>
      </div>
    </main>
  );
}
