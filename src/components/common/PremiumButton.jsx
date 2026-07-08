import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Loader2,
} from "lucide-react";

const PremiumButton = ({
  children = "Explore Now",
  href,
  onClick,
  type = "button",

  /* =========================================================
     VARIANTS
  ========================================================= */
  variant = "gold", // gold | glass | purple | dark

  /* =========================================================
     SIZES
  ========================================================= */
  size = "sm", // sm | md | lg | xl

  /* =========================================================
     OPTIONS
  ========================================================= */
  fullWidth = false,
  rounded = "full",
  icon = false,
  glow = true,
  shimmer = true,
  loading = false,
  disabled = false,

  /* =========================================================
     CUSTOM
  ========================================================= */
  className = "",
  iconComponent: IconComponent,
}) => {
  /* =========================================================
     SIZE CLASSES
  ========================================================= */

  const sizeClasses = {
    sm: "px-2 py-3 text-sm",
    md: "px-7 py-4 text-base",
    lg: "px-9 py-5 text-lg",
    xl: "px-11 py-6 text-xl",
  };

  /* =========================================================
     RADIUS
  ========================================================= */

  const radiusClasses = {
    full: "rounded-full",
    xl: "rounded-[24px]",
    lg: "rounded-2xl",
    md: "rounded-xl",
  };

  /* =========================================================
     VARIANTS
  ========================================================= */

  const variants = {
    gold: `
      bg-yellow-400
      text-black
      border border-yellow-300/30
      shadow-[0_0_40px_rgba(250,204,21,0.35)]
      hover:shadow-[0_0_70px_rgba(250,204,21,0.55)]
    `,

    glass: `
      border border-white/10
      bg-white/[0.05]
      text-white
      backdrop-blur-2xl
      hover:bg-white/[0.09]
      hover:border-yellow-300/20
    `,

    purple: `
      border border-purple-400/20
      bg-gradient-to-r
      from-purple-500
      via-fuchsia-500
      to-purple-600
      text-white
      shadow-[0_0_50px_rgba(168,85,247,0.35)]
      hover:shadow-[0_0_80px_rgba(168,85,247,0.5)]
    `,

    dark: `
      border border-yellow-300/15
      bg-black/40
      text-yellow-300
      backdrop-blur-2xl
      hover:bg-black/60
    `,
  };

  /* =========================================================
     BUTTON CONTENT
  ========================================================= */

  const buttonContent = (
    <>
      {/* ========================================================= */}
      {/* BACKGROUND SHIMMER */}
      {/* ========================================================= */}

      {shimmer && !disabled && (
        <motion.div
          animate={{
            x: ["-120%", "220%"],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute top-0
            h-full w-[120px]
            rotate-12
            bg-white/20
            blur-xl
          "
        />
      )}

      {/* ========================================================= */}
      {/* GLOW */}
      {/* ========================================================= */}

      {glow && (
        <div
          className={`
            absolute inset-0
            opacity-0
            blur-2xl
            transition-all duration-500
            group-hover:opacity-100
            ${
              variant === "gold"
                ? "bg-yellow-300/30"
                : variant === "purple"
                ? "bg-purple-400/30"
                : "bg-white/10"
            }
          `}
        />
      )}

      {/* ========================================================= */}
      {/* CONTENT */}
      {/* ========================================================= */}

      <span
        className="
          relative z-10
          flex items-center justify-center gap-3
        "
      >
        {/* LOADING */}
        {loading ? (
          <Loader2
            size={20}
            className="animate-spin"
          />
        ) : (
          <>
            {/* OPTIONAL LEFT ICON */}
            {IconComponent ? (
              <IconComponent size={18} />
            ) : (
              icon && (
                <motion.div
                  animate={{
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles size={18} />
                </motion.div>
              )
            )}

            {/* TEXT */}
            <span>{children}</span>

            {/* ARROW */}
            <motion.div
              whileHover={{
                x: 4,
                y: -2,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </>
        )}
      </span>

      {/* ========================================================= */}
      {/* BORDER LIGHT */}
      {/* ========================================================= */}

      <div
        className="
          absolute inset-0
          rounded-inherit
          border border-white/5
        "
      />
    </>
  );

  /* =========================================================
     COMMON CLASSES
  ========================================================= */

  const commonClasses = `
    group
    relative
    inline-flex
    items-center
    justify-center
    overflow-hidden
    font-semibold
    tracking-wide
    transition-all
    duration-500
    active:scale-[0.98]
    hover:-translate-y-[2px]
    disabled:pointer-events-none
    disabled:opacity-50

    ${sizeClasses[size]}
    ${radiusClasses[rounded]}
    ${variants[variant]}

    ${fullWidth ? "w-full" : ""}

    ${className}
  `;

  /* =========================================================
     LINK BUTTON
  ========================================================= */

  if (href) {
    return (
      <motion.a
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        href={href}
        className={commonClasses}
      >
        {buttonContent}
      </motion.a>
    );
  }

  /* =========================================================
     NORMAL BUTTON
  ========================================================= */

  return (
    <motion.button
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
      className={commonClasses}
    >
      {buttonContent}
    </motion.button>
  );
};

export default PremiumButton;