// src/pages/ContactPage.jsx
import React, { useState } from "react";
import {
  memo,
  useMemo,
 
} from "react";
 import { ChevronDown } from "lucide-react";

import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
  Crown,
  Clock3,
  Users,
  Star,
  Send,
} from "lucide-react";







import Academy from "../assets/images/Academy.jpeg"

/* =========================================================
DATA
========================================================= */

// const [loading, setLoading] = useState(false);






const contactMethods = [
  {
    title: "Call Us",
    value: "+919881776739",
    icon: Phone,
    color: "from-yellow-400/20 to-yellow-300/5",
  },

  {
    title: "WhatsApp",
    value: "+919881776739",
    icon: MessageCircle,
    color: "from-green-400/20 to-green-300/5",
  },

  {
    title: "Email",
    value: "psgaikwad05@gmail.com",
    icon: Mail,
    color: "from-violet-400/20 to-violet-300/5",
  },

  {
    title: "Location",
    value: "Sant Dnyaneshwar Sangeet Vidyalaya Ahilyanagar & Wagholi, Pune",
    icon: MapPin,
    color: "from-sky-400/20 to-sky-300/5",
  },
];

const stats = [
  {
    number: "1500+",
    label: "Students",
  },

  {
    number: "26+",
    label: "Years",
  },

  {
    number: "100+",
    label: "Stage Performance",
  },

  {
    number: "100%",
    label: "Guidance",
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
    },
  },
};

/* =========================================================
   CONTACT CARD
========================================================= */

const ContactCard = memo(
  ({ item, index }) => {
    const Icon = item.icon;

    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          delay: index * 0.08,
        }}
        whileHover={{
          y: -8,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-white/10
          bg-white/[0.04]
          p-7
          backdrop-blur-xl
        "
      >
        <div
          className={`
            absolute inset-0 opacity-0
            transition-all duration-500
            group-hover:opacity-100
            bg-gradient-to-br ${item.color}
          `}
        />

        <div className="relative z-10">
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
            <Icon size={22} />
          </div>

          <h3
            className="
              mt-5
              text-xl
              font-bold
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-2
              text-zinc-400
            "
          >
            {item.value}
          </p>

          <button
            className="
              mt-5
              flex
              items-center
              gap-2
              text-yellow-300
            "
          >
            Connect

            <ArrowUpRight size={15} />
          </button>
        </div>
      </motion.div>
    );
  }
);

/* =========================================================
   MAIN PAGE
========================================================= */

const ContactPage = () => {



const [loading, setLoading] = useState(false);



const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const object = {
    access_key: "ac9f01cc-341e-4283-a925-e5c32e28bc62",

    subject:
      "New Admission Inquiry - Sant Dnyaneshwar Sangeet Vidyalaya",

    from_name: "Sant Dnyaneshwar Sangeet Vidyalaya Website",

    name: formData.name,

    phone: formData.phone,

    email: formData.email,

    age: formData.age,

    gender: formData.gender,

    city: formData.city,

    course: formData.course,

    level: formData.level,

    experience: formData.experience,

    message: formData.message,
  };

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      }
    );

    const result = await response.json();

    if (result.success) {
      alert("Admission Inquiry Submitted Successfully.");

      setFormData({
        name: "",
        phone: "",
        email: "",
        age: "",
        gender: "",
        city: "",
        course: "",
        level: "",
        experience: "",
        message: "",
      });
    } else {
      alert(result.message || "Something went wrong.");
    }
  } catch (error) {
    console.error(error);
    alert("Unable to submit the form. Please try again.");
  } finally {
    setLoading(false);
  }
};


  const premiumStats = useMemo(
    () => stats,
    []
  );

 const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  age: "",
  gender: "",
  city: "",
  course: "",
  level: "",
  experience: "",
  message: "",
});

