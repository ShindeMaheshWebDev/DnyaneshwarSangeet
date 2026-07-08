// src/pages/CoursesPage.jsx

import React, { memo, useMemo } from "react";

import { motion } from "framer-motion";

import {
  Music2,
  Sparkles,
  Star,
  GraduationCap,
  Clock3,
  Award,
  Users,
  ArrowUpRight,
  PlayCircle,
  CheckCircle2,
  Mic2,
  Disc3,
  Piano,
  Radio,
  Guitar,
  Drum,
} from "lucide-react";
import {
  
  Crown,

  
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================
   PREMIUM COURSE DATA
========================================================= */

const courses = [
  {
    title: "शास्त्रीय गायन",
    level: "प्रारंभिक ते विशारद",
    duration: "परीक्षा आधारित प्रशिक्षण",
    students: "सर्व वयोगट",
    slug: "classical-vocal",
    icon: Mic2,
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "तबला प्रशिक्षण",
    level: "प्रारंभिक ते विशारद",
    duration: "परीक्षा आधारित प्रशिक्षण",
    students: "सर्व वयोगट",
    slug: "tabla",
    icon: Disc3,
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "हार्मोनियम प्रशिक्षण",
    level: "प्रारंभिक ते विशारद",
    duration: "परीक्षा आधारित प्रशिक्षण",
    students: "सर्व वयोगट",
    slug: "harmonium",
    icon: Piano,
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "सुगम संगीत",
    level: "प्रारंभिक ते प्रगत",
    duration: "नियमित प्रशिक्षण",
    students: "सर्व वयोगट",
    slug: "sugam-sangeet",
    icon: Radio,
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "गांधर्व परीक्षा मार्गदर्शन",
    level: "प्रारंभिक ते विशारद",
    duration: "परीक्षा विशेष मार्गदर्शन",
    students: "सर्व वयोगट",
    slug: "gandharva-exam-guidance",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "मंच सादरीकरण प्रशिक्षण",
    level: "प्रात्यक्षिक प्रशिक्षण",
    duration: "मासिक उपक्रम",
    students: "निवडक विद्यार्थी",
    slug: "performance",
    icon: Award,
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1200&auto=format&fit=crop",
  },
];

const features = [
 "26+ Years Of Music Education",
 "Affiliated To Akhil Bharatiya Gandharva Mahavidyalaya",
 "Prarambhik To Visharad Training",
 "Separate Batches For Male & Female Students",
 "Friday, Saturday & Sunday Batches",
 "Monthly Music Sabha",
 "Monthly Student Performances",
 "Competition Participation Guidance",
 "Experienced Guru Guidance",
 "Offline Classroom Learning"
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
    },
  },
};

/* =========================================================
   COURSE CARD
========================================================= */

const CourseCard = memo(({ course, index }) => {
  const Icon = course.icon;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay: index * 0.04,
      }}
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
      "
    >
      {/* IMAGE */}

      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          decoding="async"
          className="
            h-[180px]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#050816]
            via-black/10
            to-transparent
          "
        />
      </div>

      {/* ICON */}

      <div
        className="
          absolute
          right-4
          top-4
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-2xl
          border
          border-white/10
          bg-black/40
          text-yellow-300
          backdrop-blur-xl
        "
      >
        <Icon size={16} />
      </div>

      {/* CONTENT */}

      <div className="p-4">
        <h3
          className="
            text-[17px]
            font-bold
            tracking-tight
            text-white
          "
        >
          {course.title}
        </h3>

        <div className="mt-4 space-y-2.5">
          <div className="flex items-center gap-2 text-[12px] text-zinc-400">
            <Award size={13} />

            {course.level}
          </div>

          <div className="flex items-center gap-2 text-[12px] text-zinc-400">
            <Clock3 size={13} />

            {course.duration}
          </div>

          <div className="flex items-center gap-2 text-[12px] text-zinc-400">
            <Users size={13} />

            {course.students}
          </div>
        </div>

        <Link to={`/courses/${course.slug}`}>




        <button
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-yellow-400/20
            bg-yellow-400/10
            px-4
            py-2
            text-[12px]
            font-medium
            text-yellow-200
            transition-all
            duration-300
            hover:bg-yellow-400
            hover:text-black
          "
        >
          View Details

          <ArrowUpRight size={13} />
        </button>
        </Link>
      </div>
    </motion.div>
  );
});

