import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const SocialFloatingBar = () => {
  const [open, setOpen] = useState(false);

  const socialLinks = [
    {
      icon: FaFacebookF,
      name: "Facebook",
      link: "https://facebook.com",
      color: "hover:text-blue-400",
      glow: "shadow-blue-400/30",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      link: "https://instagram.com",
      color: "hover:text-pink-400",
      glow: "shadow-pink-400/30",
    },
    {
      icon: FaYoutube,
      name: "YouTube",
      link: "https://youtube.com",
      color: "hover:text-red-400",
      glow: "shadow-red-400/30",
    },
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      link: "https://wa.me/919876543210",
      color: "hover:text-green-400",
      glow: "shadow-green-400/40",
      pulse: true,
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center">

      {/* =====================================================
          TOGGLE BUTTON
      ===================================================== */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="
          mb-3
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/10
          text-yellow-300
          backdrop-blur-xl
          shadow-[0_0_25px_rgba(250,204,21,0.15)]
          hover:bg-white/20
          transition
        "
      >
        {open ? (
          <ChevronLeft size={16} />
        ) : (
          <ChevronRight size={16} />
        )}
      </motion.button>

      {/* =====================================================
          SOCIAL PANEL
      ===================================================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.85 }}
            transition={{ duration: 0.25 }}
            className="
              relative
              flex
              flex-col
              gap-3
              rounded-[26px]
              
            "
          >

            {/* neon border glow layer */}
            <div className="absolute inset-0 rounded-[26px] bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent opacity-40 blur-xl" />

            {socialLinks.map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="relative group flex items-center">

                  {/* =====================================================
                      TOOLTIP (GLASS + PREMIUM)
                  ===================================================== */}
                  <span
                    className="
                      absolute
                      left-14
                      scale-0
                      group-hover:scale-100
                      origin-left
                      transition
                      px-3
                      py-1.5
                      text-[11px]
                      text-white
                      bg-black/70
                      backdrop-blur-xl
                      border
                      border-white/10
                      rounded-md
                      whitespace-nowrap
                      shadow-sm shadow-yellow-300
                    "
                  >
                    {item.name}
                  </span>

                  {/* =====================================================
                      ICON BUTTON (MAGNETIC STYLE FEEL)
                  ===================================================== */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-black/70
                      text-zinc-300
                      transition
                      hover:scale-110
                      hover:bg-black/90
                      shadow-sm shadow-yellow-300/30
                      hover:shadow-lg
                      ${item.color}
                      ${item.glow}
                    `}
                  >

                    {/* ICON */}
                    <Icon size={14} />

                    {/* =====================================================
                        WHATSAPP PULSE + GLOW (ONLY FOR WHATSAPP)
                    ===================================================== */}
                    {item.pulse && (
                      <>
                        <span className="absolute inset-0 rounded-full animate-ping bg-green-400/30" />
                        <span className="absolute inset-0 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.5)]" />
                      </>
                    )}
                  </a>

                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default SocialFloatingBar;