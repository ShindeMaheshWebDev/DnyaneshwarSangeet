// src/pages/GalleryPage.jsx

import React, {
  memo,
  useEffect,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Sparkles,
  Camera,
  PlayCircle,
  ImageIcon,
  Music2,
  Trophy,
  Star,
  Users,
  ArrowUpRight,
  CalendarDays,
  HeartHandshake,
  Mic2,
  X,
  MapPin,
  Clock3,
  Ticket,
  ChevronRight,
} from "lucide-react";

import practice from "../assets/images/practice2.jpeg"
import guru2 from "../assets/images/Guru2.png"
import cert1 from "../assets/images/cert1.jpeg"
import AnilSir from "../assets/images/AnilSir.jpeg"





/* =========================================================
   DATA
========================================================= */

const stats = [
  {
    number: "1500+",
    label: "Photos Captured",
  },

  {
    number: "85+",
    label: "Stage Performances",
  },

  {
    number: "500+",
    label: "Happy Students",
  },

  {
    number: "25+",
    label: "Music Events",
  },
];

const categories = [
  {
    title: "Stage Performances",
    icon: Trophy,
    text:
      "Live performances showcasing classical talent, confidence, and musical excellence.",
  },

  {
    title: "Classroom Sessions",
    icon: Music2,
    text:
      "Interactive training sessions focused on practical learning and discipline.",
  },

  {
    title: "Annual Functions",
    icon: Star,
    text:
      "Premium cultural events filled with music, creativity, and student achievements.",
  },

  {
    title: "Award Moments",
    icon: Sparkles,
    text:
      "Celebrating milestones, recognitions, and outstanding student performances.",
  },
];

const galleryImages = [
  {
    image:
      guru2,
    title: "Classical Stage Show",
  },

  {
    image:
      practice,
    title: "Music Practice Session",
  },

  {
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1400&auto=format&fit=crop",
    title: "Live Performance",
  },

  {
    image:
      cert1,
    title: "Student Event",
  },

  {
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1400&auto=format&fit=crop",
    title: "Studio Session",
  },

  {
    image:
      AnilSir,
    title: "Anil sir",
  },
];

