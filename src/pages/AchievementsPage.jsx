// src/pages/AchievementsPage.jsx

import React, {
  memo,
  useMemo,
  useState,
  useEffect,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Trophy,
  Sparkles,
  Award,
  Star,
  Medal,
  Users,
  ArrowUpRight,
  CheckCircle2,
  Crown,
  ShieldCheck,
  Gem,
  Target,
  PlayCircle,
  X,
  ChevronRight,
  BadgeCheck,
  CalendarDays,
  Building2,
  GraduationCap,
  Mic2,
  Camera,
  Flame,
  Music2,
} from "lucide-react";


import practice from "../assets/images/practice2.jpeg"
import guru2 from "../assets/images/guru2.png"
import cert1 from "../assets/images/cert1.jpeg"
import AnilSir from "../assets/images/AnilSir.jpeg"

/* =========================================================
   PREMIUM DATA
========================================================= */

const heroStats = [
  {
    value: "26+",
    label: "Years Experience",
    icon: Trophy,
  },

  {
    value: "1500+",
    label: "Students",
    icon: Users,
  },

  {
    value: "2",
    label: "Campus Location",
    icon: Star,
  },

  {
    value: "100%",
    label: "Examination Guidance",
    icon: Award,
  },
];

const awardWall = [
  {
    title:
      "National Classical Music Excellence",
    year: "2025",
    type: "National Award",

    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1400&auto=format&fit=crop",

    description:
      "Recognized for excellence in Indian Classical Music education and cultural development.",
  },

  {
    title:
      "Best Cultural Academy Recognition",
    year: "2024",
    type: "Academy Award",

    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1400&auto=format&fit=crop",

    description:
      "Awarded for preserving traditional Indian music through education and performances.",
  },

  {
    title:
      "State Level Excellence Recognition",
    year: "2023",
    type: "State Award",

    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1400&auto=format&fit=crop",

    description:
      "Recognized for continuous contribution to music training and student development.",
  },

  {
    title:
      "Performance Excellence Award",
    year: "2022",
    type: "Festival Award",

    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1400&auto=format&fit=crop",

    description:
      "Honored for outstanding live stage performances and audience impact.",
  },

  {
    title:
      "Student Achievement Recognition",
    year: "2021",
    type: "Student Success",

    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1400&auto=format&fit=crop",

    description:
      "Multiple students achieved recognition in district and state competitions.",
  },

  {
    title:
      "Cultural Heritage Contribution",
    year: "2020",
    type: "Special Honor",

    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1400&auto=format&fit=crop",

    description:
      "Honored for contribution toward preservation of Indian musical heritage.",
  },
];

const timeline = [
  {
    year: "1999",
    icon: GraduationCap,
    title: "Gurukul Training",
    text: "Prof. R.N. Bhangade (Sangeet Alankar) under traditional Gurukul learning.",
  },

  {
    year: "2000+",
    icon: Music2,
    title: "Music Education Started",
    text: "Started guiding students in Classical Vocal Music.",
  },

  {
    year: "2010",
    icon: Building2,
    title: "Academy Expansion",
    text: "Music education expanded with structured examination guidance.",
  },

  {
    year: "2020",
    icon: Trophy,
    title: "Student Achievements",
    text: "Students participated and succeeded in multiple competitions.",
  },

  {
    year: "2026",
    icon: Crown,
    title: "26 Years Of Excellence",
    text: "Trusted music institution in Ahilyanagar & Wagholi Pune.",
  },
];

const hallOfFame = [
  {
    rank: "#01",
    name: "Ananya Kulkarni",

    achievement:
      "Winner - State Classical Vocal Competition",

    icon: Crown,
  },

  {
    rank: "#02",
    name: "Rohit Patil",

    achievement:
      "National Tabla Performance Recognition",

    icon: Medal,
  },

  {
    rank: "#03",
    name: "Meera Joshi",

    achievement:
      "Young Artist Excellence Award",

    icon: Star,
  },
];