/* =========================================================
   FEATURE ITEM
========================================================= */

const FeatureItem = memo(({ item, index }) => {
  return (
    <motion.div
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
      className="
        flex
        items-center
        gap-4
        rounded-[20px]
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
        <CheckCircle2 size={17} />
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
  );
});

/* =========================================================
   MAIN PAGE
========================================================= */

const CoursesPage = () => {
  const stats = useMemo(
    () => [
      ["26+", "Years Experience"],
      ["1000+", "Student Trained"],
      ["2", "Branches"],
    ],
    []
  );

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

        {/* GRID */}

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
          px-5
          pb-14
          pt-10
          md:px-8
          lg:px-10
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1280px]
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
                px-4
                py-2
                text-[11px]
                font-medium
                text-yellow-200
                backdrop-blur-xl
              "
            >
              <Sparkles size={13} />

              Premium Music Academy
            </div>

            {/* TITLE */}

            <h1
              className="
                max-w-2xl
                text-[2.2rem]
                font-black
                leading-[0.95]
                tracking-tight
                sm:text-5xl
                md:text-[4rem]
              "
            >
              Learn

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
                Indian Music
              </span>

              <br />

              Beautifully
            </h1>

            {/* TEXT */}

            <p
              className="
                mt-5
                max-w-xl
                text-[14px]
                leading-7
                text-zinc-400
              "
            >
              अखिल भारतीय गांधर्व महाविद्यालयाशी संलग्न.

प्रारंभिक ते विशारद स्तरापर्यंत गायन, तबला व हार्मोनियम शिक्षण.
गुरुकुल परंपरा, शास्त्रीय संगीत, सुगम संगीत व मंच सादरीकरणाचे मार्गदर्शन.
            </p>

            {/* BUTTONS */}

            <div className="mt-7 flex flex-wrap gap-4">
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
                  text-sm
                  font-semibold
                  text-black
                  shadow-[0_0_40px_rgba(250,204,21,0.22)]
                "
              >
                Explore Courses

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
                  text-sm
                  text-white
                  backdrop-blur-xl
                "
              >
                <PlayCircle size={15} />

                Watch Demo
              </button>
            </div>

            {/* STATS */}

            <div className="mt-8 grid max-w-md grid-cols-3 gap-4">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="
                    rounded-[20px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                    backdrop-blur-xl
                  "
                >
                  <div
                    className="
                      text-xl
                      font-black
                      text-yellow-300
                    "
                  >
                    {item[0]}
                  </div>

                  <div
                    className="
                      mt-1
                      text-[11px]
                      text-zinc-400
                    "
                  >
                    {item[1]}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative"
          >
            <div
              className="
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.04]
                p-3
                backdrop-blur-2xl
              "
            >
              <img
                src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=1200&auto=format&fit=crop"
                alt="Music Academy"
                loading="eager"
                decoding="async"
                className="
                  h-[320px]
                  w-full
                  rounded-[22px]
                  object-cover
                  md:h-[470px]
                "
              />

              {/* OVERLAY */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  rounded-[20px]
                  border
                  border-white/10
                  bg-black/40
                  p-4
                  backdrop-blur-2xl
                "
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] text-zinc-400">
                      Featured Program
                    </p>

                    <h3
                      className="
                        mt-1
                        text-lg
                        font-bold
                      "
                    >
                      Classical Vocal Training
                    </h3>
                  </div>

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      bg-yellow-400
                      text-black
                    "
                  >
                    <Music2 size={20} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
         COURSES SECTION
      ========================================================= */}

      <section
        id="courses"
        className="
          relative z-10
          px-5
          py-14
          md:px-8
          lg:px-10
        "
      >
        <div className="mx-auto max-w-[1280px]">
          {/* HEADING */}

          <div className="mb-10 text-center">
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
                px-4
                py-2
                text-[11px]
                text-yellow-200
              "
            >
              <GraduationCap size={13} />

              Premium Programs
            </div>

            <h2
              className="
                text-[2rem]
                font-black
                md:text-[2.5rem]
              "
            >
              Explore Our Courses
            </h2>
          </div>

          {/* GRID */}

          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                course={course}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
         FEATURES
      ========================================================= */}

      <section
  className="
    relative z-10
    px-5
    py-14
    md:px-8
    lg:px-10
  "
