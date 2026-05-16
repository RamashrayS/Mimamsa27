import Link from "next/link";

const faq = [
  {
    q: "Who can participate?",
    a: "High school students across India, typically in teams of 2–4, through their schools or independent registration.",
  },
  {
    q: "When do applications open?",
    a: "Sign up on the homepage — we'll email you the moment the 2027 window opens. Usually early autumn.",
  },
  {
    q: "Is there a registration fee?",
    a: "Mimamsa is committed to accessibility. Fee details are announced with each edition's registration packet.",
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
        
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-crimson">FAQ</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-charcoal sm:text-5xl">
          Questions we hear often
        </h1>

        <div className="mt-12 space-y-6">
          {faq.map((item) => (
            <article key={item.q} className="rounded-2xl border border-charcoal/8 bg-ivory p-6">
              <p className="font-semibold text-charcoal">{item.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
