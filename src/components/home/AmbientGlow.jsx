import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";

/* =========================================================
   OPTIMIZED PREMIUM AMBIENT GLOW
========================================================= */

/*
  🔥 PERFORMANCE IMPROVEMENTS

  ✅ Reduced heavy blur sizes
  ✅ Reduced particle count
  ✅ Removed external texture request
  ✅ Stable random positions using useMemo
  ✅ GPU optimized transforms
  ✅ Less animation load
  ✅ Mobile friendly
  ✅ Premium cinematic look maintained
*/

/* =========================================================
   FLOATING ORBS DATA
========================================================= */

const createOrbs = () =>
  [...Array(6)].map((_, i) => ({
    id: i,
    size: 180 + i * 40,
    left: `${8 + i * 14}%`,
    top: `${10 + (i % 3) * 24}%`,
    color:
      i % 2 === 0
        ? "bg-yellow-400/10"
        : "bg-violet-500/10",
    duration: 12 + i * 2,
    delay: i * 0.5,
  }));

/* =========================================================
   PARTICLES DATA
========================================================= */

const createParticles = () =>
  [...Array(14)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 2 + (i % 2),
    duration: 5 + i * 0.4,
    delay: i * 0.25,
  }));

/* =========================================================
   MAIN COMPONENT
========================================================= */

const AmbientGlow = () => {
  const orbs = useMemo(() => createOrbs(), []);
  const particles = useMemo(
    () => createParticles(),
    []
  );

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
        will-change-transform
      "
    >
      {/* ========================================================= */}
      {/* BASE BACKGROUND */}
      {/* ========================================================= */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,#111827_0%,#050816_45%,#02030a_100%)]
        "
      />

      {/* ========================================================= */}
      {/* MAIN CENTER GLOW */}
      {/* ========================================================= */}

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.14, 0.22, 0.14],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[35%]
          h-[520px]
          w-[520px]
          -translate-x-1/2
          rounded-full
          bg-yellow-400/15
          blur-[120px]
          will-change-transform
        "
      />

      {/* ========================================================= */}
      {/* LEFT LIGHT */}
      {/* ========================================================= */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-160px]
          top-[8%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-yellow-500/10
          blur-[120px]
          will-change-transform
        "
      />

      {/* ========================================================= */}
      {/* RIGHT LIGHT */}
      {/* ========================================================= */}

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-180px]
          top-[22%]
          h-[460px]
          w-[460px]
          rounded-full
          bg-violet-500/10
          blur-[130px]
          will-change-transform
        "
      />

      {/* ========================================================= */}
      {/* BOTTOM FOG */}
      {/* ========================================================= */}

      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-180px]
          left-1/2
          h-[360px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-yellow-300/10
          blur-[120px]
          will-change-transform
        "
      />

      {/* ========================================================= */}
      {/* LIGHT RAYS */}
      {/* ========================================================= */}

      <motion.div
        animate={{
          opacity: [0.02, 0.06, 0.02],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[-280px]
          h-[850px]
          w-[160px]
          -translate-x-1/2
          rotate-[14deg]
          bg-gradient-to-b
          from-yellow-200/20
          via-yellow-200/5
          to-transparent
          blur-[90px]
        "
      />

      {/* ========================================================= */}
      {/* FLOATING ORBS */}
      {/* ========================================================= */}

      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          animate={{
            y: [0, -30, 0],
            x: [0, 18, 0],
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
          className={`
            absolute
            rounded-full
            blur-[90px]
            will-change-transform
            ${orb.color}
          `}
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: orb.left,
            top: orb.top,
          }}
        />
      ))}

      {/* ========================================================= */}
      {/* PARTICLES */}
      {/* ========================================================= */}

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
          className="
            absolute
            rounded-full
            bg-yellow-300
            shadow-[0_0_8px_rgba(253,224,71,0.5)]
            will-change-transform
          "
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}

      {/* ========================================================= */}
      {/* PREMIUM GRID */}
      {/* ========================================================= */}

      <div
        className="
          absolute inset-0
          opacity-[0.02]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "140px 140px",
        }}
      />

      {/* ========================================================= */}
      {/* VIGNETTE */}
      {/* ========================================================= */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.75)_100%)]
        "
      />

      {/* ========================================================= */}
      {/* TOP SHADOW */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[180px]
          bg-gradient-to-b
          from-black
          via-black/50
          to-transparent
        "
      />

      {/* ========================================================= */}
      {/* BOTTOM SHADOW */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[220px]
          bg-gradient-to-t
          from-black
          via-black/60
          to-transparent
        "
      />
    </div>
  );
};

export default memo(AmbientGlow);