// const [loading, setLoading] = useState(false);

  return (
    <div
      className="
        relative
        overflow-hidden
        bg-[#050816]
        text-white
      "
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute
            left-[-150px]
            top-[-120px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-yellow-400/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-violet-500/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute inset-0 opacity-[0.03]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* HERO */}

    <section
  className="
    relative z-10
    px-5
    pb-28
    pt-16
    md:px-10
    lg:px-16
  "
>

    <div className="h-8 w-8 border-2 border-yellow-400 absolute animate-spin" />
    <div className="h-8 w-8 border-2 border-yellow-400 absolute animate-spin z-10 bottom-4 right-4"
     />
     <div className="h-12 w-12 bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-50 absolute top-100 rounded-full -z-10 "></div>
     


    
  <div className="mx-auto max-w-7xl text-center">

    {/* BADGE */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
        text-[12px]
        text-yellow-200
        backdrop-blur-md
      "
    >
      <Sparkles size={12} />
      Premium Music Academy Experience
    </motion.div>

    {/* MAIN HEADING */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="
        mt-6
        text-[2.8rem]
        font-black
        leading-[1.05]
        tracking-tight
        md:text-[4.2rem]
      "
    >
      26 Years of Musical Heritage
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
        Building Artists, Preserving Tradition.
      </span>
    </motion.h1>

    {/* DESCRIPTION */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="
        mx-auto
        mt-6
        max-w-2xl
        text-[15px]
        leading-8
        text-zinc-400
      "
    >
      Join our professional music academy and learn from experienced gurus.
      Build confidence, master performance skills, and turn your passion into
      a career with structured training and live practice sessions.
    </motion.p>

    {/* CTA BUTTONS */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
    >
      <button
        className="
          rounded-full
          bg-gradient-to-r
          from-yellow-400
          to-yellow-300
          px-8
          py-4
          font-bold
          text-black
          shadow-[0_0_40px_rgba(250,204,21,.25)]
          hover:scale-105
          transition
        "
      >
        Book Free Demo Class
      </button>

      <button
        className="
          rounded-full
          border
          border-white/15
          bg-white/5
          px-8
          py-4
          font-medium
          text-white
          backdrop-blur-md
          hover:bg-white/10
          transition
        "
      >
        Explore Courses
      </button>
    </motion.div>

    {/* STATS */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="
        mt-14
        grid
        grid-cols-2
        gap-5
        md:grid-cols-4
      "
    >
      {premiumStats.map((item, i) => (
        <div
          key={i}
          className="
            group
            rounded-[26px]
            border
            border-white/10
            bg-white/[0.04]
            p-6
            backdrop-blur-xl
            hover:bg-white/[0.07]
            transition
          "
        >
          <h3 className="text-3xl font-black text-yellow-300">
            {item.number}
          </h3>

          <p className="mt-1 text-xs text-zinc-400 group-hover:text-zinc-300">
            {item.label}
          </p>
        </div>
      ))}
    </motion.div>

  </div>
</section>

      {/* CONTACT METHODS */}

      <section
        className="
          px-5
          py-14
          md:px-10
          lg:px-16
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {contactMethods.map(
            (item, index) => (
              <ContactCard
                key={index}
                item={item}
                index={index}
              />
            )
          )}
        </div>
      </section>

            {/* =========================================================
         FOUNDER / GURU SECTION
      ========================================================= */}

      <section
        className="
          px-5
          py-14
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
            gap-12
            lg:grid-cols-2
          "
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
              bg-white/[0.05]
              p-3
            "
          >
            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop"
              alt="Guru"
              className="
                h-[620px]
                w-full
                rounded-[28px]
                object-cover
              "
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
                text-[11px]
                text-yellow-200
              "
            >
              <Crown size={13} />
              Founder Message
            </div>

            <h2
              className="
                text-4xl
                font-black
                leading-tight
                md:text-6xl
              "
            >
              Learn From
              <br />

              Masters Of Music
            </h2>

            <p
              className="
                mt-6
                text-zinc-400
                leading-8
              "
            >
              Our academy is dedicated to
              preserving Indian classical
              music while helping students
              build confidence, discipline,
              and professional performance
              skills through modern teaching
              methods.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Personal Guidance",
                "Stage Performance Preparation",
                "Certification Programs",
                "Competition Training",
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <Star
                    size={15}
                    className="text-yellow-300"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
         BOOKING FORM
      ========================================================= */}

<section
  className="
    relative
    px-5
    py-16
    md:px-10
    lg:px-16
  "
>
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div
        className="
          mx-auto
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-yellow-400/20
          bg-gradient-to-r
          from-yellow-400/10
          to-white/5
          px-5
          py-2.5
          text-[12px]
          text-yellow-200
          backdrop-blur-xl
        "
      >
        <Send size={12} />
        Book Your Free Demo Class
      </div>

      <h2
        className="
          mt-6
          text-4xl
          font-black
          md:text-6xl
          leading-tight
        "
      >
        Start Your
        <span className="text-yellow-300"> Musical Journey</span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-zinc-400 text-[15px] leading-7">
        Fill the form below and our expert team will contact you within 24 hours
        to schedule your personalized demo session.
      </p>
    </motion.div>

    {/* MAIN GRID */}
    <div className="mt-14 grid gap-10 lg:grid-cols-2">

      {/* =====================================================
          LEFT: FORM CARD
      ===================================================== */}




<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="
    rounded-[40px]
    border
    border-white/10
    bg-white/[0.05]
    p-8
    backdrop-blur-2xl
    shadow-[0_0_80px_rgba(0,0,0,0.4)]
  "
>
  <form onSubmit={handleSubmit}>

  <div className="grid gap-5 md:grid-cols-2">

    {/* Full Name */}

    <input
      type="text"
      placeholder="Full Name"
      value={formData.name}
      onChange={(e) =>
        setFormData({
          ...formData,
          name: e.target.value,
        })
      }
      className="
        w-full
        rounded-2xl
        border
        border-white/10
        bg-black/30
        px-5
        py-4
        text-white
        outline-none
        transition
        focus:border-yellow-300/40
      "
    />

    {/* Mobile */}

    <input
      type="tel"
      placeholder="Mobile Number"
      value={formData.phone}
      onChange={(e) =>
        setFormData({
          ...formData,
          phone: e.target.value,
        })
      }
      className="
        w-full
        rounded-2xl
        border
        border-white/10
        bg-black/30
        px-5
        py-4
        text-white
        outline-none
        transition
        focus:border-yellow-300/40
      "
    />

    {/* Email */}

    <input
      type="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={(e) =>
        setFormData({
          ...formData,
          email: e.target.value,
        })
      }
      className="
        md:col-span-2
        w-full
        rounded-2xl
        border
        border-white/10
        bg-black/30
        px-5
        py-4
        text-white
        outline-none
        transition
        focus:border-yellow-300/40
      "
    />

    {/* Age */}

    <input
      type="number"
      placeholder="Age"
      value={formData.age}
      onChange={(e) =>
        setFormData({
          ...formData,
          age: e.target.value,
        })
      }
      className="
        w-full
        rounded-2xl
        border
        border-white/10
        bg-black/30
        px-5
        py-4
        text-white
        outline-none
        transition
        focus:border-yellow-300/40
      "
    />

    {/* Gender */}

    <div className="relative w-full">
      <select
        value={formData.gender}
        onChange={(e) =>
          setFormData({
            ...formData,
            gender: e.target.value,
          })
        }
        style={{ colorScheme: "dark" }}
        className="
          w-full
          appearance-none
          rounded-2xl
          border
          border-white/10
          bg-black/30
          px-5
          py-4
          pr-12
          text-white
          outline-none
          transition
          focus:border-yellow-300/40
        "
      >
        <option value="" style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>
          Select Gender
        </option>
        <option style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>Male</option>
        <option style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>Female</option>
        <option style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>Other</option>
      </select>
      <ChevronDown
        size={18}
        strokeWidth={2.5}
        className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-yellow-300"
      />
    </div>

    {/* City */}

    <input
      type="text"
      placeholder="City"
      value={formData.city}
      onChange={(e) =>
        setFormData({
          ...formData,
          city: e.target.value,
        })
      }
      className="
        md:col-span-2
        w-full
        rounded-2xl
        border
        border-white/10
        bg-black/30
        px-5
        py-4
        text-white
        outline-none
        transition
        focus:border-yellow-300/40
      "
    />

    {/* Interested Course */}

    <div className="relative md:col-span-2 w-full">
      <select
        value={formData.course}
        onChange={(e) =>
          setFormData({
            ...formData,
            course: e.target.value,
          })
        }
        style={{ colorScheme: "dark" }}
        className="
          w-full
          appearance-none
          rounded-2xl
          border
          border-white/10
          bg-black/30
          px-5
          py-4
          pr-12
          text-white
          outline-none
          transition
          focus:border-yellow-300/40
        "
      >
        <option value="" style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>
          Interested Course
        </option>
        <option style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>शास्त्रीय गायन</option>
        <option style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>तबला</option>
        <option style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>हार्मोनियम</option>
        <option style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>सुगम संगीत</option>
        <option style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>गांधर्व परीक्षा मार्गदर्शन</option>
        <option style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>स्टेज परफॉर्मन्स प्रशिक्षण</option>
      </select>
      <ChevronDown
        size={18}
        strokeWidth={2.5}
        className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-yellow-300"
      />
    </div>

    {/* Learning Level */}

    <div className="relative w-full">
      <select
        value={formData.level}
        onChange={(e) =>
          setFormData({
            ...formData,
            level: e.target.value,
          })
        }
        style={{ colorScheme: "dark" }}
        className="
          w-full
          appearance-none
          rounded-2xl
          border
          border-white/10
          bg-black/30
          px-5
          py-4
          pr-12
          text-white
          outline-none
          transition
          focus:border-yellow-300/40
        "
      >
        <option value="" style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>
          Learning Level
        </option>
        <option style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>Beginner</option>
        <option style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>Intermediate</option>
        <option style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>Advanced</option>
      </select>
      <ChevronDown
        size={18}
        strokeWidth={2.5}
        className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-yellow-300"
      />
    </div>

    {/* Previous Experience */}

    <div className="relative w-full">
      <select
        value={formData.experience}
        onChange={(e) =>
          setFormData({
            ...formData,
            experience: e.target.value,
          })
        }
        style={{ colorScheme: "dark" }}
        className="
          w-full
          appearance-none
          rounded-2xl
          border
          border-white/10
          bg-black/30
          px-5
          py-4
          pr-12
          text-white
          outline-none
          transition
          focus:border-yellow-300/40
        "
      >
        <option value="" style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>
          Previous Music Experience
        </option>
        <option style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>No Experience</option>
        <option style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>Less than 1 Year</option>
        <option style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>1 - 3 Years</option>
        <option style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>More than 3 Years</option>
      </select>
      <ChevronDown
        size={18}
        strokeWidth={2.5}
        className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-yellow-300"
      />
    </div>

    {/* Message */}

    <textarea
      rows={5}
      placeholder="Write Your Message"
      value={formData.message}
      onChange={(e) =>
        setFormData({
          ...formData,
          message: e.target.value,
        })
      }
      className="
        md:col-span-2
        w-full
        rounded-2xl
        border
        border-white/10
        bg-black/30
        px-5
        py-4
        text-white
        outline-none
        transition
        focus:border-yellow-300/40
      "
    />

  </div>

  {/* BUTTON */}

  <button
    type="submit"
    disabled={loading}
    className="
      mt-6
      w-full
      rounded-full
      bg-gradient-to-r
      from-yellow-400
      to-yellow-300
      px-8
      py-4
      font-bold
      text-black
      shadow-[0_0_60px_rgba(250,204,21,0.25)]
      transition
      hover:scale-[1.02]
    "
  >
    {loading
    ? "Submitting..."
    : "Submit Admission Inquiry"}
  </button>

  </form>

</motion.div>




      {/* =====================================================
          RIGHT: TRUST + INFO PANEL
      ===================================================== */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >

        {/* INFO CARD */}
        <div
          className="
            rounded-[34px]
            border
            border-white/10
            bg-white/[0.04]
            p-8
            backdrop-blur-xl
          "
        >
          <h3 className="text-2xl font-bold text-white">
            Why Choose Us?
          </h3>

          <ul className="mt-5 space-y-3 text-zinc-400 text-[14px]">
            <li>✔ Professional Music Gurus</li>
            <li>✔ Personalized Training System</li>
            <li>✔ Stage Performance Practice</li>
            <li>✔ Certificate Programs</li>
            <li>✔ Career Guidance Support</li>
          </ul>
        </div>

        {/* RESPONSE TIME CARD */}
        <div
          className="
            rounded-[34px]
            border
            border-yellow-400/20
            bg-gradient-to-r
            from-yellow-400/10
            to-white/5
            p-8
            backdrop-blur-xl
          "
        >
          <h3 className="text-xl font-bold text-yellow-300">
            Fast Response Guarantee
          </h3>

          <p className="mt-2 text-zinc-400 text-[14px] leading-6">
            Our team responds within 24 hours and helps you choose the best
            course based on your level and interest.
          </p>
        </div>

        {/* CONTACT QUICK BOX */}
        <div
          className="
            rounded-[34px]
            border
            border-white/10
            bg-white/[0.04]
            p-6
            text-center
            backdrop-blur-xl
          "
        >
          <p className="text-zinc-400 text-sm">
            Need immediate help?
          </p>

          <p className="mt-2 text-yellow-300 font-bold">
            +919881776739
          </p>
        </div>

      </motion.div>

    </div>
  </div>
</section>

      {/* =========================================================
         LOCATION SHOWCASE
      ========================================================= */}

      <section
        className="
          px-5
          py-24
          md:px-10
          lg:px-16
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-10
            lg:grid-cols-2
          "
        >
          <motion.div
            whileHover={{
              scale: 1.01,
            }}
            className="
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
            "
          >
            <img
              src={Academy}
              alt="Academy"
              className="
                h-full
                min-h-[520px]
                w-full
                object-cover
              "
            />
          </motion.div>

          <div className="space-y-5">
            <h2
              className="
                text-4xl
                font-black
                md:text-5xl
              "
            >
              Visit Our <span className="text-yellow-300">Academy</span> 
            </h2>

            <p
              className="
                text-zinc-400
                leading-8
              "
            >
              Experience our premium learning
              environment equipped with
              performance spaces, classrooms,
              and personalized training.
            </p>

            <div className="grid gap-5">
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  value:
                    "Sant Dnyaneshwar Sangeet Vidyalaya Ahilyanagar & Wagholi, Pune",
                },

                {
                  icon: Phone,
                  title: "Phone",
                  value:
                    "+919881776739",
                },

                {
                  icon: Mail,
                  title: "Email",
                  value:
                    "psgaikwad05@gmail.com",
                },

                {
                  icon: Clock3,
                  title: "Days",
                  value:
                    "Sat - Mon - Sun",
                },
              ].map(
                (item, index) => {
                  const Icon =
                    item.icon;

                  return (
                    <div
                      key={index}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-[24px]
                        border
                        border-white/10
                        bg-white/[0.04]
                        p-5
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-2xl
                          bg-yellow-400/10
                          text-yellow-300
                        "
                      >
                        <Icon size={18} />
                      </div>

                      <div>
                        <p
                          className="
                            text-[11px]
                            text-zinc-500
                          "
                        >
                          {item.title}
                        </p>

                        <h3
                          className="
                            mt-1
                            font-semibold
                          "
                        >
                          {item.value}
                        </h3>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default memo(ContactPage);