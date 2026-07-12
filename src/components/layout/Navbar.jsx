import React, {
  useEffect,
  useState,
} from "react";

import { NavLink } from "react-router-dom";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Menu,
  X,
  Music2,
  Phone,
  Sparkles,
  ArrowUpRight,
  Disc3,
  Star,
  MapPin,
} from "lucide-react";

/* =========================================================
   NAV LINKS
========================================================= */

const MotionNavLink = motion(NavLink);
const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "Guru",
    href: "/guru",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Achievements",
    href: "/achievements",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const navItem = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: (i) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.07,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* =========================================================
   COMPONENT
========================================================= */

const Navbar = () => {
  const [scrolled, setScrolled] =
    useState(false);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  /* =========================================================
     SCROLL EFFECT
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* =========================================================
     BODY LOCK
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow =
      mobileMenu ? "hidden" : "auto";

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [mobileMenu]);

  return (
    <>
      {/* ========================================================= */}
      {/* NAVBAR SPACER FIX */}
      {/* ========================================================= */}

      {/* 
        🔥 IMPORTANT FIX
        Mobile view pe content navbar ke niche ja raha tha.
        Ye spacer automatically top space reserve karega.
      */}

      <div className="h-[92px] sm:h-[100px] lg:h-[118px] relative" />
       <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,#1b1d38,transparent_40%)]
        "
      />

      {/* ========================================================= */}
      {/* MAIN NAVBAR */}
      {/* ========================================================= */}

      <motion.header
        initial={{
          y: -120,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`
          fixed
          left-0
          top-0
          z-[999]
          w-full
          transition-all
          duration-500
          ${
            scrolled
              ? "px-3 py-3 md:px-6"
              : "px-4 py-4 md:px-8"
          }
        `}
      >
        <div
          className={`
            relative
            mx-auto
            flex
            items-center
            justify-between
            overflow-hidden
            border
            transition-all
            duration-500

            ${
              scrolled
                ? `
                  max-w-7xl
                  rounded-[36px]
                  border-yellow-300/10
                  bg-[#050816]/82
                  px-6
                  py-3
                  shadow-[0_20px_90px_rgba(0,0,0,0.45)]
                  backdrop-blur-3xl
                `
                : `
                  max-w-[92rem]
                  rounded-[39px]
                  border-white/10
                  bg-white/[0.05]
                  px-4
                  py-4
                  backdrop-blur-2xl
                `
            }
          `}
        >
          {/* ========================================================= */}
          {/* PREMIUM BACKGROUND */}
          {/* ========================================================= */}

          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]
            "
          />
          

          <div
            className="
              absolute
              left-1/2
              top-0
              h-[240px]
              w-[520px]
              -translate-x-1/2
              rounded-full
              bg-yellow-400/10
              blur-[120px]
            "
          />

          <div
            className="
              absolute
              right-[-90px]
              top-[-90px]
              h-[220px]
              w-[220px]
              rounded-full
              bg-purple-500/10
              blur-[100px]
            "
          />

          <div
            className="
              absolute
              bottom-[-120px]
              left-[-100px]
              h-[220px]
              w-[220px]
              rounded-full
              bg-cyan-400/10
              blur-[100px]
            "
          />

          

          {/* ========================================================= */}
          {/* GRID */}
          {/* ========================================================= */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.03]
            "
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
          />

          {/* ========================================================= */}
          {/* LOGO */}
          {/* ========================================================= */}

          <motion.a
            href="/"
            whileHover={{
              scale: 1.015,
            }}
            className="
              relative
              z-10
              flex
              items-center
              gap-3
              min-w-0
            "
          >
            {/* ICON */}

            <div
              className="
                relative
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-[16px]
                border
                border-yellow-300/20
                bg-gradient-to-br
                from-yellow-400/20
                via-yellow-300/10
                to-transparent
                shadow-[0_0_45px_rgba(250,204,21,0.15)]
                sm:h-12
                sm:w-12
                md:h-14
                md:w-14
              "
            >
              {/* INNER GLOW */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-[16px]
                  bg-yellow-300/10
                  blur-2xl
                "
              />

              {/* ROTATION */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[5px]
                  rounded-[12px]
                  border
                  border-dashed
                  border-yellow-300/15
                "
              />

              <Music2
                size={22}
                className="
                  relative
                  z-10
                  text-yellow-300
                  md:size-[26px]
                "
              />
            </div>

            {/* TEXT */}

            <div className="min-w-0 leading-tight">
              <h1
                className="
                  marathi
                  truncate
                  text-[18px]
                  font-black
                  tracking-wide
                  text-yellow-300
                  sm:text-xl
                  md:text-[1.4rem]
                "
              >
                संत ज्ञानेश्वर
              </h1>

              <div
                className="
                  mt-1
                  flex
                  items-center
                  gap-2
                "
              >
                <div
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-yellow-300
                  "
                />

                <p
                  className="
                    truncate
                    text-[8px]
                    uppercase
                    tracking-[0.22em]
                    text-zinc-400
                    sm:text-[9px]
                    md:text-[11px]
                  "
                >
                  Sangeet Vidyalaya
                </p>
              </div>
            </div>
          </motion.a>

          {/* ========================================================= */}
          {/* DESKTOP NAV */}
          {/* ========================================================= */}

          <nav
            className="
              relative
              z-10
              hidden
              items-center
              gap-1.5
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              p-2
              backdrop-blur-xl
              lg:flex
            "
          >
            {navLinks.map(
              (item, index) => (
                <NavLink
  key={index}
  to={item.href}
  className={({ isActive }) =>
    `
    group
    relative
    overflow-hidden
    rounded-full
    px-4
    py-2.5
    text-[13px]
    font-medium
    transition-all
    duration-300
    xl:px-5

    ${
      isActive
        ? `
         bg-yellow-400/15
      text-yellow-300
      border
      border-yellow-300/20
        `
        : `
          text-zinc-300
          hover:text-white
        `
    }
  `
  }
>
                  {/* HOVER BG */}

                  <span
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-gradient-to-r
                      from-yellow-400/15
                      via-yellow-300/10
                      to-purple-500/10
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  {/* LIGHT */}

                  <span
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-[120px]
                      w-[120px]
                      -translate-x-1/2
                      rounded-full
                      bg-yellow-300/10
                      blur-[50px]
                      opacity-0
                      transition
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  <span
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <Disc3
                      size={11}
                      className="
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:rotate-180
                        group-hover:opacity-100
                      "
                    />

                    {item.name}
                  </span>
                </NavLink>
              )
            )}
          </nav>

          {/* ========================================================= */}
          {/* RIGHT SIDE */}
          {/* ========================================================= */}

          <div
            className="
              relative
              z-10
              flex
              items-center
              gap-2
              sm:gap-3
            "
          >
            {/* CONTACT BUTTON */}

            <motion.a
              href="tel:9881776739"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                relative
                hidden
                items-center
                gap-3
                overflow-hidden
                rounded-full
                border
                border-yellow-300/20
                bg-gradient-to-r
                from-yellow-400
                via-yellow-300
                to-yellow-400
                px-5
                py-3
                text-sm
                font-semibold
                text-black
                shadow-[0_0_55px_rgba(250,204,21,0.35)]
                transition-all
                duration-300
                hover:shadow-[0_0_80px_rgba(250,204,21,0.55)]
                lg:flex
              "
            >
              {/* SHINE */}

              <span
                className="
                  absolute
                  left-[-120px]
                  top-0
                  h-full
                  w-[90px]
                  rotate-12
                  bg-white/40
                  blur-xl
                  transition-all
                  duration-700
                  group-hover:left-[120%]
                "
              />

              <Phone size={15} />

              <span className="relative z-10">
                Contact Now
              </span>

              <ArrowUpRight
                size={15}
                className="
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </motion.a>

            {/* MOBILE BUTTON */}

            <motion.button
              whileTap={{
                scale: 0.92,
              }}
              onClick={() =>
                setMobileMenu(
                  !mobileMenu
                )
              }
              className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.05]
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white/10
                sm:h-12
                sm:w-12
                md:h-14
                md:w-14
                lg:hidden
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-yellow-400/10
                  via-transparent
                  to-purple-500/10
                "
              />

              {mobileMenu ? (
                <X
                  size={22}
                  className="relative z-10"
                />
              ) : (
                <Menu
                  size={22}
                  className="relative z-10"
                />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* ========================================================= */}
      {/* MOBILE MENU */}
      {/* ========================================================= */}

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed
              inset-0
              z-[998]
              overflow-y-auto
              bg-[#030712]/96
              backdrop-blur-3xl
              lg:hidden
            "
          >
            {/* BACKGROUND */}

            <div
              className="
                absolute
                left-1/2
                top-[18%]
                h-[420px]
                w-[420px]
                -translate-x-1/2
                rounded-full
                bg-yellow-400/10
                blur-[140px]
              "
            />

            <div
              className="
                absolute
                bottom-[-120px]
                right-[-120px]
                h-[320px]
                w-[320px]
                rounded-full
                bg-purple-500/10
                blur-[120px]
              "
            />

            {/* CONTENT */}

            <div
              className="
                relative
                z-10
                flex
                min-h-screen
                flex-col
                items-center
                justify-center
                px-5
                py-28
                text-center
              "
            >
              {/* BADGE */}

              {/* <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1,
                }}
                className="
                  mb-10
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-yellow-400/20
                  bg-yellow-400/10
                  px-5
                  py-3
                  text-sm
                  text-yellow-200
                "
              >
                <Sparkles size={16} />

                Traditional Music
              </motion.div> */}

              {/* LINKS */}

              <div className="w-full max-w-md space-y-4">
  {navLinks.map(
    (item, index) => (
      <MotionNavLink
        key={index}
        to={item.href}
        custom={index}
        variants={
          navItem
        }
        initial="hidden"
        animate="show"
        onClick={() =>
          setMobileMenu(
            false
          )
        }
        className="
          group
          block
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[22px]
            border
            border-white/10
            bg-white/[0.04]
            px-6
            py-5
            backdrop-blur-xl
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-yellow-400/10
              via-transparent
              to-purple-500/10
              opacity-0
              transition
              duration-300
              group-hover:opacity-100
            "
          />

          <div
            className="
              relative
              z-10
              flex
              items-center
              justify-between
              gap-5
            "
          >
            <span
              className="
                text-xl
                font-semibold
                tracking-tight
                text-white
              "
            >
              {item.name}
            </span>

            <ArrowUpRight
              size={22}
              className="
                text-yellow-300
                transition-all
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </div>
        </div>
      </MotionNavLink>
    )
  )}
</div>

              {/* CONTACT CARD */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.55,
                }}
                className="
                  relative
                  mt-10
                  w-full
                  max-w-md
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-6
                  backdrop-blur-2xl
                "
              >
                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-[180px]
                    w-[260px]
                    -translate-x-1/2
                    rounded-full
                    bg-yellow-400/10
                    blur-[90px]
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      mx-auto
                      mb-5
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-yellow-300/20
                      bg-yellow-400/10
                    "
                  >
                    <Phone
                      size={26}
                      className="text-yellow-300"
                    />
                  </div>

                  <p className="text-sm text-zinc-400">
                    Admissions Open
                  </p>

                  <div
                    className="
                      mt-2
                      text-3xl
                      font-black
                      text-yellow-300
                    "
                  >
                    9881776739
                  </div>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-sm
                      text-zinc-400
                    "
                  >
                    <MapPin size={15} />

                    Wagholi, Pune
                  </div>

                  <div
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-emerald-400/20
                      bg-emerald-400/10
                      px-4
                      py-2
                      text-xs
                      text-emerald-300
                    "
                  >
                    <Star size={13} />

                    Weekend Classes Available
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;