>
  <div
    className="
      mx-auto
      grid
      max-w-[1280px]
      items-center
      gap-16
      lg:grid-cols-[0.95fr_1.05fr]
    "
  >
    {/* LEFT */}

    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative"
    >
      {/* Badge */}

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
          text-[11px]
          text-yellow-200
        "
      >
        <Star size={13} />
        Why Students Choose Our Academy
      </div>

      {/* Heading */}

      <h2
        className="
          text-[2.3rem]
          font-black
          leading-[1]
          tracking-tight
          md:text-[3.4rem]
        "
      >
        26 Years Of

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
          Musical Excellence
        </span>
      </h2>

      {/* Description */}

      <p
        className="
          mt-6
          max-w-xl
          text-[15px]
          leading-8
          text-zinc-400
        "
      >
        Sant Dnyaneshwar Sangeet Vidyalaya has been
        nurturing musicians through traditional
        Gurukul values, disciplined Riyaz,
        examination preparation and stage
        performance training since 1999.
      </p>





      {/* Bottom Achievement Card */}

      <div
        className="
          mt-8
          flex
          items-center
          gap-4
          rounded-[26px]
          border
          border-white/10
          bg-white/[0.04]
          p-5
          backdrop-blur-xl
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
          <Award size={24} />
        </div>

        <div>
          <h4
            className="
              font-semibold
              text-white
            "
          >
            Affiliated Institution
          </h4>

          <p
            className="
              mt-1
              text-sm
              text-zinc-400
            "
          >
            Akhil Bharatiya Gandharva
            Mahavidyalaya Examination System
          </p>
        </div>
      </div>
    </motion.div>

    {/* RIGHT */}

    <div className="grid gap-4 md:grid-cols-2">
      {features.map((feature, i) => (
        <FeatureItem
          key={i}
          item={feature}
          index={i}
        />
      ))}
    </div>
  </div>
</section>


{/* guru guidence  */}

<section
  className="
    relative z-10
    px-5
    py-16
    md:px-8
    lg:px-10
  "
>
  <div className="mx-auto max-w-[1280px]">
    {/* HEADER */}

    <div className="mx-auto mb-16 max-w-3xl text-center">
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
        "
      >


        <GraduationCap size={13} />
        Guru Guidance
      </div>

