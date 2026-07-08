// src/pages/GuruPage.jsx

import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";

import {
  Sparkles,
  Music2,
  Users,
  Mic2,
  PlayCircle,
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Trophy,
  BookOpen,
  Disc3,
  Quote,
  Crown,
  ShieldCheck,
  CalendarDays,
} from "lucide-react";
import GuruImage from '../assets/images/guru2.png'
import cert1 from "../assets/images/cert1.jpeg"

/* =========================================================
   PREMIUM DATA
========================================================= */

const achievements = [
  {
    number: "26+",
    label: "Years Teaching",
  },
  {
    number: "1500+",
    label: "Students Guided",
  },
  {
    number: "250+",
    label: "Programs Conducted",
  },
  {
    number: "25+",
    label: "Awards Received",
  },
];

const highlights = [
  "26+ Years Teaching Experience",
  "Akhil Bharatiya Gandharva Affiliated Training",
  "Classical Vocal, Tabla & Harmonium",
  "Prarambhik To Visharad Guidance",
  "Regular Stage Performance Opportunities",
  "Competition & Scholarship Preparation",
  "Individual Attention To Every Student",
  "Offline & Online Learning Available",
];

const journey = [
  {
    title: "Indian Classical Music",
    icon: Music2,
    text:
      "विशारद स्तरापर्यंत गायन शिक्षण व पारंपरिक संगीत परंपरेचे संवर्धन.",
  },

  {
    title: "Examination Guidance",
    icon: GraduationCap,
    text:
      "अखिल भारतीय गांधर्व महाविद्यालयाच्या परीक्षा तयारीसाठी विशेष मार्गदर्शन.",
  },

  {
    title: "Stage & Cultural Development",
    icon: Trophy,
    text:
      "विद्यार्थ्यांचा आत्मविश्वास वाढविण्यासाठी मैफिली, स्पर्धा व सांस्कृतिक कार्यक्रमांचे प्रशिक्षण.",
  },
];

const values = [
  {
    title: "रियाज आणि शिस्त",
    icon: ShieldCheck,
  },

  {
    title: "गुरु-शिष्य परंपरा",
    icon: BookOpen,
  },

  {
    title: "कला आणि संस्कार",
    icon: Disc3,
  },

  {
    title: "विद्यार्थी विकास",
    icon: HeartHandshake,
  },
];

const testimonials = [
  {
    name: "Aarav Kulkarni",
    text:
      "The Guru's teaching style is inspiring and deeply traditional. My confidence improved tremendously.",
  },

  {
    name: "Sneha Patil",
    text:
      "Amazing guidance for stage performance and vocal practice. Truly premium learning experience.",
  },

  {
    name: "Riya Deshmukh",
    text:
      "Very supportive environment with proper attention to every student and performance preparation.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
    },
  },
};

/* =========================================================
   SECTION TITLE
========================================================= */

const SectionTitle = memo(({ badge, title, text }) => {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div
        className="
          mb-4
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-yellow-400/20
          bg-yellow-400/10
          px-3
          py-1.5
          text-[10px]
          font-medium
          text-yellow-200
          backdrop-blur-xl
        "
      >
        <Sparkles size={12} />

        {badge}
      </div>

      <h2
        className="
          text-2xl
          font-black
          leading-tight
          tracking-tight
          sm:text-3xl
          md:text-4xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mx-auto
          mt-4
          max-w-2xl
          text-[13px]
          leading-7
          text-zinc-400
          md:text-[14px]
        "
      >
        {text}
      </p>
    </div>
  );
});

/* =========================================================
   MAIN PAGE
========================================================= */

