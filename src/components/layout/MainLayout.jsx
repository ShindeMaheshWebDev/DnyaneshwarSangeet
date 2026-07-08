// =========================================================
// FILE: src/layouts/MainLayout.jsx
// PREMIUM GLOBAL LAYOUT
// =========================================================

import React from "react";

import {
  Outlet,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GoToTopButton from "../../pages/GoToTopButton";
import SocialFloatingBar from "../../pages/SocialFloatingBar";

// import Navbar from "../components/common/Navbar";
// import Footer from "../components/common/Footer";

/* =========================================================
   MAIN LAYOUT
========================================================= */

const MainLayout = () => {
  const location = useLocation();

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-x-hidden
        bg-[#050816]
        text-white
      "
    >
      {/* ===================================================== */}
      {/* GLOBAL BACKGROUND */}
      {/* ===================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
        "
      >
        {/* TOP GOLD */}

        <div
          className="
            absolute
            left-[-180px]
            top-[5%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-yellow-400/10
            blur-[120px]
          "
        />

        {/* RIGHT PURPLE */}

        <div
          className="
            absolute
            right-[-200px]
            top-[35%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-500/10
            blur-[140px]
          "
        />

        {/* BOTTOM ORANGE */}

        <div
          className="
            absolute
            bottom-[-180px]
            left-1/2
            h-[450px]
            w-[450px]
            -translate-x-1/2
            rounded-full
            bg-orange-400/10
            blur-[120px]
          "
        />

        {/* GRID */}

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
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      {/* ===================================================== */}
      {/* NAVBAR */}
      {/* ===================================================== */}


      <GoToTopButton/>
      <SocialFloatingBar/>
      <Navbar />
      

      {/* ===================================================== */}
      {/* PAGE CONTENT */}
      {/* ===================================================== */}

      <main className="relative z-10">
        <AnimatePresence
          mode="wait"
          initial={false}
        >
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>

      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}

      <Footer />
    </div>
  );
};

export default MainLayout;