<div className="absolute h-8 w-8 border-[1.4px] border-amber-300 animate-spin left-16"></div>


      <h2
        className="
          mt-5
          text-[2.3rem]
          font-black
          leading-tight
          md:text-[3.5rem]
        "
      >
        Learn Under The Guidance Of
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
          Experienced Music Gurus
        </span>
      </h2>

      <p
        className="
          mt-5
          text-[15px]
          leading-8
          text-zinc-400
        "
      >
        Our academy is guided by experienced music educators
        dedicated to preserving Indian classical traditions
        while nurturing the next generation of performers.
      </p>
    </div>

    {/* GURU CARDS */}

    <div className="grid gap-8 lg:grid-cols-2">
      {/* FOUNDER */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-yellow-400/10
          bg-gradient-to-br
          from-yellow-400/10
          via-white/[0.04]
          to-white/[0.02]
          p-8
          backdrop-blur-3xl
        "
      >
        <div
          className="
            absolute
            right-0
            top-0
            h-40
            w-40
            rounded-full
            bg-yellow-400/10
            blur-3xl
          "
        />

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-[22px]
            bg-yellow-400/15
            text-yellow-300
          "
        >
          <Crown size={28} />
        </div>

        <div
          className="
            mt-6
            inline-flex
            rounded-full
            bg-yellow-400/10
            px-4
            py-1.5
            text-xs
            text-yellow-300
          "
        >
          Founder & Principal Guru
        </div>

        <h3
          className="
            mt-4
            text-3xl
            font-black
          "
        >
          P. S. Gaikwad
        </h3>

        <p
          className="
            mt-2
            text-yellow-300
            font-medium
          "
        >
          Sangeet Visharad
        </p>

        <p
          className="
            mt-6
            leading-8
            text-zinc-400
          "
        >
          With more than 26 years of experience in music
          education, Guru P. S. Gaikwad has dedicated his
          life to nurturing students through disciplined
          Riyaz, Gurukul traditions and practical
          performance training.
        </p>

        <div className="mt-8 space-y-3">
          {[
            "26+ Years In Music Education",
            "Traditional Gurukul Training",
            "Classical Vocal & Sugam Sangeet Guidance",
            "Prarambhik To Visharad Preparation",
            "Student Performance Development",
          ].map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-yellow-300
                "
              />

              <span className="text-zinc-300">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div
          className="
            mt-8
            rounded-[24px]
            border
            border-white/10
            bg-black/20
            p-5
          "
        >
          <p
            className="
              text-sm
              leading-7
              text-zinc-300
            "
          >
            Trained under
            <span className="text-yellow-300">
              {" "}
              Prof. R. N. Bhangade
            </span>
            (Sangeet Alankar) through traditional
            Gurukul learning methodology.
          </p>
        </div>
      </div>

      {/* TABLA GURU */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.04]
          p-8
          backdrop-blur-3xl
        "
      >
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-[22px]
            bg-yellow-400/10
            text-yellow-300
          "
        >
          <Music2 size={28} />
        </div>

        <div
          className="
            mt-6
            inline-flex
            rounded-full
            bg-yellow-400/10
            px-4
            py-1.5
            text-xs
            text-yellow-300
          "
        >
          Tabla Mentor
        </div>

        <h3
          className="
            mt-4
            text-3xl
            font-black
          "
        >
          Anil Dole Sir
        </h3>

        <p
          className="
            mt-2
            text-yellow-300
            font-medium
          "
        >
          Sangeet Alankar
        </p>

        <p
          className="
            mt-6
            leading-8
            text-zinc-400
          "
        >
          Students receive expert Tabla guidance for
          examinations, rhythm development, accompaniment
          techniques and live performance preparation under
          the mentorship of respected Tabla educator
          Anil Dole Sir.
        </p>

        <div className="mt-8 space-y-3">
          {[
            "Advanced Tabla Training",
            "Examination Preparation",
            "Practical Rhythm Development",
            "Stage Performance Guidance",
            "Individual Student Attention",
          ].map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-yellow-300
                "
              />

              <span className="text-zinc-300">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div
          className="
            mt-8
            rounded-[24px]
            border
            border-white/10
            bg-black/20
            p-5
          "
        >
          <p
            className="
              text-sm
              leading-7
              text-zinc-300
            "
          >
            Dedicated guidance for students pursuing
            Tabla education from beginner to advanced
            examination levels.
          </p>
        </div>
      </div>
    </div>

    {/* BOTTOM QUOTE */}

    <div
      className="
        mt-12
        rounded-[34px]
        border
        border-yellow-400/10
        bg-gradient-to-r
        from-yellow-400/10
        via-white/[0.04]
        to-yellow-400/10
        p-8
        text-center
      "
    >
      <Award
        size={42}
        className="
          mx-auto
          text-yellow-300
        "
      />

      <h3
        className="
          mt-5
          text-2xl
          font-bold
        "
      >
        Guru–Shishya Tradition
      </h3>

      <p
        className="
          mx-auto
          mt-4
          max-w-3xl
          leading-8
          text-zinc-400
        "
      >
        At Sant Dnyaneshwar Sangeet Vidyalaya, education
        extends beyond examinations. Students are guided
        through discipline, practice, stage confidence and
        cultural values to become complete musicians.
      </p>
    </div>
  </div>
</section>

      {/* =========================================================
         CTA
      ========================================================= */}

      <section
  className="
    relative z-10
    px-5
    pb-24
    pt-8
    md:px-8
    lg:px-10
  "
>
  <div
    className="
      relative
      mx-auto
      max-w-[1280px]
      overflow-hidden
      rounded-[40px]
      border
      border-white/10
      bg-gradient-to-br
      from-yellow-400/15
      via-white/[0.04]
      to-violet-500/10
      p-8
      backdrop-blur-3xl
      md:p-14
    "
  >
    {/* Glow Effects */}

    <div
      className="
        absolute
        left-[-100px]
        top-[-100px]
        h-[250px]
        w-[250px]
        rounded-full
        bg-yellow-400/10
        blur-[100px]
      "
    />

    <div
      className="
        absolute
        bottom-[-100px]
        right-[-100px]
        h-[250px]
        w-[250px]
        rounded-full
        bg-violet-500/10
        blur-[100px]
      "
    />

    <div className="relative z-10">
      {/* Badge */}

      <div className="text-center">
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
            text-xs
            font-medium
            text-yellow-200
          "
        >
          <Crown size={14} />

          Admissions Open 2026
        </div>
      </div>

      {/* Heading */}

      <h2
        className="
          mx-auto
          mt-8
          max-w-4xl
          text-center
          text-4xl
          font-black
          leading-tight
          md:text-6xl
        "
      >
        संगीत साधनेचा
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
          प्रवास आजच सुरू करा
        </span>
      </h2>

      {/* Description */}

      <p
        className="
          mx-auto
          mt-6
          max-w-3xl
          text-center
          text-[15px]
          leading-8
          text-zinc-400
        "
      >
        संत ज्ञानेश्वर संगीत विद्यालयात
        शास्त्रीय गायन, तबला, हार्मोनियम,
        सुगम संगीत व परीक्षा मार्गदर्शनासह
        अनुभवी गुरूंच्या मार्गदर्शनाखाली
        दर्जेदार संगीत शिक्षण दिले जाते.
      </p>

      {/* Highlights */}

      <div
        className="
          mt-10
          flex
          flex-wrap
          justify-center
          gap-3
        "
      >
        {[
          "26+ Years Legacy",
          "Gandharva Affiliated",
          "Monthly Music Sabha",
          "Performance Opportunities",
          "Male & Female Batches",
          "Offline + Online Classes",
        ].map((item, i) => (
          <div
            key={i}
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              px-4
              py-2
              text-xs
              text-zinc-300
              backdrop-blur-xl
            "
          >
            {item}
          </div>
        ))}
      </div>

      {/* Buttons */}

      <div
        className="
          mt-12
          flex
          flex-wrap
          justify-center
          gap-4
        "
      >
        <motion.button
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            rounded-full
            bg-yellow-400
            px-8
            py-4
            text-sm
            font-bold
            text-black
            shadow-[0_0_45px_rgba(250,204,21,0.25)]
          "
        >
          Enroll Now
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            rounded-full
            border
            border-white/10
            bg-white/[0.05]
            px-8
            py-4
            text-sm
            text-white
            backdrop-blur-xl
          "
        >
          Book Free Counseling
        </motion.button>
      </div>

      {/* Motto */}

      <div
        className="
          mt-14
          border-t
          border-white/10
          pt-10
          text-center
        "
      >
        <p
          className="
            text-2xl
            font-bold
            text-yellow-300
          "
        >
          "कला हेच जीवन, हेच विद्यालयाचे ब्रीद आहे"
        </p>

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-sm
            leading-7
            text-zinc-400
          "
        >
          येथे केवळ संगीत शिकवले जात नाही,
          तर कलाकार घडवले जातात. शिस्त,
          संस्कार, आत्मविश्वास आणि कलात्मक
          व्यक्तिमत्त्व विकसित करण्यासाठी
          आम्ही कटिबद्ध आहोत.
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default memo(CoursesPage);