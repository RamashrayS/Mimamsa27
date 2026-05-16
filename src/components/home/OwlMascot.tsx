"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export function OwlMascot() {
  const [blink, setBlink] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 18 };
  const headRotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [6, -6]),
    springConfig,
  );
  const headRotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
    springConfig,
  );
  const pupilX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-4, 4]),
    springConfig,
  );
  const pupilY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-3, 3]),
    springConfig,
  );

  const handleMove = useCallback(
    (e: PointerEvent) => {
      const rect = document
        .getElementById("owl-stage")
        ?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height * 0.4;
      const nx = Math.max(-0.5, Math.min(0.5, (e.clientX - cx) / rect.width));
      const ny = Math.max(-0.5, Math.min(0.5, (e.clientY - cy) / rect.height));
      mouseX.set(nx);
      mouseY.set(ny);
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [handleMove]);

  useEffect(() => {
    const blinkLoop = () => {
      const delay = 2800 + Math.random() * 3200;
      const t = window.setTimeout(() => {
        setBlink(true);
        window.setTimeout(() => setBlink(false), 140);
        blinkLoop();
      }, delay);
      return t;
    };
    const id = blinkLoop();
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      id="owl-stage"
      className="relative ml-auto flex h-[min(68vh,480px)] w-full max-w-[min(100%,440px)] items-end justify-end overflow-hidden lg:h-[min(76vh,560px)] lg:max-w-[560px]"
    >
      <motion.div
        className="relative w-full"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Branch */}
        <svg
          viewBox="0 0 400 120"
          className="absolute right-0 bottom-[26%] z-0 w-[120%] max-w-none origin-right lg:right-0"
          aria-hidden
        >
          <defs>
            <linearGradient id="branchGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4a3828" />
              <stop offset="50%" stopColor="#5c4a32" />
              <stop offset="100%" stopColor="#6d5840" />
            </linearGradient>
          </defs>
          <motion.path
            d="M400 75 Q280 70 200 68 Q120 66 40 72 Q10 74 0 78"
            fill="none"
            stroke="url(#branchGrad)"
            strokeWidth="14"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.path
            d="M200 68 Q195 45 188 30"
            fill="none"
            stroke="#5c4a32"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          />
          <motion.ellipse
            cx="188"
            cy="26"
            rx="14"
            ry="8"
            fill="#6b8f5e"
            fillOpacity="0.7"
            animate={{ rotate: [0, 3, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </svg>

        {/* Owl body */}
        <motion.div
          className="relative z-10 ml-auto w-[82%] sm:w-[88%]"
          style={{
            rotateX: headRotateX,
            rotateY: headRotateY,
            transformPerspective: 600,
          }}
        >
        <svg
          viewBox="0 0 280 320"
          className="w-full drop-shadow-[0_20px_40px_rgba(45,42,38,0.12)]"
        >
          {/* Feet */}
          <g transform="translate(95, 268)">
            <ellipse cx="22" cy="8" rx="18" ry="6" fill="#c4a882" />
            <ellipse cx="68" cy="8" rx="18" ry="6" fill="#c4a882" />
            <path
              d="M8 0 L22 12 L36 0 M54 0 L68 12 L82 0"
              stroke="#a08060"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Body */}
          <ellipse cx="140" cy="210" rx="72" ry="78" fill="#8B7355" />
          <ellipse cx="140" cy="215" rx="58" ry="62" fill="#A08060" />
          <ellipse cx="140" cy="225" rx="42" ry="48" fill="#E8DDD0" />

          {/* Belly pattern */}
          <path
            d="M120 195 Q140 240 160 195"
            fill="none"
            stroke="#D4C4B0"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            opacity="0.6"
          />

          {/* Wings */}
          <motion.g
            animate={{ rotate: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "80px 200px" }}
          >
            <ellipse cx="72" cy="205" rx="28" ry="52" fill="#7A6348" />
            <ellipse cx="72" cy="210" rx="20" ry="40" fill="#8B7355" />
          </motion.g>
          <motion.g
            animate={{ rotate: [0, 2, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
            style={{ transformOrigin: "208px 200px" }}
          >
            <ellipse cx="208" cy="205" rx="28" ry="52" fill="#7A6348" />
            <ellipse cx="208" cy="210" rx="20" ry="40" fill="#8B7355" />
          </motion.g>

          {/* Head */}
          <circle cx="140" cy="130" r="68" fill="#8B7355" />
          <circle cx="140" cy="135" r="58" fill="#A08060" />

          {/* Ear tufts */}
          <path d="M88 88 L78 42 L102 78 Z" fill="#7A6348" />
          <path d="M192 88 L202 42 L178 78 Z" fill="#7A6348" />
          <path d="M92 82 L86 55 L104 76 Z" fill="#9A8068" />
          <path d="M188 82 L194 55 L176 76 Z" fill="#9A8068" />

          {/* Face disc */}
          <ellipse cx="140" cy="138" rx="50" ry="46" fill="#E8DDD0" />

          {/* Eyes outer */}
          <circle cx="108" cy="128" r="26" fill="#FAF7F2" />
          <circle cx="172" cy="128" r="26" fill="#FAF7F2" />
          <circle
            cx="108"
            cy="128"
            r="26"
            fill="none"
            stroke="#D4C4B0"
            strokeWidth="2"
          />
          <circle
            cx="172"
            cy="128"
            r="26"
            fill="none"
            stroke="#D4C4B0"
            strokeWidth="2"
          />

          {/* Pupils with motion */}
          <motion.g style={{ x: pupilX, y: pupilY }}>
            {!blink ? (
              <>
                <circle cx="108" cy="130" r="14" fill="#2D2A26" />
                <circle cx="172" cy="130" r="14" fill="#2D2A26" />
                <circle cx="114" cy="124" r="5" fill="#FAF7F2" />
                <circle cx="178" cy="124" r="5" fill="#FAF7F2" />
              </>
            ) : (
              <>
                <path
                  d="M94 130 Q108 126 122 130"
                  stroke="#2D2A26"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M158 130 Q172 126 186 130"
                  stroke="#2D2A26"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </>
            )}
          </motion.g>

          {/* Beak */}
          <path d="M140 148 L128 168 L140 162 L152 168 Z" fill="#C9A227" />
          <path d="M140 148 L140 162" stroke="#A08020" strokeWidth="1" />

          {/* Cheek blush */}
          <ellipse
            cx="88"
            cy="148"
            rx="10"
            ry="6"
            fill="#B84A5A"
            fillOpacity="0.15"
          />
          <ellipse
            cx="192"
            cy="148"
            rx="10"
            ry="6"
            fill="#B84A5A"
            fillOpacity="0.15"
          />

          {/* Graduation cap accent — science owl */}
          <g transform="translate(118, 52)">
            <rect x="4" y="18" width="36" height="4" rx="1" fill="#7A1828" />
            <polygon points="22,0 44,20 0,20" fill="#7A1828" />
            <motion.circle
              cx="44"
              cy="20"
              r="3"
              fill="#C9A227"
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <line
              x1="44"
              y1="20"
              x2="44"
              y2="32"
              stroke="#C9A227"
              strokeWidth="1.5"
            />
          </g>
        </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