const featuredEvents = [
  {
    title: "Annual Music Festival",
    date: "15 Feb 2026",
    time: "6:00 PM",
    location: "Pune Cultural Hall",
    attendees: "800+ Guests",

    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1400&auto=format&fit=crop",

    description:
      "A grand annual celebration featuring live classical vocal performances, instrumental showcases, cultural programs, and award ceremonies by our talented students.",

    highlights: [
      "Live Classical Performances",
      "Student Award Ceremony",
      "Professional Stage Setup",
      "Guest Music Artists",
    ],
  },

  {
    title: "Classical Vocal Concert",
    date: "22 Aug 2025",
    time: "7:30 PM",
    location: "Mumbai Music Academy",
    attendees: "500+ Audience",

    image:
      "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?q=80&w=1400&auto=format&fit=crop",

    description:
      "An elegant evening dedicated to Indian classical vocal traditions with mesmerizing ragas, soulful performances, and musical storytelling.",

    highlights: [
      "Traditional Raga Performances",
      "Live Tabla & Harmonium",
      "Guru Special Session",
      "Premium Sound Experience",
    ],
  },

  {
    title: "Student Talent Showcase",
    date: "10 Dec 2025",
    time: "5:00 PM",
    location: "Auditorium Arena",
    attendees: "300+ Families",

    image:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=1400&auto=format&fit=crop",

    description:
      "A special event where students perform live on stage to build confidence, showcase creativity, and celebrate musical growth.",

    highlights: [
      "Student Solo Performances",
      "Group Performances",
      "Stage Confidence Training",
      "Certificate Distribution",
    ],
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   SECTION TITLE
========================================================= */

const SectionTitle = memo(
  ({ badge, title, text }) => {
    return (
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <div
          className="
            mb-5
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-yellow-400/20
            bg-yellow-400/10
            px-5
            py-2.5
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.22em]
            text-yellow-200
            backdrop-blur-xl
          "
        >
          <Sparkles size={12} />
          {badge}
        </div>

        <h2
          className="
            text-4xl
            font-black
            leading-tight
            tracking-tight
            md:text-6xl
          "
        >
          {title}
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-[15px]
            leading-8
            text-zinc-400
          "
        >
          {text}
        </p>
      </div>
    );
  }
);

/* =========================================================
   EVENT MODAL
========================================================= */

const EventModal = ({
  selectedEvent,
  setSelectedEvent,
}) => {
  /* BODY LOCK */

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow =
        "hidden";

      document.documentElement.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";

      document.documentElement.style.overflow =
        "auto";
    }

    return () => {
      document.body.style.overflow =
        "auto";

      document.documentElement.style.overflow =
        "auto";
    };
  }, [selectedEvent]);

  /* ESC */

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedEvent(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleEsc
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleEsc
      );
  }, [setSelectedEvent]);

  return (
    <AnimatePresence>
      {selectedEvent && (
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
            duration: 0.25,
          }}
          onClick={() =>
            setSelectedEvent(null)
          }
          className="
            fixed
            inset-0
            z-[999999]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/90
            px-4
            py-6
            backdrop-blur-2xl
          "
        >
          {/* SCROLLBAR HIDE */}

          <style>
            {`
              .event-scroll-hidden::-webkit-scrollbar {
                display: none;
              }

              .event-scroll-hidden {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}
          </style>

          {/* MODAL */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
            className="
              relative
              z-[1000000]
              w-full
              max-w-6xl
              overflow-hidden
              rounded-[34px]
              border
              border-white/10
              bg-[#0a0f1f]
              shadow-[0_0_120px_rgba(0,0,0,0.85)]
            "
          >
            {/* GLOW */}

            <div
              className="
                absolute
                left-[-120px]
                top-[-120px]
                h-[260px]
                w-[260px]
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
                h-[260px]
                w-[260px]
                rounded-full
                bg-violet-500/10
                blur-[140px]
              "
            />

            {/* CLOSE */}

            <button
              onClick={() =>
                setSelectedEvent(null)
              }
              className="
                absolute
                right-5
                top-5
                z-[100001]
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/60
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:rotate-90
                hover:bg-red-500
              "
            >
              <X size={20} />
            </button>

            <div
              className="
                relative
                z-10
                grid
                max-h-[90vh]
                lg:grid-cols-[1fr_1fr]
              "
            >
              {/* LEFT */}

              <div className="relative">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="
                    h-[320px]
                    w-full
                    object-cover
                    lg:h-full
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/20
                    to-transparent
                  "
                />

                <div className="absolute bottom-6 left-6 right-6">
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-yellow-400/20
                      bg-yellow-400/10
                      px-4
                      py-2
                      text-[11px]
                      text-yellow-200
                      backdrop-blur-xl
                    "
                  >
                    <Sparkles size={12} />
                    Featured Event
                  </div>

                  <h2
                    className="
                      mt-4
                      text-3xl
                      font-black
                      leading-tight
                    "
                  >
                    {selectedEvent.title}
                  </h2>
                </div>
              </div>

              {/* RIGHT */}

              <div
                className="
                  event-scroll-hidden
                  max-h-[90vh]
                  overflow-y-auto
                  p-6
                  md:p-8
                "
              >
                {/* META */}

                <div className="flex flex-wrap gap-3">
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.05]
                      px-4
                      py-3
                      text-sm
                    "
                  >
                    <CalendarDays size={16} />
                    {selectedEvent.date}
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.05]
                      px-4
                      py-3
                      text-sm
                    "
                  >
                    <Clock3 size={16} />
                    {selectedEvent.time}
                  </div>
                </div>

                {/* LOCATION */}

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-zinc-300">
                    <MapPin
                      size={18}
                      className="text-yellow-300"
                    />

                    {selectedEvent.location}
                  </div>

                  <div className="flex items-center gap-3 text-zinc-300">
                    <Users
                      size={18}
                      className="text-yellow-300"
                    />

                    {selectedEvent.attendees}
                  </div>
                </div>

                {/* ABOUT */}

                <div className="mt-8">
                  <h3 className="text-2xl font-bold">
                    About Event
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[14px]
                      leading-8
                      text-zinc-400
                    "
                  >
                    {
                      selectedEvent.description
                    }
                  </p>
                </div>

                {/* HIGHLIGHTS */}

                <div className="mt-8">
                  <h3 className="text-2xl font-bold">
                    Event Highlights
                  </h3>

                  <div className="mt-5 grid gap-3">
                    {selectedEvent.highlights.map(
                      (item, index) => (
                        <motion.div
                          key={index}
                          initial={{
                            opacity: 0,
                            x: -20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay:
                              index * 0.06,
                          }}
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/[0.04]
                            p-4
                          "
                        >
                          <div
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              bg-yellow-400/10
                              text-yellow-300
                            "
                          >
                            <ChevronRight
                              size={18}
                            />
                          </div>

                          <span className="text-sm text-zinc-200">
                            {item}
                          </span>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>

                {/* BUTTONS */}

                <div className="mt-9 flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-gradient-to-r
                      from-yellow-400
                      to-yellow-300
                      px-7
                      py-3.5
                      text-sm
                      font-bold
                      text-black
                    "
                  >
                    <Ticket size={18} />
                    Book Pass
                  </motion.button>

                  <button
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-7
                      py-3.5
                      text-sm
                    "
                  >
                    <PlayCircle size={18} />
                    Watch Highlights
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* =========================================================
   MAIN PAGE
========================================================= */

const GalleryPage = () => {
  const [selectedEvent, setSelectedEvent] =
    useState(null);

  return (
    <div
      className="
        relative
        overflow-hidden
        bg-[#050816]
        text-white
      "
      style={{
        isolation: "isolate",
      }}
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden -z-10">
        <div
          className="
            absolute
            left-[-120px]
            top-[-120px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-yellow-400/10
            blur-[120px]
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
            bg-violet-500/10
            blur-[120px]
          "
        />

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
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* HERO */}

      <section
        className="
          relative
          z-10
          px-5
          pb-24
          pt-12
          md:px-10
          lg:px-16
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-14
            lg:grid-cols-2
          "
        >
          {/* LEFT */}

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
              duration: 0.8,
            }}
          >
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-yellow-400/20
                bg-yellow-400/10
                px-4
                py-2
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-yellow-200
              "
            >
              <Camera size={12} />
              Premium Gallery
            </div>

            <h1
              className="
                max-w-2xl
                text-[2.8rem]
                font-black
                leading-[1]
                tracking-tight
                sm:text-6xl
                md:text-7xl
              "
            >
              Capturing The

              <span
                className="
                  bg-gradient-to-r
                  from-yellow-300
                  via-yellow-100
                  to-yellow-400
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}
                Musical Journey
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-xl
                text-[15px]
                leading-8
                text-zinc-400
              "
            >
              Explore beautiful moments from
              stage performances, classroom
              sessions, annual functions,
              workshops, and unforgettable
              student achievements.
            </p>

            {/* STATS */}

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/[0.05]
                    p-5
                    text-center
                    backdrop-blur-2xl
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-black
                      text-yellow-300
                    "
                  >
                    {item.number}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      text-zinc-400
                    "
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            <div
              className="
                overflow-hidden
                rounded-[36px]
                border
                border-white/10
                bg-white/[0.05]
                p-3
                backdrop-blur-3xl
              "
            >
              <img
                src={practice}
                alt="Gallery Hero"
                className="
                  h-[560px]
                  w-full
                  rounded-[28px]
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  bottom-7
                  left-7
                  right-7
                  rounded-[28px]
                  border
                  border-white/10
                  bg-black/40
                  p-5
                  backdrop-blur-2xl
                "
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] text-zinc-400">
                      Featured Event
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                      Daily Music practice
                    </h3>
                  </div>

                  <div
                    className="
                      hidden
                      rounded-2xl
                      bg-white/10
                      px-4
                      py-3
                      text-[12px]
                      text-zinc-200
                      md:block
                    "
                  >
                    2026 Collection
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}

      <section
        className="
          relative
          z-10
          px-5
          py-14
          md:px-10
          lg:px-14
        "
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="Gallery Categories"
            title="Premium Music Moments"
            text="Explore different categories of performances, classroom memories, and special musical events."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    rounded-[30px]
                    border
                    border-white/10
                    bg-white/[0.05]
                    p-7
                    backdrop-blur-2xl
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-yellow-400/10
                      text-yellow-300
                    "
                  >
                    <Icon size={24} />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-lg
                      font-bold
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[13px]
                      leading-7
                      text-zinc-400
                    "
                  >
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY GRID FIXED */}

      <section
        className="
          relative
          z-10
          px-5
          py-20
          md:px-10
          lg:px-16
        "
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="Photo Collection"
            title="Our Premium Gallery"
            text="Beautiful memories from music classes, performances, cultural programs, and student showcases."
          />

          {/* IMPORTANT FIX:
              Laptop pe proper 3 cards ek row me
          */}

          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.04]
                "
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-[360px]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/10
                      to-transparent
                    "
                  />

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex items-center gap-2">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-yellow-400
                          text-black
                        "
                      >
                        <ImageIcon size={18} />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold">
                          {item.title}
                        </h3>

                        <p className="text-[11px] text-zinc-300">
                          Premium Collection
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}

      {/* <section
        className="
          relative
          z-10
          px-5
          py-20
          md:px-10
          lg:px-16
        "
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="Featured Events"
            title="Special Musical Celebrations"
            text="Highlights from our biggest cultural programs, music festivals, and annual events."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredEvents.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  backdrop-blur-2xl
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-[280px]
                    w-full
                    object-cover
                  "
                />

                <div className="p-6">
                  <div className="flex items-center gap-2 text-yellow-300">
                    <CalendarDays size={16} />

                    <span className="text-[12px]">
                      {item.date}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      text-xl
                      font-bold
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[13px]
                      leading-7
                      text-zinc-400
                    "
                  >
                    {item.description.slice(
                      0,
                      90
                    )}
                    ...
                  </p>

                  <motion.button
                    whileHover={{
                      x: 4,
                    }}
                    onClick={() =>
                      setSelectedEvent(item)
                    }
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-[13px]
                      font-medium
                      text-yellow-300
                    "
                  >
                    Explore Event

                    <ArrowUpRight size={15} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}

      <section
        className="
          relative
          z-10
          px-5
          pb-24
          pt-8
          md:px-10
          lg:px-16
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[38px]
            border
            border-white/10
            bg-gradient-to-br
            from-yellow-400/10
            via-white/[0.04]
            to-violet-500/10
            p-8
            backdrop-blur-3xl
            md:p-16
          "
        >
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-[28px]
                bg-yellow-400/10
                text-yellow-300
              "
            >
              <HeartHandshake size={34} />
            </div>

            <h2
              className="
                mt-7
                text-3xl
                font-black
                leading-tight
                md:text-5xl
              "
            >
              Become Part Of Our Musical Journey
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-[14px]
                leading-8
                text-zinc-400
                md:text-[15px]
              "
            >
              Join our music academy and create
              beautiful memories through
              performances, learning,
              creativity, and cultural
              celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* MODAL */}

      <EventModal
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
      />
    </div>
  );
};

export default memo(GalleryPage);