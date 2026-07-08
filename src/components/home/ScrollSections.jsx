import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";

import {
  Sparkles,
  Mic2,
  Disc3,
  Phone,
  ArrowUpRight,
  CheckCircle2,
  Star,
  GraduationCap,
  ShieldCheck,
  Award,
  Users,
  BookOpen,
} from "lucide-react";

/* =========================================================
   OPTIMIZED PREMIUM ANIMATIONS
========================================================= */

const viewport = {
  once: true,
  amount: 0.2,
};

const transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,
    transition,
  },
};

const fadeScale = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },

  show: {
    opacity: 1,
    scale: 1,
    transition,
  },
};

/* =========================================================
   PREMIUM STYLES
========================================================= */

const sectionClass = `
  relative
  flex
  min-h-screen
  items-center
  overflow-hidden
  px-6
  py-24
  md:px-14
  lg:px-24
`;

const glass = `
  border border-white/10
  bg-white/[0.04]
  backdrop-blur-xl
  shadow-[0_20px_70px_rgba(0,0,0,0.28)]
`;

const premiumCard = `
  group
  relative
  overflow-hidden
  rounded-[32px]
  border border-white/10
  bg-gradient-to-br
  from-white/[0.06]
  via-white/[0.03]
  to-transparent
  p-6
  backdrop-blur-xl
  transition-all
  duration-500
  hover:-translate-y-2
  hover:border-yellow-400/20
`;

const glow =
  "absolute rounded-full blur-[120px] opacity-30";

/* =========================================================
   STATIC DATA
========================================================= */

const stats = [
  {
    value: "15+",
    label: "Years Experience",
  },

  {
    value: "500+",
    label: "Students Trained",
  },

  {
    value: "50+",
    label: "Live Performances",
  },
];

const vocalFeatures = [
  "Raag Training",
  "Voice Culture",
  "Bhajan Practice",
  "Stage Performance",
];

const achievements = [
  {
    title: "Stage Performances",

    desc: "Students confidently perform in concerts and cultural events.",
  },

  {
    title: "Music Competitions",

    desc: "Professional guidance for school and state-level competitions.",
  },

  {
    title: "Classical Examinations",

    desc: "Preparation for Gandharva and classical music examinations.",
  },

  {
    title: "Cultural Programs",

    desc: "Participation in devotional and traditional music events.",
  },
];

/* =========================================================
   SMALL REUSABLE COMPONENTS
========================================================= */

const SectionGlow = memo(() => (
  <>
    <div
      className={`
        ${glow}
        left-[-180px]
        top-[5%]
        h-[420px]
        w-[420px]
        bg-yellow-500/15
      `}
    />

    <div
      className={`
        ${glow}
        right-[-180px]
        top-[35%]
        h-[400px]
        w-[400px]
        bg-orange-500/10
      `}
    />

    <div
      className={`
        ${glow}
        bottom-[-180px]
        left-1/2
        h-[420px]
        w-[420px]
        -translate-x-1/2
        bg-purple-500/10
      `}
    />
  </>
));

SectionGlow.displayName = "SectionGlow";

const PremiumButton = memo(
  ({
    children,
    primary = false,
  }) => {
    if (primary) {
      return (
        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            group
            flex
            items-center
            gap-3
            rounded-full
            bg-gradient-to-r
            from-yellow-400
            to-orange-300
            px-8
            py-4
            text-base
            font-bold
            text-black
            shadow-[0_20px_50px_rgba(234,179,8,0.25)]
            transition-all
            duration-300
          "
        >
          {children}

          <ArrowUpRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
            "
          />
        </motion.button>
      );
    }

    return (
      <motion.button
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          rounded-full
          border border-white/10
          bg-white/[0.05]
          px-8
          py-4
          text-base
          font-semibold
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:bg-white/[0.08]
        "
      >
        {children}
      </motion.button>
    );
  }
);

PremiumButton.displayName = "PremiumButton";

/* =========================================================
   MAIN COMPONENT
========================================================= */