const institutionHighlights = [
  {
    icon: Music2,
    title: "२६+ वर्षांची संगीत शिक्षणाची परंपरा",
    description:
      "गेली २६+ वर्षे दर्जेदार संगीत शिक्षण, संस्कार आणि अनुभवी मार्गदर्शनाद्वारे उत्कृष्ट कलाकार घडविण्याचे कार्य सातत्याने सुरू आहे.",
  },

  {
    icon: GraduationCap,
    title: "प्रारंभिक ते विशारद",
    description:
      "शास्त्रीय गायन, तबला आणि हार्मोनियम या विषयांमध्ये प्रारंभिक ते विशारद स्तरापर्यंत संपूर्ण परीक्षा आधारित प्रशिक्षण व मार्गदर्शन.",
  },

  {
    icon: Building2,
    title: "गांधर्व महाविद्यालय संलग्न",
    description:
      "अखिल भारतीय गांधर्व महाविद्यालयाशी संलग्न अधिकृत परीक्षा केंद्र तसेच डॉ. वसंतराव गोसावी (केंद्र क्र. १०५३) यांच्या मार्गदर्शनाखाली परीक्षा सुविधा उपलब्ध.",
  },

  {
    icon: Mic2,
    title: "मासिक संगीत सभा",
    description:
      "विद्यार्थ्यांमध्ये आत्मविश्वास, मंच सादरीकरण कौशल्य आणि कलागुणांचा विकास करण्यासाठी नियमित संगीत सभा व सादरीकरणाचे आयोजन.",
  },

  {
    icon: Users,
    title: "स्वतंत्र प्रशिक्षण बॅचेस",
    description:
      "विद्यार्थ्यांच्या सोयीसाठी वयोगटानुसार तसेच मुला-मुलींसाठी स्वतंत्र आणि सुयोग्य प्रशिक्षण बॅचेसची सुविधा.",
  },

  {
    icon: Trophy,
    title: "स्पर्धा परीक्षा मार्गदर्शन",
    description:
      "राज्यस्तरीय, जिल्हास्तरीय तसेच विविध सांस्कृतिक आणि संगीत स्पर्धांमध्ये सहभागी होण्यासाठी विशेष प्रशिक्षण व मार्गदर्शन.",
  },

  {
    icon: Award,
    title: "अनुभवी गुरुंचे मार्गदर्शन",
    description:
      "गुरुवर्य पी. एस. गायकवाड सर तसेच संगीत अलंकार गुरुवर्य अनिल डोळे सर यांच्या अनुभवी मार्गदर्शनाखाली दर्जेदार संगीत शिक्षण.",
  },

  {
    icon: Star,
    title: "कलाकार घडविण्याचे ध्येय",
    description:
      "केवळ संगीत शिकविणे नव्हे, तर प्रत्येक विद्यार्थ्यामध्ये आत्मविश्वास, संस्कार, सादरीकरण कौशल्य आणि उत्कृष्ट कलाकार म्हणून घडविणे हेच आमचे ध्येय आहे.",
  },
];

const recognitions = [
  "२६+ वर्षांची संगीत शिक्षणाची गौरवशाली परंपरा",

  "पारंपरिक गुरुकुल पद्धतीवर आधारित शास्त्रीय संगीत प्रशिक्षण",

  "अधिकृत संलग्न परीक्षा केंद्र",

  "प्रारंभिक ते विशारद प्रमाणपत्र परीक्षांसाठी संपूर्ण मार्गदर्शन",

  "शास्त्रीय गायन, तबला व हार्मोनियमचे अनुभवी शिक्षक",

  "मासिक विद्यार्थी संगीत सभा व मंच सादरीकरणाची संधी",

  "राज्यस्तरीय व सांस्कृतिक स्पर्धांमध्ये सहभाग",

  "विद्यार्थ्यांसाठी स्वतंत्र प्रशिक्षण बॅचेस",

  "शनिवार-रविवार विशेष प्रशिक्षण वर्ग",

  "ज्येष्ठ संगीत गुरुंचे अनुभवी मार्गदर्शन",

  "भारतीय शास्त्रीय संगीत परंपरेचे जतन व संवर्धन",

  "भावी उत्कृष्ट कलाकार घडविण्याचा संकल्प",
];

const galleryImages = [
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1400",
  guru2,
  cert1,
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1400",
  practice,
  "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1400",
];

/* =========================================================
   ANIMATIONS
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

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.7,
    },
  },
};

/* =========================================================
   SECTION HEADER
========================================================= */

