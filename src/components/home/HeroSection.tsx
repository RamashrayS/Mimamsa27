"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { OwlMascot } from "./OwlMascot";
import { WindEffects } from "./WindEffects";

function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.6 }}
      className="mt-10 w-full max-w-md"
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <div className="relative flex-1">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your mail"
              disabled={submitted}
              className="w-full rounded-2xl border border-charcoal/12 bg-ivory px-5 py-3.5 text-charcoal shadow-[inset_0_1px_2px_rgba(45,42,38,0.04)] outline-none transition placeholder:text-charcoal-soft/50 focus:border-crimson/40 focus:ring-2 focus:ring-crimson/15 disabled:opacity-60"
            />
          </div>
          <motion.button
            type="submit"
            disabled={submitted}
            whileHover={{ scale: submitted ? 1 : 1.02 }}
            whileTap={{ scale: submitted ? 1 : 0.98 }}
            className="relative overflow-hidden rounded-2xl bg-deep-red px-6 py-3.5 text-sm font-semibold text-ivory shadow-[0_8px_28px_-6px_rgba(122,24,40,0.45)] transition hover:bg-crimson disabled:cursor-default"
          >
            <motion.span className="relative z-10" animate={submitted ? { opacity: [1, 0] } : {}}>
              {submitted ? "You're in!" : "Notify me"}
            </motion.span>
            {!submitted && (
              <motion.span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.button>
        </div>
        <p className="mt-3 text-sm text-charcoal-soft">
          Get notified when registrations begin
        </p>
      </form>

      <motion.a
        href="mailto:ramashray.sahu@students.iiserpune.ac.in"
        whileHover={{ x: 2 }}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-crimson transition hover:text-deep-red"
      >
        Interested in sponsoring us?
        <span aria-hidden className="transition group-hover:translate-x-0.5">
          →
        </span>
      </motion.a>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <WindEffects />

      <motion.div
        className="pointer-events-none absolute left-[8%] top-[20%] h-32 w-32 rounded-full bg-gold/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute right-[15%] top-[30%] h-40 w-40 rounded-full bg-crimson/8 blur-3xl"
        animate={{ scale: [1, 1.1, 1], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-[20%] left-[20%] hidden h-24 w-24 rounded-full border border-gold/20 lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div className="relative mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 items-center gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:pb-0 lg:pt-12 xl:gap-12 xl:px-16">
        <motion.div
          className="relative z-10 flex flex-col justify-center lg:col-start-1 lg:pr-4 xl:pr-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-tight text-charcoal"
          >
            <span className="block text-deep-red">MIMAMSA</span>
            <span className="mt-1 block bg-gradient-to-r from-charcoal via-charcoal to-charcoal-soft bg-clip-text text-transparent">
              2027
            </span>
          </motion.h1>

          <EmailSignup />
        </motion.div>

        <motion.div
          className="relative flex min-h-[340px] items-end justify-center lg:col-start-2 lg:row-start-1 lg:min-h-[72vh] lg:justify-end lg:pr-0"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full lg:max-w-[560px]">
            <OwlMascot />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
