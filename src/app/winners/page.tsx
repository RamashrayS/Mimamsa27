"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const winners = [
  {
    year: "2026",
    school: "Indian Institute of Technology, Delhi",
    city: "Delhi",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.iitd.ac.in&sz=128",
  },
  {
    year: "2025",
    school: "Indian Institute of Science, Bangalore",
    city: "Bangalore",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.iisc.ac.in&sz=128",
  },
  {
    year: "2024",
    school: "Indian Institute of Technology, Bombay",
    city: "Mumbai",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.iitb.ac.in&sz=128",
  },
  {
    year: "2023",
    school: "Indian Institute of Science, Bangalore",
    city: "Bangalore",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.iisc.ac.in&sz=128",
  },
  {
    year: "2022",
    school: "Indian Institute of Technology, Madras",
    city: "Chennai",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.iitm.ac.in&sz=128",
  },
  {
    year: "2021",
    school: "Indian Institute of Science, Bangalore",
    city: "Bangalore",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.iisc.ac.in&sz=128",
  },
  {
    year: "2020",
    school: "Indian Institute of Science, Bangalore",
    city: "Bangalore",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.iisc.ac.in&sz=128",
  },
  {
    year: "2019",
    school: "Indian Institute of Science, Bangalore",
    city: "Bangalore",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.iisc.ac.in&sz=128",
  },
  {
    year: "2018",
    school: "Indian Institute of Science, Bangalore",
    city: "Bangalore",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.iisc.ac.in&sz=128",
  },
  {
    year: "2017",
    school: "Indian Institute of Technology, Bombay",
    city: "Mumbai",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.iitb.ac.in&sz=128",
  },
  {
    year: "2016",
    school: "Indian Institute of Science, Bangalore",
    city: "Bangalore",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.iisc.ac.in&sz=128",
  },
  {
    year: "2015",
    school: "Indian Institute of Science, Bangalore",
    city: "Bangalore",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.iisc.ac.in&sz=128",
  },
  {
    year: "2014",
    school: "Indian Institute of Science, Bangalore",
    city: "Bangalore",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.iisc.ac.in&sz=128",
  },
  {
    year: "2013",
    school: "Indian Institute of Science, Bangalore",
    city: "Bangalore",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.iisc.ac.in&sz=128",
  },
  {
    year: "2012",
    school: "Indian Institute of Science, Bangalore",
    city: "Bangalore",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.iisc.ac.in&sz=128",
  },
  {
    year: "2011",
    school: "Osmania Medical College, Hyderabad",
    city: "Hyderabad",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.osmania.ac.in&sz=128",
  },
  {
    year: "2010",
    school: "Institute of Bioinformatics and Biotechnology, Pune",
    city: "Pune",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.ibb.ac.in&sz=128",
  },
  {
    year: "2009",
    school: "Fergusson College, Pune",
    city: "Pune",
    logoSrc: "https://www.google.com/s2/favicons?domain_url=https://www.fergusson.edu&sz=128",
  },
];

function LogoHead({ logoSrc, school }: { logoSrc: string; school: string }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="relative flex h-36 w-36 items-center justify-center rounded-full bg-white/95 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]"
    >
      <div className="absolute inset-0 rounded-full bg-slate-300/10" />
      <img
        src={logoSrc}
        alt={`${school} logo`}
        className="relative h-20 w-20 rounded-full border border-charcoal/10 bg-white object-contain p-2"
      />
    </motion.div>
  );
}

export default function WinnersPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedWinner = winners[selectedIndex];

  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-crimson">Hall of Winners</p>
          <h1 className="font-display text-4xl font-semibold text-charcoal sm:text-5xl">
            Previous Champions
          </h1>
        </div>

        <section className="mt-16 flex flex-col gap-6 rounded-[2rem] border border-charcoal/10 bg-white/95 p-5 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.12)] sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setSelectedIndex((index) => Math.max(index - 1, 0))}
              disabled={selectedIndex === 0}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-charcoal/10 bg-ivory text-charcoal transition hover:border-crimson/30 hover:text-crimson disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous winner"
            >
              ←
            </button>

            <div className="relative flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedWinner.year}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 rounded-[2rem] border border-charcoal/10 bg-ivory p-8 shadow-[0_18px_55px_-28px_rgba(15,23,42,0.3)] sm:flex-row sm:items-center"
                >
                  <div className="flex flex-col items-center gap-6 sm:items-start sm:gap-8 sm:flex-row">
                    <LogoHead logoSrc={selectedWinner.logoSrc} school={selectedWinner.school} />
                    <div className="space-y-2 text-center sm:text-left">
                      <p className="text-xs uppercase tracking-[0.3em] text-crimson">{selectedWinner.year}</p>
                      <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
                        {selectedWinner.school}
                      </h2>
                      <p className="text-sm text-charcoal-soft">{selectedWinner.city}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={() => setSelectedIndex((index) => Math.min(index + 1, winners.length - 1))}
              disabled={selectedIndex === winners.length - 1}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-charcoal/10 bg-ivory text-charcoal transition hover:border-crimson/30 hover:text-crimson disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next winner"
            >
              →
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
