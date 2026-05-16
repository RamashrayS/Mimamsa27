"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const LEAVES = [
  { top: "18%", delay: 0, size: 14, duration: 14 },
  { top: "32%", delay: 2.5, size: 10, duration: 18 },
  { top: "48%", delay: 1.2, size: 12, duration: 16 },
  { top: "62%", delay: 4, size: 9, duration: 20 },
  { top: "75%", delay: 0.8, size: 11, duration: 15 },
  { top: "40%", delay: 3.2, size: 8, duration: 17 },
] as const;

function LeafIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2C8 8 4 10 4 14c0 4 3.5 8 8 8 4.5 0 8-4 8-8 0-4-4-6-8-12z"
        fill="#6b8f5e"
        fillOpacity="0.55"
      />
      <path
        d="M12 6v14M12 10c-2 2-4 3-4 5"
        stroke="#4a6b42"
        strokeWidth="0.8"
        strokeOpacity="0.4"
      />
    </svg>
  );
}

export function WindEffects() {
  const gusts = useMemo(
    () =>
      [0, 1, 2].map((i) => ({
        id: i,
        top: `${22 + i * 22}%`,
        delay: i * 1.8,
      })),
    [],
  );

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {gusts.map((g) => (
        <motion.div
          key={g.id}
          className="absolute left-0 h-px w-[45%] max-w-md"
          style={{ top: g.top }}
          initial={{ x: "-30%", opacity: 0 }}
          animate={{
            x: ["-30%", "120%"],
            opacity: [0, 0.35, 0.2, 0],
          }}
          transition={{
            duration: 9 + g.id * 2,
            repeat: Infinity,
            delay: g.delay,
            ease: "easeInOut",
          }}
        >
          <div
            className="h-full w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(201,162,39,0.12) 30%, rgba(255,255,255,0.5) 60%, transparent)",
            }}
          />
        </motion.div>
      ))}

      {LEAVES.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute left-0"
          style={{ top: leaf.top }}
          initial={{ x: "-5%", opacity: 0, rotate: -20 }}
          animate={{
            x: ["-5%", "95%"],
            y: [0, -12, 8, -6, 0],
            rotate: [-20, 10, -8, 15, -5],
            opacity: [0, 0.7, 0.5, 0],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            delay: leaf.delay,
            ease: "easeInOut",
          }}
        >
          <LeafIcon size={leaf.size} />
        </motion.div>
      ))}

      {[...Array(6)].map((_, i) => (
        <motion.span
          key={`dot-${i}`}
          className="absolute rounded-full bg-gold/20"
          style={{
            width: 3 + (i % 3),
            height: 3 + (i % 3),
            top: `${15 + i * 12}%`,
          }}
          animate={{
            x: ["0vw", "85vw"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: i * 1.4,
            ease: "linear",
          }}
        />
      ))}
    </motion.div>
  );
}