const SectionHeader = memo(
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
   PREMIUM MODAL
========================================================= */

const AchievementModal = ({
  selected,
  setSelected,
}) => {
  useEffect(() => {
    document.body.style.overflow =
      selected ? "hidden" : "auto";

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [selected]);

  return (
    <AnimatePresence>
      {selected && (
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
          onClick={() =>
            setSelected(null)
          }
          className="
            fixed
            inset-0
            z-[999999]
            flex
            items-center
            justify-center
            bg-black/90
            p-4
            backdrop-blur-2xl
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
            className="
              relative
              w-full
              max-w-5xl
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
              bg-[#0b1020]
            "
          >
            <button
              onClick={() =>
                setSelected(null)
              }
              className="
                absolute
                right-5
                top-5
                z-50
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-black/60
              "
            >
              <X size={18} />
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="
                h-[400px]
                w-full
                object-cover
              "
            />

            <div className="p-8">
              <div
                className="
                  inline-flex
                  rounded-full
                  bg-yellow-400/10
                  px-4
                  py-2
                  text-xs
                  text-yellow-300
                "
              >
                {selected.type}
              </div>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-black
                "
              >
                {selected.title}
              </h2>

              <p
                className="
                  mt-5
                  leading-8
                  text-zinc-400
                "
              >
                {selected.description}
              </p>
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

const AchievementsPage = () => {
  const [selected, setSelected] =
    useState(null);

  const stats = useMemo(
    () => heroStats,
    []
  );

  return (
    <div
      className="
        relative
        overflow-hidden
        bg-[#050816]
        text-white
      "
    >
      {/* =========================================================
         PREMIUM BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-[-200px]
            top-[-150px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-yellow-400/10
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            right-[-200px]
            top-[20%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-violet-500/10
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            bottom-[-200px]
            left-[20%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-amber-400/10
            blur-[180px]
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

      {/* =========================================================
         HERO SECTION
      ========================================================= */}

      <section
        className="
          relative
          px-5
          pb-24
          pt-14
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
            gap-16
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
                px-5
                py-2.5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-yellow-200
              "
            >
              <Sparkles size={12} />
              Excellence Since 2016
            </div>

            <h1
  className="
    text-[3rem]
    font-black
    leading-[0.95]
    tracking-tight
    sm:text-6xl
    md:text-7xl
  "
>
  Sant Dnyaneshwar

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
    Sangeet Vidyalaya
  </span>

  <span className="block text-2xl md:text-3xl mt-4 text-zinc-300">
    26 Years Of Musical Excellence
  </span>
</h1>

            <p
              className="
                mt-7
                max-w-xl
                text-[15px]
                leading-8
                text-zinc-400
              "
            >
            Sant Dnyaneshwar Sangeet Vidyalaya,
  Ahilyanagar & Wagholi Pune, has been
  nurturing future artists for over 26 years.

  Affiliated to Akhil Bharatiya Gandharva
  Mahavidyalaya and recognized examination
  center under Dr. Vasantrao Gosavi (1053),
  offering Classical Vocal, Tabla and
  Harmonium training from Prarambhik to
  Visharad level.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                className="
                  rounded-full
                  bg-yellow-400
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-black
                "
              >
                Explore Journey
              </button>

              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.05]
                  px-7
                  py-3.5
                "
              >
                <PlayCircle size={16} />
                Watch Story
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[42px]
                border
                border-yellow-400/10
                bg-gradient-to-b
                from-white/[0.08]
                to-white/[0.02]
                p-8
                backdrop-blur-3xl
              "
            >
              <Trophy
                size={120}
                className="
                  mx-auto
                  text-yellow-300
                "
              />

              <div className="mt-10 grid gap-4">
                {[
                  "Classical Vocal",
                  "State Recognition",
                  "Certified Excellence",
                  "Visharad Training",
                  "Monthly Music Sabha",
                  "Separate Batches"
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/20
                      p-4
                    "
                  >
                    <BadgeCheck
                      size={18}
                      className="text-yellow-300"
                    />

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
         FLOATING STATS
      ========================================================= */}

      <section className="px-5 md:px-10 lg:px-16">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-5
            md:grid-cols-4
          "
        >
          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                }}
                className="
                  rounded-[36px]
                  border
                  border-white/10
                  bg-gradient-to-b
                  from-white/[0.08]
                  to-white/[0.02]
                  p-7
                  shadow-[0_20px_60px_rgba(250,204,21,0.05)]
                "
              >
                <Icon
                  className="
                    text-yellow-300
                  "
                />

                <h3
                  className="
                    mt-5
                    text-4xl
                    font-black
                  "
                >
                  {item.value}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
         AWARD WALL
      ========================================================= */}

      {/* <section className="px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Award Wall"
            title="Recognition Gallery"
            text="Prestigious awards and honors earned through dedication and excellence."
          />

          <div className="columns-1 gap-6 md:columns-3">
            {awardWall.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                }}
                className="
                  mb-6
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  break-inside-avoid
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-[320px]
                    w-full
                    object-cover
                  "
                />

                <div className="p-6">
                  <div
                    className="
                      inline-flex
                      rounded-full
                      bg-yellow-400/10
                      px-4
                      py-1.5
                      text-xs
                      text-yellow-300
                    "
                  >
                    {item.type}
                  </div>

                  <h3
                    className="
                      mt-4
                      text-2xl
                      font-bold
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7
                      text-zinc-400
                    "
                  >
                    {item.description}
                  </p>

                  <button
                    onClick={() =>
                      setSelected(item)
                    }
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      text-yellow-300
                    "
                  >
                    View Details

                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}


      <section className="px-5 py-24 md:px-10 lg:px-16">
  <div className="mx-auto max-w-7xl">

    <div className="mx-auto mb-16 max-w-3xl text-center">
  <span
    className="
      inline-flex
      rounded-full
      border
      border-yellow-400/20
      bg-yellow-400/10
      px-4
      py-2
      text-xs
      font-semibold
      uppercase
      tracking-[0.2em]
      text-yellow-300
    "
  >
    Our Strengths
  </span>

  <h2
    className="
      mt-5
      text-4xl
      font-black
      md:text-6xl
    "
  >
    Building Artists Since <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">26 Years</span> 
  </h2>

  <p
    className="
      mt-5
      text-zinc-400
      leading-8
    "
  >
    Classical Vocal, Tabla and Harmonium training
    from Prarambhik to Visharad level, experienced
    guidance, monthly music gatherings, student
    performances, separate batches and examination
    preparation under one roof.
  </p>
</div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {institutionHighlights.map(
        (item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[34px]
                border
                border-white/10
                bg-gradient-to-b
                from-white/[0.08]
                to-white/[0.03]
                p-7
                backdrop-blur-xl
              "
            >
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-28
                  w-28
                  rounded-full
                  bg-yellow-400/10
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-yellow-400/20
                "
              />

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-yellow-400/10
                  text-yellow-300
                "
              >
                <Icon size={28} />
              </div>

              <h3
                className="
                  mt-6
                  text-xl
                  font-bold
                  leading-snug
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-zinc-400
                "
              >
                {item.description}
              </p>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-yellow-300
                "
              >
                Learn More

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </div>
            </motion.div>
          );
        }
      )}
    </div>
  </div>
</section>

      {/* =========================================================
         TIMELINE
      ========================================================= */}

      <section className="px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            badge="Journey"
            title="Milestone Timeline"
            text="A timeline of growth, recognition and achievements."
          />

          <div className="relative">
            <div
              className="
                absolute
                left-1/2
                top-0
                hidden
                h-full
                w-px
                bg-yellow-400/20
                md:block
              "
            />

          <div className="relative space-y-12">
  {timeline.map((item, index) => (
    <motion.div
      key={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`
        relative
        flex
        items-center
        ${
          index % 2 === 0
            ? "md:justify-start"
            : "md:justify-end"
        }
      `}
    >
      {/* Timeline Dot */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          hidden
          h-5
          w-5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border-4
          border-[#050816]
          bg-yellow-400
          shadow-[0_0_30px_rgba(250,204,21,0.8)]
          md:block
        "
      />

      {/* Connecting Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          hidden
          h-24
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-yellow-400/50
          to-transparent
          md:block
        "
      />

      {/* Card */}

      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          group
          relative
          w-full
          overflow-hidden
          rounded-[34px]
          border
          border-yellow-400/10
          bg-gradient-to-b
          from-white/[0.08]
          to-white/[0.03]
          p-8
          backdrop-blur-2xl
          md:w-[46%]
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-yellow-400/5
            via-transparent
            to-yellow-400/5
            opacity-0
            transition
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Year */}

        <div
          className="
            absolute
            right-6
            top-4
            text-6xl
            font-black
            text-yellow-400/10
          "
        >
          {item.year}
        </div>

        {/* Small Badge */}

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
            uppercase
            tracking-[0.18em]
            text-yellow-300
          "
        >
          Milestone
        </div>

        {/* Title */}

        <h3
          className="
            mt-6
            text-3xl
            font-black
            leading-tight
          "
        >
          {item.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-4
            leading-8
            text-zinc-400
          "
        >
          {item.text}
        </p>

        {/* Footer */}

        <div
          className="
            mt-6
            flex
            items-center
            gap-2
            text-sm
            text-yellow-300
          "
        >
          Explore Milestone

          <ChevronRight size={16} />
        </div>
      </motion.div>
    </motion.div>
  ))}
</div>
          </div>
        </div>
      </section>

      {/* =========================================================
         HALL OF FAME
      ========================================================= */}

      {/* <section className="px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Elite Students"
            title="Hall Of Fame"
            text="Celebrating our brightest stars."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {hallOfFame.map(
              (student, i) => {
                const Icon =
                  student.icon;

                return (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -10,
                    }}
                    className="
                      relative
                      overflow-hidden
                      rounded-[36px]
                      border
                      border-yellow-400/10
                      bg-gradient-to-b
                      from-white/[0.08]
                      to-white/[0.02]
                      p-8
                    "
                  >
                    <div
                      className="
                        absolute
                        right-5
                        top-5
                        text-6xl
                        font-black
                        text-yellow-400/10
                      "
                    >
                      {student.rank}
                    </div>

                    <Icon
                      size={42}
                      className="
                        text-yellow-300
                      "
                    />

                    <h3
                      className="
                        mt-6
                        text-2xl
                        font-bold
                      "
                    >
                      {student.name}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-zinc-400
                      "
                    >
                      {
                        student.achievement
                      }
                    </p>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </section> */}

      {/* =========================================================
         RECOGNITIONS
      ========================================================= */}

      <section className="px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Recognition"
            title="Trusted Excellence"
            text="Recognitions earned through years of dedication."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {recognitions.map(
              (item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-5
                  "
                >
                  <CheckCircle2
                    size={18}
                    className="
                      text-yellow-300
                    "
                  />

                  {item}
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
         GALLERY
      ========================================================= */}

      <section className="px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Moments"
            title="Achievement Gallery"
            text="Memorable moments captured across performances and award ceremonies."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {galleryImages.map(
              (img, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                    overflow-hidden
                    rounded-[32px]
                  "
                >
                  <img
                    src={img}
                    alt=""
                    className="
                      h-[300px]
                      w-full
                      object-cover
                    "
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
         PREMIUM CTA
      ========================================================= */}

      <section className="px-5 pb-28 md:px-10 lg:px-16">
  <div
    className="
      relative
      mx-auto
      max-w-7xl
      overflow-hidden
      rounded-[50px]
      border
      border-yellow-400/15
      bg-gradient-to-br
      from-yellow-400/15
      via-white/[0.05]
      to-violet-500/10
      p-10
      text-center
      md:p-16
    "
  >
    {/* Glow */}

    <div
      className="
        absolute
        left-0
        top-0
        h-72
        w-72
        rounded-full
        bg-yellow-400/10
        blur-[120px]
      "
    />

    <div
      className="
        absolute
        bottom-0
        right-0
        h-72
        w-72
        rounded-full
        bg-violet-500/10
        blur-[120px]
      "
    />

    <div className="relative z-10">
      <div
        className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          border
          border-yellow-400/20
          bg-yellow-400/10
        "
      >
        <Crown
          size={42}
          className="text-yellow-300"
        />
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
          text-xs
          uppercase
          tracking-[0.18em]
          text-yellow-300
        "
      >
        Sant Dnyaneshwar Sangeet Vidyalaya
      </div>

      <h2
        className="
          mx-auto
          mt-8
          max-w-4xl
          text-4xl
          font-black
          leading-tight
          md:text-6xl
        "
      >
        कला हेच जीवन
        <br />

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
          हेच विद्यालयांचे ब्रीद
        </span>
      </h2>

      <p
        className="
          mx-auto
          mt-8
          max-w-3xl
          text-[15px]
          leading-8
          text-zinc-300
        "
      >
        येथे केवळ संगीत शिकवले जात नाही,
        तर विद्यार्थ्यांच्या कलागुणांना योग्य दिशा
        देऊन भविष्यातील कलाकार घडवले जातात.

        शास्त्रीय गायन, तबला, हार्मोनियम,
        सुगम संगीत तसेच रंगमंचीय सादरीकरणाच्या
        माध्यमातून विद्यार्थ्यांचा सर्वांगीण विकास
        घडवला जातो.
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
            transition-all
            hover:scale-105
          "
        >
          प्रवेशासाठी संपर्क करा
        </button>

        <button
          className="
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            px-8
            py-4
            font-medium
            backdrop-blur-xl
          "
        >
          अभ्यासक्रम पहा
        </button>
      </div>

      <div
        className="
          mt-12
          flex
          flex-wrap
          justify-center
          gap-8
          text-sm
          text-zinc-400
        "
      >
        <span>26+ वर्षांचा अनुभव</span>

        <span>•</span>

        <span>प्रारंभिक ते विशारद</span>

        <span>•</span>

        <span>गांधर्व महाविद्यालय संलग्न</span>
      </div>
    </div>
  </div>
</section>

      <AchievementModal
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default memo(
  AchievementsPage
);