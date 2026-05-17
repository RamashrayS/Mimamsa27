"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M3 11.5L12 4l9 7.5v8.5a1 1 0 01-1 1h-5.5V15h-5v6H4a1 1 0 01-1-1v-8.5z"
      />
    ),
  },
  {
    label: "About",
    href: "/about",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
  },
  {
    label: "Mimamsa 2026",
    href: "/mimamsa-2026",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
  },
  {
    label: "Hall of Winners",
    href: "/winners",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    ),
  },
  {
    label: "Sample Problems",
    href: "/problems",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
  },
] as const;

const externalNavItems = [
  {
    label: "IISER Pune",
    href: "https://www.iiserpune.ac.in",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M12 3l7 4v10a2 2 0 01-2 2h-3v-5H10v5H7a2 2 0 01-2-2V7l7-4z"
      />
    ),
    imgSrc: "/globe.svg",
  },
  {
    label: "Praj Industries",
    href: "https://www.praj.net",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M4 6h16M6 10h12M8 14h8M10 18h4"
      />
    ),
  },
] as const;

function NavIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      className="h-[18px] w-[18px] shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function FloatingSidebar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Site sections"
      className="fixed left-3 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 sm:left-5 md:flex"
    >
      {navItems.map((item, i) => (
        <Link key={item.label} href={item.href}>
          <motion.div
            onHoverStart={() => setHovered(item.label)}
            onHoverEnd={() => setHovered(null)}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 + i * 0.06, duration: 0.4 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer group relative flex items-center"
          >
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-2xl border shadow-sm backdrop-blur-md transition-all duration-300 ${
              hovered === item.label
                ? "border-crimson/30 bg-deep-red text-ivory shadow-[0_8px_24px_-6px_rgba(122,24,40,0.35)]"
                : "border-charcoal/8 bg-ivory/90 text-charcoal-soft hover:border-crimson/20 hover:bg-warm-white"
            }`}
          >
            {(item as any).imgSrc ? (
              <img src={(item as any).imgSrc} alt={item.label} className="h-[18px] w-[18px] object-contain" />
            ) : (
              <NavIcon>{item.icon}</NavIcon>
            )}
          </span>

          <AnimatePresence>
            {hovered === item.label && (
              <motion.span
                initial={{ opacity: 0, x: -8, width: 0 }}
                animate={{ opacity: 1, x: 0, width: "auto" }}
                exit={{ opacity: 0, x: -8, width: 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute left-[calc(100%+10px)] overflow-hidden whitespace-nowrap rounded-xl border border-charcoal/8 bg-ivory/95 px-3.5 py-2 text-sm font-medium text-charcoal shadow-[0_8px_30px_-8px_rgba(45,42,38,0.15)] backdrop-blur-md"
              >
                {item.label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
        </Link>
      ))}

      {externalNavItems.map((item, i) => (
        <motion.a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          onHoverStart={() => setHovered(item.label)}
          onHoverEnd={() => setHovered(null)}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55 + (navItems.length + i) * 0.06, duration: 0.4 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="cursor-pointer group relative flex items-center"
        >
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-2xl border shadow-sm backdrop-blur-md transition-all duration-300 ${
              hovered === item.label
                ? "border-crimson/30 bg-deep-red text-ivory shadow-[0_8px_24px_-6px_rgba(122,24,40,0.35)]"
                : "border-charcoal/8 bg-ivory/90 text-charcoal-soft hover:border-crimson/20 hover:bg-warm-white"
            }`}
          >
            {(item as any).imgSrc ? (
              <img src={(item as any).imgSrc} alt={item.label} className="h-[18px] w-[18px] object-contain" />
            ) : (
              <NavIcon>{item.icon}</NavIcon>
            )}
          </span>

          <AnimatePresence>
            {hovered === item.label && (
              <motion.span
                initial={{ opacity: 0, x: -8, width: 0 }}
                animate={{ opacity: 1, x: 0, width: "auto" }}
                exit={{ opacity: 0, x: -8, width: 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute left-[calc(100%+10px)] overflow-hidden whitespace-nowrap rounded-xl border border-charcoal/8 bg-ivory/95 px-3.5 py-2 text-sm font-medium text-charcoal shadow-[0_8px_30px_-8px_rgba(45,42,38,0.15)] backdrop-blur-md"
              >
                {item.label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      ))}
    </motion.nav>
  );
}
