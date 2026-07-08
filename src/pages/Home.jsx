import React, {
  useEffect,
  useMemo,
  lazy,
  Suspense,
} from "react";

import { motion } from "framer-motion";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import AmbientGlow from "../components/home/AmbientGlow";

import PremiumButton from "../components/common/PremiumButton";
import SectionTitle from "../components/common/SectionTitle";

/* =========================================================
   🔥 LAZY LOAD HEAVY 3D
========================================================= */

const Hero3D = lazy(() =>
  import("../components/home/Hero3D")
);

/* =========================================================
   ICONS
========================================================= */

import {
  Music2,
  Mic2,
  Disc3,
  Sparkles,
  Star,
  Phone,
  CheckCircle2,
  PlayCircle,
  GraduationCap,
  ShieldCheck,
  Award,
  Users,
  BookOpen,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   DATA
========================================================= */

const stats = [
  {
    value: "26+",
    label: "Years Experience",
  },

  {
    value: "1200+",
    label: "Students Trained",
  },

  {
    value: "2",
    label: "Branches",
  },

  {
    value: "100%",
    label: "Exam Guidence",
  },
];

const courses = [
  {
    icon: Mic2,
    title: "शास्त्रीय गायन",
    subtitle: "Prarambhik to Visharad",

    description:
      "हिंदुस्थानी शास्त्रीय संगीत, रागदारी, स्वर साधना, बंदिश, आलाप, तान आणि गांधर्व परीक्षा तयारी.",

    duration: "Prarambhik to Visharad",
  },

  {
    icon: Disc3,
    title: "तबला प्रशिक्षण",
    subtitle: "Traditional Tabla Learning",

    description:
      "ताल, लय, कायदे, रेले, तुकडे आणि गांधर्व महाविद्यालय परीक्षा मार्गदर्शन.",

    duration: "Prarambhik to Visharad",
  },

  {
    icon: Music2,
    title: "हार्मोनियम",
    subtitle: "Classical Instrument Training",

    description:
      "हार्मोनियम बेसिक्स, राग साथसंगत, भजन साथ आणि परीक्षा आधारित प्रशिक्षण.",

    duration: "Prarambhik to Visharad",
  },

  {
    icon: Award,
    title: "सुगम संगीत",
    subtitle: "Light Music Training",

    description:
      "भावगीत, भक्तिगीत, देशभक्तीपर गीते आणि आधुनिक सुगम संगीत मार्गदर्शन.",

    duration: "All Levels",
  },

  {
    icon: Star,
    title: "गांधर्व परीक्षा तयारी",
    subtitle: "Exam Oriented Learning",

    description:
      "अखिल भारतीय गांधर्व महाविद्यालय संलग्न अभ्यासक्रम व परीक्षा मार्गदर्शन.",

    duration: "All Grades",
  },

  {
    icon: Users,
    title: "मंच सादरीकरण",
    subtitle: "Performance Development",

    description:
      "मासिक संगीत सभा, विद्यार्थी सादरीकरण आणि स्टेज कॉन्फिडन्स विकास.",

    duration: "Regular Activities",
  },
];

const features = [
  "Experienced Music Guru",
  "Traditional Indian Classical Training",
  "Stage Performance Preparation",
  "Competition Preparation",
  "Weekend Special Classes",
  "Cultural & Spiritual Learning",
];

const achievements = [
  {
    icon: GraduationCap,

    title: "Structured Learning",

    desc:
      "प्रारंभिक ते विशारद स्तरापर्यंत टप्प्याटप्प्याने विकसित केलेली संगीत शिक्षण प्रणाली.",
  },

  {
    icon: Award,

    title: "Exam Excellence",

    desc:
      "गांधर्व महाविद्यालय व विविध संगीत परीक्षांसाठी विशेष मार्गदर्शन व तयारी.",
  },

  {
    icon: Mic2,

    title: "Stage Confidence",

    desc:
      "मासिक संगीत सभा, सांस्कृतिक कार्यक्रम आणि मंच सादरीकरणाद्वारे आत्मविश्वास वृद्धी.",
  },

  {
    icon: Users,

    title: "Guru Mentorship",

    desc:
      "अनुभवी गुरुजनांच्या वैयक्तिक मार्गदर्शनाखाली प्रत्येक विद्यार्थ्याचा सर्वांगीण विकास.",
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

  show: (i = 1) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* =========================================================
   PREMIUM CARD
========================================================= */

const GlassCard = ({
  children,
  className = "",
}) => (
  <div
    className={`
      group
      relative
      overflow-hidden
      rounded-[34px]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      transition-all
      duration-500
      hover:border-yellow-300/20
      hover:-translate-y-2
      ${className}
    `}
  >
    {/* LIGHT */}

    <div
      className="
        absolute
        right-[-60px]
        top-[-60px]
        h-[240px]
        w-[240px]
        rounded-full
        bg-yellow-400/10
        blur-[110px]
        opacity-0
        transition-all
        duration-500
        group-hover:opacity-100
      "
    />

    {children}
  </div>
);

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Home = () => {
  /* =========================================================
     GSAP LIGHTWEIGHT
  ========================================================= */

  useEffect(() => {
    const cards =
      gsap.utils.toArray(".reveal-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,

        {
          opacity: 0,
          y: 60,
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(
        (trigger) => trigger.kill()
      );
    };
  }, []);

  /* =========================================================
     MEMOIZED LISTS
  ========================================================= */

  const renderStats = useMemo(
    () =>
      stats.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="reveal-card"
        >
          <GlassCard className="p-7">
            <div className="relative z-10">
              <div
                className="
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-[22px]
                  border
                  border-yellow-300/20
                  bg-yellow-400/10
                "
              >
                <Sparkles
                  size={28}
                  className="text-yellow-300"
                />
              </div>

              <h3
                className="
                  text-4xl
                  font-black
                  text-yellow-300
                  md:text-5xl
                "
              >
                {item.value}
              </h3>

              <p
                className="
                  mt-3
                  text-zinc-400
                "
              >
                {item.label}
              </p>
            </div>
          </GlassCard>
        </motion.div>
      )),
    []
  );

  return (
    <main
      className="
        relative
        overflow-hidden
        bg-[#050816]
        text-white
      "
    >
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <AmbientGlow />

      <div
        className="
          pointer-events-none
          absolute
          left-[-200px]
          top-[5%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-yellow-500/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-[40%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-violet-500/10
          blur-[120px]
        "
      />



      {/* ========================================================= */}
      {/* HERO 3D */}
      {/* ========================================================= */}

      <Suspense
        fallback={
          <div
            className="
              flex
              h-screen
              items-center
              justify-center
            "
          >
            <div
              className="
                h-16
                w-16
                animate-spin
                rounded-full
                border-4
                border-yellow-300/20
                border-t-yellow-300
              "
            />
          </div>
        }
      >
        <Hero3D />
      </Suspense>

      {/* ========================================================= */}
      {/* MAIN CONTENT */}
      {/* ========================================================= */}

      <section
        className="
          relative
          z-20
          px-5
          py-24
          md:px-10
          lg:px-20
        "
      >
        <div className="mx-auto max-w-[1400px]">
          {/* ========================================================= */}
          {/* TITLE */}
          {/* ========================================================= */}

          <SectionTitle
            badge="Indian Classical Music"
            title="संगीताची"
            highlight="परंपरा"
            subtitle="भारतीय शास्त्रीय संगीत, गायन आणि वादन यांचे सांस्कृतिक आणि पारंपरिक पद्धतीने सखोल प्रशिक्षण."
            dark
          />

          {/* ========================================================= */}
          {/* STATS */}
          {/* ========================================================= */}

          <div
            className="
              mt-20
              grid
              gap-6
              sm:grid-cols-2
              md:grid-cols-4
              xl:grid-cols-4
            "
          >
            {renderStats}
          </div>

          {/* ========================================================= */}
          {/* COURSES */}
          {/* ========================================================= */}

          <div className="mt-32">
  <SectionTitle
    badge="Music Education Programs"
    title="आमचे"
    highlight="संगीत अभ्यासक्रम"
    subtitle="प्रारंभिक ते विशारद स्तरापर्यंत भारतीय शास्त्रीय संगीत, वादन आणि परीक्षा मार्गदर्शन."
    align="start"
    dark
  />

  {/* TOP INFO */}

  <motion.div
    initial={{
      opacity: 0,
      y: 40,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
    }}
    className="
      mx-auto
      mt-10
      max-w-5xl
      text-center
    "
  >
    <p
      className="
        text-[15px]
        leading-8
        text-zinc-400
      "
    >
      संत ज्ञानेश्वर संगीत विद्यालयामध्ये
      गायन, तबला, हार्मोनियम, सुगम संगीत,
      गांधर्व परीक्षा मार्गदर्शन तसेच
      मासिक संगीत सभा आणि मंच
      सादरीकरणाची संधी उपलब्ध आहे.
    </p>
  </motion.div>

  {/* COURSE GRID */}

  <div
    className="
      mt-16
      grid
      gap-7
      sm:grid-cols-2
      md:grid-cols-3
      
    "
  >
    {courses.map((course, index) => (
      <motion.div
        key={index}
        custom={index}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="reveal-card"
      >
        <GlassCard className="h-full p-8">
          <div className="relative z-10">
            {/* ICON */}

            <div
              className="
                mb-6
                flex
                h-18
                w-18
                items-center
                justify-center
                rounded-[22px]
                border
                border-yellow-300/20
                bg-yellow-400/10
              "
            >
              <course.icon
                size={30}
                className="text-yellow-300"
              />
            </div>

            {/* CATEGORY */}

            <div
              className="
                inline-flex
                rounded-full
                border
                border-yellow-400/20
                bg-yellow-400/10
                px-3
                py-1
                text-[11px]
                text-yellow-200
              "
            >
              {course.subtitle}
            </div>

            {/* TITLE */}

            <h3
              className="
                mt-5
                text-2xl
                font-black
              "
            >
              {course.title}
            </h3>

            {/* DESC */}

            <p
              className="
                mt-4
                leading-7
                text-zinc-400
              "
            >
              {course.description}
            </p>

            {/* FOOTER */}

            <div
              className="
                mt-6
                flex
                items-center
                justify-between
                border-t
                border-white/10
                pt-5
              "
            >
              <div>
                <p
                  className="
                    text-[11px]
                    text-zinc-500
                  "
                >
                  Training Level
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-medium
                    text-zinc-200
                  "
                >
                  {course.duration}
                </p>
              </div>

              <PremiumButton
                variant="gold"
                size="sm"
              >
                Learn More
              </PremiumButton>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    ))}
  </div>

  {/* BOTTOM HIGHLIGHTS */}

  <div
    className="
      mt-14
      grid
      gap-4
      md:grid-cols-3
    "
  >
    {[
      "अखिल भारतीय गांधर्व महाविद्यालय संलग्न",
      "मासिक संगीत सभा व विद्यार्थी सादरीकरण",
      "अनुभवी गुरूंच्या मार्गदर्शनाखाली प्रशिक्षण",
    ].map((item, index) => (
      <div
        key={index}
        className="
          rounded-[22px]
          border
          border-white/10
          bg-white/[0.03]
          p-5
          text-center
          text-sm
          text-zinc-300
          backdrop-blur-xl
        "
      >
        {item}
      </div>
    ))}
  </div>
</div>

          {/* ========================================================= */}
          {/* WHY CHOOSE */}
          {/* ========================================================= */}

          <div className="mt-36">
  <div
    className="
      grid
      items-center
      gap-12
      lg:grid-cols-[1.05fr_0.95fr]
    "
  >
    {/* ===================================== */}
    {/* LEFT CONTENT */}
    {/* ===================================== */}

    <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  {/* BADGE */}

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
    <Star size={13} />

    Why Students Trust Us
  </div>

  {/* HEADING */}

  <h2
    className="
      mt-5
      text-[2.4rem]
      font-black
      leading-tight
      md:text-[3rem]
    "
  >
    More Than A Music School

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
      We Build Artists
    </span>
  </h2>

  {/* DESCRIPTION */}

  <p
    className="
      mt-6
      max-w-xl
      text-[15px]
      leading-8
      text-zinc-400
    "
  >
    संत ज्ञानेश्वर संगीत विद्यालयामध्ये
    संगीत शिक्षण हे केवळ विषय म्हणून
    शिकवले जात नाही, तर ते संस्कार,
    साधना, शिस्त आणि कलात्मक व्यक्तिमत्त्व
    घडविण्याची प्रक्रिया म्हणून दिले जाते.
    पारंपरिक गुरुकुल पद्धती, नियमित रियाज,
    मंच सादरीकरण आणि अनुभवी गुरुजनांचे
    मार्गदर्शन यामुळे विद्यार्थ्यांचा
    सर्वांगीण विकास घडवला जातो.
  </p>

  {/* LEARNING EXPERIENCE */}

  <div className="mt-10 space-y-4">
    {[
      {
        title: "Traditional Gurukul Learning",
        desc: "भारतीय शास्त्रीय संगीताचे पारंपरिक पद्धतीने शिक्षण.",
      },
      {
        title: "Stage Performance Exposure",
        desc: "मासिक संगीत सभा व विद्यार्थी सादरीकरणाची संधी.",
      },
      {
        title: "Examination Guidance",
        desc: "प्रारंभिक ते विशारद स्तरापर्यंत संपूर्ण मार्गदर्शन.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="
          flex
          gap-4
          rounded-[24px]
          border
          border-white/10
          bg-white/[0.03]
          p-5
          backdrop-blur-xl
        "
      >
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-yellow-400/10
          "
        >
          <CheckCircle2
            size={18}
            className="text-yellow-300"
          />
        </div>

        <div>
          <h4
            className="
              text-sm
              font-semibold
              text-white
            "
          >
            {item.title}
          </h4>

          <p
            className="
              mt-2
              text-sm
              leading-6
              text-zinc-400
            "
          >
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* MOTTO + AFFILIATION */}

  <div
    className="
      mt-8
      grid
      gap-4
      md:grid-cols-2
    "
  >
    {/* MOTTO */}

    <div
      className="
        rounded-[28px]
        border
        border-yellow-400/10
        bg-gradient-to-br
        from-yellow-400/10
        to-transparent
        p-6
      "
    >
      <p
        className="
          text-2xl
          font-black
          text-yellow-300
        "
      >
        कला हेच जीवन
      </p>

      <p
        className="
          mt-3
          text-sm
          leading-7
          text-zinc-400
        "
      >
        हे विद्यालयाचे ब्रीद असून येथे
        विद्यार्थ्यांना केवळ संगीत नाही,
        तर कलात्मक जीवनदृष्टी दिली जाते.
      </p>
    </div>

    {/* AFFILIATION */}

    <div
      className="
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.03]
        p-6
        backdrop-blur-xl
      "
    >
      <p
        className="
          text-sm
          font-semibold
          text-yellow-300
        "
      >
        Gandharva Affiliation
      </p>

      <p
        className="
          mt-3
          text-sm
          leading-7
          text-zinc-400
        "
      >
        अखिल भारतीय गांधर्व महाविद्यालयाशी
        संलग्न असून विविध परीक्षांसाठी
        अधिकृत मार्गदर्शन व तयारी दिली
        जाते.
      </p>
    </div>
  </div>
</motion.div>

    {/* ===================================== */}
    {/* RIGHT PREMIUM PANEL */}
    {/* ===================================== */}

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="reveal-card"
    >
      <GlassCard className="overflow-hidden p-0">
        <div
          className="
            relative
            h-full
            min-h-[680px]
          "
        >
          {/* BG GLOW */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-yellow-400/10
              via-transparent
              to-violet-500/10
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-24
              h-[260px]
              w-[260px]
              -translate-x-1/2
              rounded-full
              bg-yellow-400/15
              blur-[120px]
            "
          />

          {/* HEADER */}

          <div className="relative z-10 p-8">
            <h3
              className="
                text-2xl
                font-black
              "
            >
              Academy Highlights
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-zinc-400
              "
            >
              Premium training environment for
              future musicians.
            </p>
          </div>

          {/* LIST */}

          <div
            className="
              relative z-10
              space-y-4
              px-8
              pb-8
            "
          >
            {[
              "गायन, तबला व हार्मोनियम प्रशिक्षण",
              "प्रारंभिक ते विशारद स्तर मार्गदर्शन",
              "अखिल भारतीय गांधर्व महाविद्यालय संलग्न",
              "मासिक संगीत सभा",
              "विद्यार्थी मंच सादरीकरण",
              "स्पर्धा व परीक्षा तयारी",
              "Male / Female स्वतंत्र बॅचेस",
              "Weekend Special Batches",
              "अनुभवी गुरुजनांचे मार्गदर्शन",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-4
                  rounded-[20px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-4
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    mt-0.5
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-yellow-400/10
                  "
                >
                  <CheckCircle2
                    size={18}
                    className="text-yellow-300"
                  />
                </div>

                <p
                  className="
                    text-sm
                    leading-7
                    text-zinc-300
                  "
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  </div>
</div>

          {/* ========================================================= */}
          {/* ACHIEVEMENTS */}
          {/* ========================================================= */}

          <div className="mt-36">
            <SectionTitle
              badge="Achievements"
              title="विद्यार्थ्यांची"
              highlight="उत्कृष्ट प्रगती"
              subtitle="संगीत, संस्कृती आणि स्टेज परफॉर्मन्समधील सुंदर यश."
              align="start"
              dark
            />

            <div
              className="
                mt-20
                grid
                gap-6
                md:grid-cols-2
                xl:grid-cols-4
              "
            >
              {achievements.map(
                (item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                      once: true,
                    }}
                    className="reveal-card"
                  >
                    <GlassCard className="group h-full p-7">
  <div className="relative z-10">
    
    {/* ICON */}

    <div
      className="
        mb-6
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-[22px]
        border
        border-yellow-300/20
        bg-yellow-400/10
        transition-all
        duration-500
        group-hover:scale-110
      "
    >
      <item.icon
        size={30}
        className="text-yellow-300"
      />
    </div>

    {/* TITLE */}

    <h3
      className="
        text-[1.45rem]
        font-black
        leading-tight
      "
    >
      {item.title}
    </h3>

    {/* DESC */}

    <p
      className="
        mt-4
        leading-7
        text-zinc-400
      "
    >
      {item.desc}
    </p>

    {/* BOTTOM */}

    <div
      className="
        mt-6
        flex
        items-center
        gap-2
        border-t
        border-white/10
        pt-5
        text-xs
        uppercase
        tracking-[0.18em]
        text-yellow-200
      "
    >
      <Sparkles size={13} />

      Student Development
    </div>
  </div>
</GlassCard>
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* ========================================================= */}
          {/* CTA */}
          {/* ========================================================= */}

         
<div className="mt-40">
  <motion.div
    initial={{
      opacity: 0,
      y: 80,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 1,
    }}
  >
    <GlassCard
      className="
        relative
        overflow-hidden
        px-6
        py-20
        md:px-12
        md:py-24
      "
    >
      {/* PREMIUM GLOWS */}

      <div
        className="
          absolute
          left-[-100px]
          top-[-100px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-yellow-400/10
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          right-[-120px]
          bottom-[-120px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-violet-500/10
          blur-[120px]
        "
      />

      <div className="relative z-10 text-center">
        {/* BADGE */}

        <div
          className="
            mb-12
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-yellow-300/20
            bg-yellow-400/10
            px-5
            py-3
            text-yellow-200
            
          "
        >
          <Star size={15} />

          Admissions Open • Limited Seats Available
        </div>

        {/* TITLE */}

        <h2
          className="
            marathi
            mx-auto
            max-w-5xl
            text-center
            text-[2.5rem]
            font-black
            leading-tight
            md:text-[4.5rem]
          "
        >
          आपल्या संगीत प्रवासाची

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
            आजच सुरुवात करा
          </span>
        </h2>

        {/* SUBTITLE */}

        <p
          className="
            mx-auto
            mt-7
            max-w-3xl
            text-center
            text-[15px]
            leading-8
            text-zinc-400
            md:text-lg
          "
        >
          भारतीय शास्त्रीय गायन, तबला,
          हार्मोनियम आणि सुगम संगीताचे
          अनुभवी गुरुजनांच्या मार्गदर्शनाखाली
          सखोल प्रशिक्षण घ्या. कला,
          संस्कार आणि आत्मविश्वास यांचा
          सुंदर संगम अनुभवण्यासाठी आजच
          प्रवेश निश्चित करा.
        </p>

        {/* TRUST POINTS */}

        <div
          className="
            mx-auto
            mt-10
            flex
            max-w-4xl
            flex-wrap
            items-center
            justify-center
            gap-3
          "
        >
          {[
            "गांधर्व परीक्षा मार्गदर्शन",
            "मासिक संगीत सभा",
            "स्टेज परफॉर्मन्स संधी",
            "Weekend Special Batches",
          ].map((item, index) => (
            <div
              key={index}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
                text-sm
                text-zinc-300
                backdrop-blur-xl
              "
            >
              {item}
            </div>
          ))}
        </div>

        {/* BUTTONS */}

        <div
          className="
            mt-12
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
          "
        >
          <PremiumButton
            variant="gold"
            size="lg"
          >
            Enroll Now
          </PremiumButton>

          <PremiumButton
            variant="glass"
            size="lg"
          >
            View Courses
          </PremiumButton>
        </div>

        {/* CONTACT */}

        <div
          className="
            mt-12
            flex
            flex-wrap
            items-center
            justify-center
            gap-5
            text-zinc-400
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <Phone size={16} />
            +91 9881776739
          </div>

          <div
            className="
              h-2
              w-2
              rounded-full
              bg-yellow-300
            "
          />

          <div>
            Wagholi, Pune
          </div>

          <div
            className="
              h-2
              w-2
              rounded-full
              bg-yellow-300
            "
          />

          <div>
            Offline & Online Classes
          </div>
        </div>

        {/* BOTTOM NOTE */}

        <p
          className="
            mt-8
            text-center
            text-sm
            text-zinc-500
          "
        >
          संत ज्ञानेश्वर संगीत विद्यालय —
          परंपरा, संस्कार आणि संगीत
          उत्कृष्टतेचा विश्वासार्ह प्रवास.
        </p>
      </div>
    </GlassCard>
  </motion.div>
</div>


        </div>
      </section>

    </main>
  );
};

export default Home;