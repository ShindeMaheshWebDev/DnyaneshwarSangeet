import React from "react";
import { motion } from "framer-motion";

import {
  Music2,
  Phone,
  MapPin,
  Mail,
  ArrowUpRight,
  Sparkles,
  Disc3,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

/* =========================================================
   DATA
========================================================= */

// const footerLinks = [
//   {
//     title: "Quick Links",
//     items: [
//       "Home",
//       "Courses",
//       "About Guru",
//       "Gallery",
//       "Achievements",
//       "Contact",
//     ],
//   },

//   {
//     title: "Music Classes",
//     items: [
//       "Classical Singing",
//       "Tabla Training",
//       "Harmonium",
//       "Bhajan Practice",
//       "Raag Training",
//       "Stage Preparation",
//     ],
//   },
// ];




const footerLinks = [
  {
    title: "Quick Links",
    items: [
      { name: "Home", path: "/" },
      { name: "Courses", path: "/courses" },
      { name: "About Guru", path: "/guru" },
      { name: "Gallery", path: "/gallery" },
      { name: "Achievements", path: "/achievements" },
      { name: "Contact", path: "/contact" },
    ],
  },

  {
  title: "Music Classes",
  items: [
    {
      name: "शास्त्रीय गायन",
      path: "/courses/classical-vocal",
    },

    {
      name: "तबला प्रशिक्षण",
      path: "/courses/tabla",
    },

    {
      name: "हार्मोनियम",
      path: "/courses/harmonium",
    },

    {
      name: "सुगम संगीत",
      path: "/courses/sugam-sangeet",
    },

    {
      name: "गांधर्व परीक्षा",
      path: "/courses/gandharva-exam",
    },

    {
      name: "मंच सादरीकरण",
      path: "/courses/performance",
    },
  ],
},
];



const socialLinks = [
  {
    icon: FaInstagram,
    href: "#",
  },

  {
    icon: FaFacebookF,
    href: "#",
  },

  {
    icon: FaYoutube,
    href: "#",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t border-white/10
        bg-[#040816]
        text-white
      "
    >
      {/* ========================================================= */}
      {/* PREMIUM BACKGROUND */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#1f293733_0%,#040816_65%)]
        "
      />

      {/* GOLD GLOW */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-yellow-400/10
          blur-[140px]
        "
      />

      {/* PURPLE */}

      <div
        className="
          absolute
          right-[-120px]
          top-[20%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-fuchsia-500/10
          blur-[130px]
        "
      />

      {/* CYAN */}

      <div
        className="
          absolute
          bottom-[-100px]
          left-[-100px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-cyan-400/10
          blur-[120px]
        "
      />

      {/* GRID */}

      <div
        className="
          absolute inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "110px 110px",
        }}
      />

      {/* VIGNETTE */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]
        "
      />

      {/* ========================================================= */}
      {/* CONTENT */}
      {/* ========================================================= */}

      <div className="relative z-10">
        {/* ========================================================= */}
        {/* TOP CTA */}
        {/* ========================================================= */}

        <section className="px-6 pb-10 pt-24 md:px-14 lg:px-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[42px]
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
            "
          >
            {/* INNER LIGHT */}

            <div
              className="
                absolute
                left-1/2
                top-0
                h-[320px]
                w-[520px]
                -translate-x-1/2
                rounded-full
                bg-yellow-400/10
                blur-[120px]
              "
            />

            {/* SHINE */}

            <div
              className="
                absolute
                inset-0
                bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)]
              "
            />

            <div
              className="
                relative z-10
                grid
                items-center
                gap-14
                p-8
                md:p-14
                lg:grid-cols-[1.1fr_0.9fr]
              "
            >
              {/* LEFT */}

              <div>
                {/* BADGE */}

                <div
                  className="
                    mb-6
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
                  <Sparkles size={16} />

                  Admissions Open 2026
                </div>

                {/* TITLE */}

                <h2
                  className="
                    marathi
                    text-4xl
                    font-black
                    leading-tight
                    text-white
                    md:text-6xl
                  "
                >
                  भारतीय शास्त्रीय
                  <span className="text-yellow-300">
                    {" "}
                    संगीताचा
                  </span>
                  <br />
                  सुंदर प्रवास सुरू करा
                </h2>

                {/* TEXT */}

                <p
                  className="
                    mt-7
                    max-w-2xl
                    text-lg
                    leading-relaxed
                    text-zinc-300
                  "
                >
                  गायन, वादन आणि भारतीय
                  संस्कृतीचा आध्यात्मिक अनुभव
                  अनुभवी मार्गदर्शनाखाली.
                </p>

                {/* FEATURES */}

                <div className="mt-10 flex flex-wrap gap-4">
                  {[
  "गांधर्व परीक्षा मार्गदर्शन",
  "मासिक संगीत सभा",
  "मंच सादरीकरण",
].map((item, i) => (
                    <div
                      key={i}
                      className="
                        rounded-full
                        border border-white/10
                        bg-white/[0.05]
                        px-5
                        py-3
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

              {/* RIGHT */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border border-white/10
                  bg-black/30
                  p-6
                  backdrop-blur-2xl
                "
              >
                {/* MINI GLOW */}

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-[200px]
                    w-[200px]
                    rounded-full
                    bg-yellow-400/10
                    blur-[100px]
                  "
                />

                <div className="relative z-10 space-y-5">
                  {/* PHONE */}

                  <div
                    className="
                      flex
                      items-center
                      gap-5
                      rounded-3xl
                      border border-white/10
                      bg-white/[0.04]
                      p-5
                    "
                  >
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        border border-yellow-300/20
                        bg-yellow-400/10
                      "
                    >
                      <Phone
                        size={28}
                        className="text-yellow-300"
                      />
                    </div>

                    <div>
                      <p className="text-sm text-zinc-400">
                        Call For Admissions
                      </p>

                      <h3
                        className="
                          mt-1
                          text-2xl
                          font-black
                          text-white
                        "
                      >
                        9881776739
                      </h3>
                    </div>
                  </div>

                  {/* ADDRESS */}

                  <div
                    className="
                      flex
                      items-start
                      gap-5
                      rounded-3xl
                      border border-white/10
                      bg-white/[0.04]
                      p-5
                    "
                  >
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        border border-cyan-300/20
                        bg-cyan-400/10
                      "
                    >
                      <MapPin
                        size={28}
                        className="text-cyan-300"
                      />
                    </div>

                    <div>
                      <p className="text-sm text-zinc-400">
                        Academy Address
                      </p>

                      <h3
                        className="
                          mt-1
                          leading-relaxed
                          text-zinc-200
                        "
                      >
                        Shop No. 9,
                        Yashwantnagar,
                        Bakori Road,
                        Wagholi, Pune
                      </h3>
                    </div>
                  </div>

                  {/* TIMING */}

                  <div
                    className="
                      flex
                      items-center
                      gap-5
                      rounded-3xl
                      border border-white/10
                      bg-white/[0.04]
                      p-5
                    "
                  >
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        border border-fuchsia-300/20
                        bg-fuchsia-400/10
                      "
                    >
                      <Clock3
                        size={28}
                        className="text-fuchsia-300"
                      />
                    </div>

                    <div>
                      <p className="text-sm text-zinc-400">
                        Batch Timing
                      </p>

                      <h3 className="mt-1 text-zinc-200">
                        Saturday & Sunday Special
                      </h3>
                    </div>
                  </div>

                  {/* BUTTON */}

                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      group
                      mt-2
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-gradient-to-r
                      from-yellow-400
                      to-yellow-300
                      px-8
                      py-5
                      text-lg
                      font-bold
                      text-black
                      shadow-[0_0_50px_rgba(250,204,21,0.25)]
                    "
                  >
                    Contact Now

                    <ArrowUpRight
                      size={20}
                      className="
                        transition duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ========================================================= */}
        {/* FOOTER MAIN */}
        {/* ========================================================= */}

        <section className="px-6 py-16 md:px-14 lg:px-24">
          <div
            className="
              grid
              gap-16
              border-t border-white/10
              pt-16
              lg:grid-cols-[1.3fr_1fr_1fr]
            "
          >
            {/* ========================================================= */}
            {/* BRAND */}
            {/* ========================================================= */}

            <div>
              {/* LOGO */}

              <div className="mb-8 flex items-center gap-5">
                <div
                  className="
                    relative
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-[30px]
                    border border-yellow-300/20
                    bg-gradient-to-br
                    from-yellow-400/20
                    via-yellow-300/10
                    to-transparent
                  "
                >
                  <div
                    className="
                      absolute inset-0
                      rounded-[30px]
                      bg-yellow-300/10
                      blur-2xl
                    "
                  />

                  <Music2
                    size={38}
                    className="
                      relative z-10
                      text-yellow-300
                    "
                  />
                </div>

                <div>
                  <h2
                    className="
                      marathi
                      text-3xl
                      font-black
                      text-yellow-300
                    "
                  >
                    संत ज्ञानेश्वर
                  </h2>

                  <p
                    className="
                      mt-1
                      text-xs
                      uppercase
                      tracking-[0.35em]
                      text-zinc-500
                    "
                  >
                    Sangeet Vidyalaya
                  </p>
                </div>
              </div>

              {/* DESC */}

              <p
                className="
                  max-w-xl
                  text-lg
                  leading-relaxed
                  text-zinc-400
                "
              >
                संत ज्ञानेश्वर संगीत विद्यालय हे
भारतीय शास्त्रीय गायन, तबला,
हार्मोनियम, सुगम संगीत आणि
गांधर्व परीक्षा मार्गदर्शनासाठी
समर्पित सांस्कृतिक संगीत शिक्षण केंद्र आहे.
              </p>

              {/* TAGS */}

              <div className="mt-8 flex flex-wrap gap-4">
                {[
  "शास्त्रीय गायन",
  "तबला",
  "हार्मोनियम",
  "सुगम संगीत",
].map((item, i) => (
                  <div
                    key={i}
                    className="
                      rounded-full
                      border border-white/10
                      bg-white/[0.04]
                      px-5
                      py-3
                      text-sm
                      text-zinc-300
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* SOCIAL */}

              <div className="mt-10 flex gap-4">
                {socialLinks.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.04]
                      text-zinc-300
                      transition-all duration-300
                      hover:border-yellow-300/20
                      hover:bg-yellow-400/10
                      hover:text-yellow-300
                    "
                  >
                    <item.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* ========================================================= */}
            {/* LINKS */}
            {/* ========================================================= */}

           {footerLinks.map((section, index) => (
  <div key={index}>
    <h3 className="mb-8 text-2xl font-bold text-white">
      {section.title}
    </h3>

    <div className="space-y-5">
      {section.items.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ x: 8 }}
        >
          <Link
            to={item.path}
            className="
              group
              flex
              items-center
              gap-3
              text-zinc-400
              transition-all duration-300
              hover:text-yellow-300
            "
          >
            <Disc3
              size={14}
              className="
                transition duration-500
                group-hover:rotate-180
              "
            />

            {item.name}
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* BOTTOM BAR */}
        {/* ========================================================= */}

        <section
          className="
            border-t border-white/10
            bg-black/20
            px-6
            py-8
            backdrop-blur-xl
            md:px-14
            lg:px-24
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              text-center
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            {/* LEFT */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-3
                text-zinc-500
                md:justify-start
              "
            >
              <ShieldCheck size={16} />

              © 2026 Sant Dnyaneshwar
              Sangeet Vidyalaya
            </div>

            {/* CENTER */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-3
                text-zinc-400
              "
            >
              <Mail size={16} />

              santdnyaneshwarmusic@gmail.com
            </div>

            {/* RIGHT */}

            <div className="text-zinc-500">
              Designed with ❤️ for
              Indian Classical Music
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;