const GuruPage = () => {
  const stats = useMemo(() => achievements, []);

  return (
    <div className="relative overflow-hidden bg-[#050816] text-white">
      {/* =========================================================
         PREMIUM BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[-140px]
            top-[-140px]
            h-[340px]
            w-[340px]
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
            h-[340px]
            w-[340px]
            rounded-full
            bg-violet-500/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute inset-0
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

      {/* =========================================================
         HERO SECTION
      ========================================================= */}

      <section
        className="
          relative z-10
          px-4
          pb-20
          pt-10
          sm:px-6
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
            gap-10
            lg:grid-cols-2
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* BADGE */}

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
                px-3
                py-1.5
                text-[10px]
                font-medium
                text-yellow-200
                backdrop-blur-xl
              "
            >
              <Crown size={12} />

              Guru  • Founder  • Music Mentor
            </div>

            {/* TITLE */}

            <h1
              className="
                max-w-2xl
                text-[2.2rem]
                font-black
                leading-[1.1]
                
                sm:text-5xl
                md:text-6xl
              "
            >
              गायकवाड .पी.एस (संगीत विशारद) <br />

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
                26 Years Of
Music Education
& Cultural Service
              </span>
            </h1>

            {/* TEXT */}

            <p
              className="
                mt-5
                max-w-xl
                text-[13px]
                leading-7
                text-zinc-400
                md:text-[14px]
              "
            >
              Sant Dnyaneshwar Sangeet Vidyalaya चे संस्थापक व प्रमुख मार्गदर्शक.
गायन, तबला आणि हार्मोनियम शिक्षण क्षेत्रात 26 वर्षांहून अधिक अनुभव.
विद्यार्थ्यांना प्रथमा ते विशारद स्तरापर्यंत मार्गदर्शन करून संगीत संस्कारांची परंपरा जपण्याचे कार्य.
            </p>

            {/* BUTTONS */}

            <div className="mt-7 flex flex-wrap gap-3">
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-yellow-400
                  to-yellow-300
                  px-6
                  py-3
                  text-[12px]
                  font-semibold
                  text-black
                  shadow-[0_0_40px_rgba(250,204,21,0.25)]
                "
              >
                Join Classes

                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
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
                  px-6
                  py-3
                  text-[12px]
                  backdrop-blur-xl
                "
              >
                <PlayCircle size={15} />

                Watch Journey
              </button>
            </div>

            {/* STATS */}

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/[0.05]
                    p-4
                    text-center
                    backdrop-blur-2xl
                  "
                >
                  <div
                    className="
                      text-2xl
                      font-black
                      text-yellow-300
                    "
                  >
                    {item.number}
                  </div>

                  <div
                    className="
                      mt-1
                      text-[10px]
                      text-zinc-400
                    "
                  >
                    {item.label}
                  </div>
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
              duration: 0.9,
            }}
            className="relative"
          >
            <div
              className="
                absolute
                inset-0
                rounded-[40px]
                bg-yellow-400/10
                blur-3xl
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.05]
                p-2.5
                backdrop-blur-3xl
              "
            >
              <img
                src={GuruImage}
                alt="Guru"
                className="
                  h-[420px]
                  w-full
                  rounded-[24px]
                  object-cover
                  sm:h-[520px]
                "
              />

              {/* TOP CARD */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  left-4
                  top-4
                  rounded-[22px]
                  border
                  border-white/10
                  bg-black/40
                  px-4
                  py-3
                  backdrop-blur-2xl
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-2xl
                      bg-yellow-400
                      text-black
                    "
                  >
                    <Mic2 size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] text-zinc-400">
                      Classical Vocal
                    </p>

                    <h4 className="text-sm font-semibold">
                      Premium Guru
                    </h4>
                  </div>
                </div>
              </motion.div>

              {/* BOTTOM CARD */}

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  rounded-[24px]
                  border
                  border-white/10
                  bg-black/45
                  p-4
                  backdrop-blur-2xl
                "
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] text-zinc-400">
                      Founder & Mentor
                    </p>

                    <h3
                      className="
                        mt-1
                        text-lg
                        font-bold
                        sm:text-xl
                      "
                    >
                      गायकवाड .पी.एस
                    </h3>
                  </div>

                  <div
                    className="
                      hidden
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/10
                      px-4
                      py-2
                      text-[11px]
                      text-zinc-200
                      md:block
                    "
                  >
                    26+ Years Experience
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
         ABOUT SECTION
      ========================================================= */}

      <section
        className="
          relative z-10
          px-4
          py-16
          sm:px-6
          md:px-10
          lg:px-16
        "
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="About Guru"
            title="Traditional Knowledge With Modern Teaching"
            text="Our Guru focuses on disciplined learning, practical music understanding, and building confidence through performances and mentorship."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {journey.map((item, index) => {
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
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.05]
                    p-6
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
                      rounded-3xl
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

      {/* =========================================================
         VALUES SECTION
      ========================================================= */}

      <section
        className="
          relative z-10
          px-4
          py-16
          sm:px-6
          md:px-10
          lg:px-16
        "
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="Core Values"
            title="Teaching Philosophy"
            text="We believe music is not only an art but also a discipline that builds confidence, peace, and creativity."
          />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((item, index) => {
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
                  transition={{
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-6
                    text-center
                    backdrop-blur-2xl
                  "
                >
                  <div
                    className="
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-3xl
                      bg-yellow-400/10
                      text-yellow-300
                    "
                  >
                    <Icon size={24} />
                  </div>

                  <h3
                    className="
                      mt-4
                      text-[15px]
                      font-bold
                    "
                  >
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
         HIGHLIGHTS SECTION
      ========================================================= */}

      <section
        className="
          relative z-10
          px-4
          py-16
          sm:px-6
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
            gap-10
            lg:grid-cols-2
          "
        >
          {/* IMAGE */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              bg-white/[0.05]
              p-2.5
              backdrop-blur-3xl
            "
          >
            <img
              src={cert1}
              alt="Training"
              className="
                h-full
                min-h-[360px]
                w-full
                rounded-[24px]
                object-cover
                md:min-h-[500px]
              "
            />
          </motion.div>

          {/* CONTENT */}

          <div>
            <SectionTitle
              badge="Why Students Love Us"
              title="Focused Learning Experience"
              text="We create a calm, inspiring, and performance-oriented environment for every student."
            />

            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                    backdrop-blur-xl
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-2xl
                      bg-yellow-400/10
                      text-yellow-300
                    "
                  >
                    <CheckCircle2 size={18} />
                  </div>

                  <div
                    className="
                      text-[13px]
                      font-medium
                      text-zinc-200
                    "
                  >
                    {item}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
         TESTIMONIALS
      ========================================================= */}

      <section
        className="
          relative z-10
          px-4
          py-16
          sm:px-6
          md:px-10
          lg:px-16
        "
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="Student Reviews"
            title="What Our Students Say"
            text="Real experiences from students learning Indian classical music with our Guru."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-6
                  backdrop-blur-2xl
                "
              >
                <Quote
                  size={28}
                  className="text-yellow-300"
                />

                <p
                  className="
                    mt-4
                    text-[13px]
                    leading-7
                    text-zinc-400
                  "
                >
                  {item.text}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-2xl
                      bg-yellow-400/10
                      text-yellow-300
                    "
                  >
                    <Users size={18} />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold">
                      {item.name}
                    </h4>

                    <p className="text-[11px] text-zinc-500">
                      Music Student
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
         GALLERY
      ========================================================= */}

      <section
        className="
          relative z-10
          px-4
          py-16
          sm:px-6
          md:px-10
          lg:px-16
        "
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="Gallery"
            title="Moments Of Music & Performances"
            text="Explore glimpses of stage performances, classroom sessions, annual functions, and student achievements."
          />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-white/10
                  bg-white/[0.04]
                "
              >
                <img
                  src={image}
                  alt="Gallery"
                  className="
                    h-[300px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>






      {/* Guru Message */}

      <section
  className="
    relative z-10
    px-5
    py-24
    md:px-10
    lg:px-16
  "
>
  <div
    className="
      mx-auto
      max-w-6xl
      overflow-hidden
      rounded-[42px]
      border
      border-yellow-400/10
      bg-gradient-to-br
      from-yellow-400/10
      via-white/[0.04]
      to-violet-500/10
      p-8
      backdrop-blur-3xl
      md:p-16
    "
  >
    <div className="mx-auto max-w-4xl text-center">
      {/* Badge */}


  <div
    className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-yellow-400/20
      bg-yellow-400/10
      px-5
      py-2
      text-[11px]
      font-semibold
      uppercase
      tracking-[0.18em]
      text-yellow-200
    "
  >
    <Quote size={14} />
    Guru's Message
  </div>

  {/* Heading */}

  <h2
    className="
      mt-6
      text-4xl
      font-black
      leading-tight
      tracking-tight
      md:text-6xl
    "
  >
    Music Is Not Just An Art,

    <span
      className="
        block
        bg-gradient-to-r
        from-yellow-300
        via-yellow-100
        to-yellow-400
        bg-clip-text
        text-transparent
      "
    >
      It Is A Way Of Life
    </span>
  </h2>

  {/* Quote */}

  <blockquote
    className="
      mt-10
      text-lg
      leading-9
      text-zinc-300
      md:text-2xl
      md:leading-[2.2]
    "
  >
    “संगीत ही केवळ कला नसून जीवन जगण्याची एक साधना आहे.
    रियाज, शिस्त आणि समर्पण यांच्या माध्यमातून प्रत्येक विद्यार्थी
    स्वतःची वेगळी ओळख निर्माण करू शकतो.
    संगीत आपल्याला संस्कार, आत्मविश्वास आणि अंतर्मनातील शांततेचा मार्ग दाखवते.”
  </blockquote>

  {/* Divider */}

  <div
    className="
      mx-auto
      mt-10
      h-px
      w-32
      bg-gradient-to-r
      from-transparent
      via-yellow-400/50
      to-transparent
    "
  />

  {/* Guru Info */}

  <div className="mt-10">
    <h3
      className="
        text-2xl
        font-bold
        text-white
      "
    >
      Guruji
    </h3>

    <p
      className="
        mt-2
        text-sm
        tracking-[0.2em]
        uppercase
        text-yellow-300
      "
    >
      Founder & Music Mentor
    </p>

    <p
      className="
        mx-auto
        mt-5
        max-w-2xl
        text-zinc-400
        leading-8
      "
    >
      Sant Dnyaneshwar Sangeet Vidyalaya has been committed to
      nurturing students through the rich tradition of Indian
      Classical Music, helping them grow artistically,
      culturally and personally.
    </p>
  </div>
</div>
```

  </div>
</section>


      {/* =========================================================
         CTA SECTION
      ========================================================= */}

      <section
        className="
          relative z-10
          px-4
          pb-20
          pt-4
          sm:px-6
          md:px-10
          lg:px-16
        "
      >
        <div className="mx-auto max-w-4xl text-center">

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
      border
      border-yellow-400/20
    "
  >
    <GraduationCap size={34} />
  </div>

  <div
    className="
      mt-6
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
      font-semibold
      tracking-wider
      uppercase
      text-yellow-200
    "
  >
    <Sparkles size={12} />
    Admissions Open
  </div>

  <h2
    className="
      mt-8
      text-4xl
      font-black
      leading-tight
      md:text-6xl
    "
  >
    Join The Legacy Of
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
      Classical Music
    </span>
  </h2>

  <p
    className="
      mx-auto
      mt-6
      max-w-3xl
      text-zinc-400
      leading-8
    "
  >
    For over 26 years, Sant Dnyaneshwar Sangeet Vidyalaya has been
    nurturing students through disciplined training, cultural values,
    stage performance experience and Gandharva Mahavidyalaya examination guidance.
  </p>

  <p
    className="
      mt-5
      text-lg
      font-medium
      text-yellow-200
    "
  >
    कला हेच जीवन हेच विद्यालयाचे ब्रीद असून प्रत्येक विद्यार्थ्यामध्ये
    संगीताची आवड, संस्कार आणि आत्मविश्वास विकसित करण्याचा आमचा प्रयत्न असतो.
  </p>

  <div
    className="
      mt-10
      flex
      flex-wrap
      justify-center
      gap-4
    "
  >
    <button
      className="
        rounded-full
        bg-yellow-400
        px-8
        py-4
        font-bold
        text-black
      "
    >
      Book Free Demo Class
    </button>

    <button
      className="
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        px-8
        py-4
      "
    >
      Contact Academy
    </button>
  </div>

</div>
      </section>
    </div>
  );
};

export default memo(GuruPage);