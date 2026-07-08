import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Music2,
  Disc3,
  ArrowUpRight,
} from "lucide-react";

const SectionTitle = ({
  badge = "Classical Music Experience",
  title,
  highlight,
  subtitle,
  align = "left",
  dark = false,
  centerMobile = true,
  showLine = true,
  icon = true,
  glow = true,
  maxWidth = "max-w-3xl",
}) => {
  /* =========================================================
     ALIGNMENTS
  ========================================================= */

  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : align === "right"
      ? "items-end text-right ml-auto"
      : "items-start text-left";

  /* =========================================================
     MOBILE ALIGN
  ========================================================= */

  const mobileAlign = centerMobile
    ? "text-center md:text-left items-center md:items-start"
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        relative
        flex flex-col
        gap-6
        ${alignment}
        ${mobileAlign}
        ${maxWidth}
      `}
    >
      {/* ========================================================= */}
      {/* TOP GLOW */}
      {/* ========================================================= */}

      {glow && (
        <div
          className="
            absolute
            left-0
            top-0
            h-[200px]
            w-[300px]
            rounded-full
            bg-yellow-400/10
            blur-[100px]
          "
        />
      )}

      {/* ========================================================= */}
      {/* BADGE */}
      {/* ========================================================= */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.1,
          duration: 0.8,
        }}
        className={`
          relative z-10
          inline-flex items-center gap-3
          rounded-full
          border
          px-5 py-3
          backdrop-blur-xl
          ${
            dark
              ? `
                border-yellow-400/15
                bg-yellow-400/10
                text-yellow-200
              `
              : `
                border-white/10
                bg-white/[0.04]
                text-zinc-300
              `
          }
        `}
      >
        {/* ICON */}
        {icon && (
          <div
            className="
              relative
              flex h-8 w-8 items-center justify-center
              rounded-full
              bg-gradient-to-br
              from-yellow-400/20
              to-yellow-300/10
            "
          >
            <Sparkles
              size={15}
              className="text-yellow-300"
            />

            <div
              className="
                absolute inset-0
                rounded-full
                bg-yellow-300/10
                blur-lg
              "
            />
          </div>
        )}

        <span
          className="
            text-sm
            font-medium
            tracking-wide
          "
        >
          {badge}
        </span>
      </motion.div>

      {/* ========================================================= */}
      {/* TITLE */}
      {/* ========================================================= */}

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.15,
            duration: 1,
          }}
          className={`
            marathi
            relative
            font-black
            leading-[0.95]
            tracking-tight
            text-white
            text-4xl
            md:text-6xl
            lg:text-7xl
          `}
        >
          {/* MAIN TITLE */}
          {title}

          {/* HIGHLIGHT */}
          {highlight && (
            <>
              {" "}
              <span
                className="
                  relative inline-block
                  text-yellow-300
                "
              >
                {highlight}

                {/* UNDERLINE GLOW */}
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4,
                    duration: 1,
                  }}
                  className="
                    absolute
                    bottom-1
                    left-0
                    h-[10px]
                    rounded-full
                    bg-yellow-400/20
                    blur-md
                  "
                />
              </span>
            </>
          )}
        </motion.h2>

        {/* LIGHT STREAK */}
        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-[140px]
            rotate-[20deg]
            bg-gradient-to-r
            from-yellow-300/10
            via-transparent
            to-transparent
            blur-2xl
          "
        />
      </div>

      {/* ========================================================= */}
      {/* SUBTITLE */}
      {/* ========================================================= */}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.25,
            duration: 1,
          }}
          className={`
            relative z-10
            text-lg
            leading-relaxed
            text-zinc-400
            md:text-xl
          `}
        >
          {subtitle}
        </motion.p>
      )}

      {/* ========================================================= */}
      {/* DECORATIVE LINE */}
      {/* ========================================================= */}

      {showLine && (
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 180 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 1,
          }}
          className="
            relative z-10
            mt-2
            h-[2px]
            overflow-hidden
            rounded-full
            bg-gradient-to-r
            from-yellow-400
            via-yellow-200
            to-transparent
          "
        >
          {/* MOVING SHINE */}
          <motion.div
            animate={{
              x: ["-100%", "300%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute top-0
              h-full w-[60px]
              bg-white/70
              blur-sm
            "
          />
        </motion.div>
      )}

      {/* ========================================================= */}
      {/* FLOATING DECORATION */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          top-10
          hidden
          lg:block
        "
      >
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            flex h-20 w-20 items-center justify-center
            rounded-[24px]
            border border-yellow-300/10
            bg-yellow-400/5
            backdrop-blur-xl
          "
        >
          <Music2
            size={30}
            className="text-yellow-300"
          />

          <div
            className="
              absolute inset-0
              rounded-[24px]
              bg-yellow-300/10
              blur-2xl
            "
          />
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* BOTTOM ICON ROW */}
      {/* ========================================================= */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        className="
          relative z-10
          mt-2
          flex items-center gap-4
        "
      >
        {[Music2, Disc3, Sparkles].map((Icon, i) => (
          <motion.div
            key={i}
            whileHover={{
              y: -3,
              rotate: 8,
            }}
            className="
              flex h-12 w-12 items-center justify-center
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              text-yellow-300
              backdrop-blur-xl
              transition-all duration-300
              hover:border-yellow-300/20
              hover:bg-yellow-400/10
            "
          >
            <Icon size={18} />
          </motion.div>
        ))}

        <motion.div
          whileHover={{ x: 5 }}
          className="
            ml-3
            flex items-center gap-2
            text-sm
            font-medium
            text-zinc-400
            transition-all duration-300
            hover:text-yellow-300
          "
        >
          Explore More

          <ArrowUpRight size={16} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SectionTitle;