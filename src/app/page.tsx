"use client";

import { motion } from "framer-motion";
import { AmbientBackground } from "@/components/home/AmbientBackground";
import { HeroSection } from "@/components/home/HeroSection";

function MobileNav() {
  const items = [
    { label: "About", href: "/about" },
    { label: "2026", href: "/mimamsa-2026" },
    { label: "Winners", href: "/winners" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-charcoal/8 bg-ivory/95 px-2 py-2 backdrop-blur-xl md:hidden"
    >
      <ul className="flex justify-around">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="cursor-pointer flex flex-col items-center gap-0.5 rounded-xl px-3 py-2 text-[11px] font-medium text-charcoal-soft transition active:text-deep-red"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative min-h-screen text-charcoal"
    >
      <AmbientBackground />
      <MobileNav />

      <HeroSection />
    </motion.div>
  );
}
