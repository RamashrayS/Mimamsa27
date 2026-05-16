"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function AmbientBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 120]);
  const y2 = useTransform(scrollY, [0, 800], [0, -80]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-24 top-0 h-[520px] w-[520px] rounded-full bg-[#e8d5c4]/40 blur-[100px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-32 top-1/4 h-[480px] w-[480px] rounded-full bg-[#d4a5a5]/25 blur-[110px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2] via-[#f8f4ee] to-[#f3ece2]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#efe8dc]/80 to-transparent" />
    </motion.div>
  );
}