const ScrollSections = () => {
  const memoStats = useMemo(() => stats, []);
  const memoAchievements = useMemo(
    () => achievements,
    []
  );

  return (
    <div
      className="
        relative
        z-20
        overflow-hidden
        bg-[#050816]
        text-white
      "
    >
      {/* ===================================================== */}
      {/* OPTIMIZED BACKGROUND */}
      {/* ===================================================== */}

      <SectionGlow />

      {/* ===================================================== */}
      {/* HERO SECTION */}
      {/* ===================================================== */}

      <section className={sectionClass}>
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1450px]
            items-center
            gap-20
            lg:grid-cols-2
          "
        >
          {/* LEFT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative z-20"
          >
            {/* BADGE */}

            <div
              className="
                mb-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border border-yellow-400/20
                bg-yellow-400/10
                px-5
                py-3
                text-sm
                font-semibold
                text-yellow-200
                backdrop-blur-xl
              "
            >
              <Sparkles size={15} />

              Indian Classical Music Academy
            </div>

            {/* TITLE */}

            <div className="space-y-5">
              <h2
                className="
                  marathi
                  text-3xl
                  font-bold
                  text-yellow-300
                  md:text-5xl
                "
              >
                “कला हेच जीवन”
              </h2>

              <h1
                className="
                  marathi
                  text-5xl
                  font-black
                  leading-[0.95]
                  tracking-tight
                  md:text-7xl
                  lg:text-[6rem]
                "
              >
                संत ज्ञानेश्वर
                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-yellow-200
                    via-yellow-400
                    to-orange-300
                    bg-clip-text
                    text-transparent
                  "
                >
                  संगीत विद्यालय
                </span>
              </h1>
            </div>

            {/* TEXT */}

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-relaxed
                text-zinc-400
                md:text-xl
              "
            >
              भारतीय शास्त्रीय संगीत,
              गायन आणि वादन यांचे
              पारंपरिक तसेच आधुनिक
              पद्धतीने सखोल प्रशिक्षण
              देणारे सांस्कृतिक संगीत शिक्षण केंद्र.
            </p>

            {/* STATS */}

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {memoStats.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -5,
                  }}
                  className={premiumCard}
                >
                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      h-[110px]
                      w-[110px]
                      rounded-full
                      bg-yellow-400/10
                      blur-[60px]
                    "
                  />

                  <div className="relative z-10">
                    <h3
                      className="
                        text-4xl
                        font-black
                        text-yellow-300
                      "
                    >
                      {item.value}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        text-zinc-400
                      "
                    >
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* BUTTONS */}

            <div className="mt-12 flex flex-wrap gap-5">
              <PremiumButton primary>
                Admissions Open
              </PremiumButton>

              <PremiumButton>
                Explore Courses
              </PremiumButton>
            </div>
          </motion.div>

          {/* EMPTY FOR VEENA */}

          <div />
        </div>
      </section>

      {/* ===================================================== */}
      {/* COURSES SECTION */}
      {/* ===================================================== */}

      <section className={sectionClass}>
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1450px]
            items-center
            gap-20
            lg:grid-cols-2
          "
        >
          <div />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-8"
          >
            {/* TITLE */}

            <div>
              <p
                className="
                  mb-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-yellow-300
                "
              >
                Professional Music Training
              </p>

              <h2
                className="
                  text-5xl
                  font-black
                  leading-tight
                  md:text-6xl
                "
              >
                संगीत शिक्षणाची
                <span className="text-yellow-300">
                  {" "}
                  समृद्ध परंपरा
                </span>
              </h2>
            </div>

            {/* VOCAL */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              className={`
                relative
                overflow-hidden
                rounded-[40px]
                p-8
                md:p-10
                ${glass}
              `}
            >
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-[180px]
                  w-[180px]
                  rounded-full
                  bg-yellow-400/10
                  blur-[90px]
                "
              />

              <div className="relative z-10">
                <div className="mb-8 flex items-start gap-5">
                  <div
                    className="
                      flex
                      h-18
                      w-18
                      items-center
                      justify-center
                      rounded-3xl
                      border border-yellow-400/20
                      bg-yellow-400/10
                    "
                  >
                    <Mic2
                      size={34}
                      className="text-yellow-300"
                    />
                  </div>

                  <div>
                    <h2
                      className="
                        text-3xl
                        font-black
                        md:text-4xl
                      "
                    >
                      गायन प्रशिक्षण
                    </h2>

                    <p
                      className="
                        mt-2
                        text-lg
                        font-medium
                        text-yellow-300
                      "
                    >
                      Classical Vocal Learning
                    </p>
                  </div>
                </div>

                <p
                  className="
                    mb-8
                    text-lg
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  रागदारी संगीत,
                  स्वर साधना,
                  भजन गायन,
                  स्पर्धा तयारी
                  आणि स्टेज परफॉर्मन्सचे
                  पारंपरिक प्रशिक्षण.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  {vocalFeatures.map((item, i) => (
                    <div
                      key={i}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border border-white/10
                        bg-white/[0.04]
                        px-5
                        py-4
                      "
                    >
                      <CheckCircle2
                        size={18}
                        className="text-yellow-300"
                      />

                      <span
                        className="
                          font-medium
                          text-zinc-200
                        "
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* INSTRUMENT */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              className={`
                relative
                overflow-hidden
                rounded-[40px]
                p-8
                md:p-10
                ${glass}
              `}
            >
              <div
                className="
                  absolute
                  left-0
                  bottom-0
                  h-[180px]
                  w-[180px]
                  rounded-full
                  bg-orange-400/10
                  blur-[90px]
                "
              />

              <div className="relative z-10">
                <div className="mb-8 flex items-start gap-5">
                  <div
                    className="
                      flex
                      h-18
                      w-18
                      items-center
                      justify-center
                      rounded-3xl
                      border border-orange-400/20
                      bg-orange-400/10
                    "
                  >
                    <Disc3
                      size={34}
                      className="text-orange-300"
                    />
                  </div>

                  <div>
                    <h2
                      className="
                        text-3xl
                        font-black
                        md:text-4xl
                      "
                    >
                      वादन प्रशिक्षण
                    </h2>

                    <p
                      className="
                        mt-2
                        text-lg
                        font-medium
                        text-orange-300
                      "
                    >
                      Instrumental Learning
                    </p>
                  </div>
                </div>

                <p
                  className="
                    text-lg
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  तबला, हार्मोनियम
                  आणि भारतीय वाद्यांचे
                  सखोल प्रशिक्षण
                  अनुभवी मार्गदर्शनाखाली.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* GURU SECTION */}
      {/* ===================================================== */}

      <section className={sectionClass}>
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1450px]
            items-center
            gap-20
            lg:grid-cols-2
          "
        >
          <motion.div
            variants={fadeScale}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className={`
              relative
              overflow-hidden
              rounded-[42px]
              p-10
              md:p-14
              ${glass}
            `}
          >
            <div
              className="
                absolute
                right-0
                top-0
                h-[220px]
                w-[220px]
                rounded-full
                bg-yellow-400/10
                blur-[110px]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  mb-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border border-yellow-400/20
                  bg-yellow-400/10
                  px-5
                  py-3
                  text-yellow-200
                "
              >
                <GraduationCap size={18} />

                Experienced Music Mentor
              </div>

              <h2
                className="
                  marathi
                  mb-5
                  text-5xl
                  font-black
                  text-yellow-300
                "
              >
                मार्गदर्शक
              </h2>

              <h3
                className="
                  mb-5
                  text-4xl
                  font-black
                  leading-tight
                  md:text-5xl
                "
              >
                प्रा. गायकवाड पी. एस.
              </h3>

              <p
                className="
                  mb-5
                  text-2xl
                  font-semibold
                  text-yellow-300
                "
              >
                (संगीत विशारद)
              </p>

              <p
                className="
                  text-lg
                  leading-relaxed
                  text-zinc-400
                "
              >
                भारतीय शास्त्रीय संगीत
                परंपरेचा वारसा जपत,
                विद्यार्थ्यांना उच्च दर्जाचे
                संगीत शिक्षण व सांस्कृतिक मूल्ये
                दिली जातात.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  {
                    icon: Award,
                    text: "15+ Years Experience",
                  },

                  {
                    icon: BookOpen,
                    text: "Classical Training",
                  },

                  {
                    icon: Users,
                    text: "Professional Guidance",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.04]
                      px-5
                      py-4
                      font-medium
                    "
                  >
                    <item.icon
                      size={18}
                      className="text-yellow-300"
                    />

                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div />
        </div>
      </section>

      {/* ===================================================== */}
      {/* ACHIEVEMENTS */}
      {/* ===================================================== */}

      <section className={sectionClass}>
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1450px]
            items-center
            gap-20
            lg:grid-cols-2
          "
        >
          <div />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className={`
              relative
              overflow-hidden
              rounded-[42px]
              p-10
              md:p-14
              ${glass}
            `}
          >
            <div
              className="
                absolute
                left-0
                top-0
                h-[220px]
                w-[220px]
                rounded-full
                bg-yellow-400/10
                blur-[110px]
              "
            />

            <div className="relative z-10">
              <div className="mb-10 flex items-center gap-5">
                <div
                  className="
                    flex
                    h-18
                    w-18
                    items-center
                    justify-center
                    rounded-3xl
                    bg-yellow-400/10
                    border border-yellow-400/20
                  "
                >
                  <Star
                    size={34}
                    className="text-yellow-300"
                  />
                </div>

                <div>
                  <h2
                    className="
                      text-4xl
                      font-black
                      md:text-5xl
                    "
                  >
                    Achievements
                  </h2>

                  <p
                    className="
                      mt-2
                      text-lg
                      text-yellow-300
                    "
                  >
                    Student Growth & Excellence
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {memoAchievements.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      rounded-3xl
                      border border-white/10
                      bg-white/[0.04]
                      p-6
                    "
                  >
                    <ShieldCheck
                      size={22}
                      className="
                        mb-4
                        text-yellow-300
                      "
                    />

                    <h3
                      className="
                        mb-3
                        text-xl
                        font-bold
                      "
                    >
                      {item.title}
                    </h3>

                    <p className="text-zinc-400">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* CONTACT */}
      {/* ===================================================== */}

      <section className={sectionClass}>
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            variants={fadeScale}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="
              relative
              overflow-hidden
              rounded-[50px]
              border border-yellow-400/20
              bg-gradient-to-br
              from-yellow-400/10
              via-white/[0.04]
              to-orange-400/10
              p-10
              text-center
              backdrop-blur-xl
              md:p-16
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-0
                h-[320px]
                w-[320px]
                -translate-x-1/2
                rounded-full
                bg-yellow-400/15
                blur-[120px]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  mx-auto
                  mb-8
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  border border-yellow-400/20
                  bg-yellow-400/10
                "
              >
                <Phone
                  size={40}
                  className="text-yellow-300"
                />
              </div>

              <h2
                className="
                  mb-6
                  text-5xl
                  font-black
                  md:text-7xl
                "
              >
                Admissions Open
              </h2>

              <p
                className="
                  mx-auto
                  mb-10
                  max-w-3xl
                  text-lg
                  leading-relaxed
                  text-zinc-300
                  md:text-xl
                "
              >
                शनिवार आणि रविवार विशेष क्लासेस उपलब्ध.
                भारतीय शास्त्रीय संगीताच्या
                सुंदर प्रवासाची सुरुवात आजच करा.
              </p>

              <div
                className="
                  mb-5
                  text-5xl
                  font-black
                  text-yellow-300
                  md:text-7xl
                "
              >
                9881776739
              </div>

              <div
                className="
                  mb-12
                  text-lg
                  text-zinc-400
                "
              >
                Shop No. 9, Yashwantnagar,
                Bakori Road, Wagholi, Pune
              </div>

              <PremiumButton primary>
                Contact Now
              </PremiumButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default memo(ScrollSections);