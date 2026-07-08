import React, {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Float,
  Environment,
  useGLTF,
} from "@react-three/drei";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { motion } from "framer-motion";

import veenaModel from "../../assets/models/veena-optimized.glb";
import guruImage from "../../assets/images/Guru2.png";

import PremiumButton from "../common/PremiumButton";

import {
  Sparkles,
  Music2,
  ArrowUpRight,
  Star,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   PRELOAD MODEL
========================================================= */

useGLTF.preload(veenaModel);

/* =========================================================
   SMALL PREMIUM VEENA
========================================================= */

function VeenaModel() {
  const group = useRef();

  const { scene } = useGLTF(veenaModel);

  /* =========================================================
     OPTIMIZE MODEL
  ========================================================= */

  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;

        child.frustumCulled = true;

        if (child.material) {
          child.material.envMapIntensity = 0.6;
        }
      }
    });
  }, [scene]);

  /* =========================================================
     FLOATING MOTION
  ========================================================= */

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.7) * 0.03;

    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.2) * 0.08;
  });

  /* =========================================================
     SCROLL ROTATION
  ========================================================= */

  useEffect(() => {
    if (!group.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero3d-wrapper",
          start: "top top",
          end: "+=2200",
          scrub: 1.2,
        },
      });

      /* =========================================================
         ONLY 2-3 SECTION MOVEMENT
      ========================================================= */

      tl.to(
        group.current.rotation,
        {
          y: Math.PI * 0.7,
          duration: 1,
        },
        0
      );

      tl.to(
        group.current.position,
        {
          x: 1.2,
          y: -0.3,
          duration: 1,
        },
        0
      );

      tl.to(
        group.current.rotation,
        {
          y: Math.PI * 1.4,
          x: 0.08,
          duration: 1,
        },
        1
      );

      tl.to(
        group.current.position,
        {
          x: -1.1,
          y: -0.5,
          duration: 1,
        },
        1
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Float
      speed={1.6}
      rotationIntensity={0.12}
      floatIntensity={0.25}
    >
      <group
        ref={group}
        scale={1.15}
        position={[1.6, -0.8, 0]}
      >
        <primitive object={scene} />
      </group>
    </Float>
  );
}

/* =========================================================
   LIGHTS
========================================================= */

function SceneLights() {
  return (
    <>
      <ambientLight intensity={1.3} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        color="#ffe6b3"
      />

      <pointLight
        position={[0, 2, 3]}
        intensity={1.5}
        color="#facc15"
      />
    </>
  );
}

/* =========================================================
   LOADER
========================================================= */

function CanvasLoader() {
  return (
    <div
      className="
        absolute inset-0
        flex items-center justify-center
        bg-[#050816]
      "
    >
      <div className="flex flex-col items-center gap-5">
        <div
          className="
            h-14 w-14
            animate-spin
            rounded-full
            border-2 border-yellow-400/20
            border-t-yellow-400
          "
        />

        <p className="text-sm tracking-[0.25em] text-zinc-400">
          LOADING EXPERIENCE
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

const Hero3D = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="
        hero3d-wrapper
        relative
        overflow-hidden
        bg-[#050816]
        text-white
      "
    >
      {/* =========================================================
         PREMIUM BACKGROUND
      ========================================================= */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,#1b1d38,transparent_40%)]
        "
      />

      <div
        className="
          absolute
          left-[-200px]
          top-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-yellow-400/10
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          right-[-200px]
          top-[40%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-500/10
          blur-[120px]
        "
      />

      {/* =========================================================
         SMALL RIGHT SIDE CANVAS
      ========================================================= */}

      <div
        className="
          pointer-events-none
          fixed
          right-0
          top-0
          z-10
          hidden
          h-screen
          w-[42%]
          lg:block
        "
      >
        {!loaded && <CanvasLoader />}

<Canvas
  frameloop="always"
  dpr={[1, 1.5]}
  shadows={false}
  camera={{
    position: [0, 0, 4.5],
    fov: 38,
  }}
  gl={{
    antialias: false,
    alpha: true,
    powerPreference: "high-performance",
    stencil: false,
    depth: false,
  }}
>
  <Suspense fallback={null}>
    
    {/* LIGHTS */}

    <ambientLight intensity={1.6} />

    <directionalLight
      position={[5, 5, 5]}
      intensity={1.8}
    />

    <directionalLight
      position={[-5, -3, 2]}
      intensity={0.8}
    />

    {/* MODEL */}

    <VeenaModel />

  </Suspense>
</Canvas>

        {/* <Canvas
  dpr={[1, 1.5]}
  performance={{ min: 0.5 }}
  gl={{
    antialias: false,
    powerPreference: "high-performance",
    alpha: true,
    stencil: false,
    depth: true,
  }}
  camera={{
    position: [0, 0.4, 3.8],
    fov: 35,
  }}
></Canvas> */}

        {/* DARK OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-l
            from-transparent
            via-[#050816]/10
            to-[#050816]
          "
        />
      </div>

      {/* =========================================================
         HERO SECTION
      ========================================================= */}

      <section
        className="
          relative z-30
          flex min-h-screen items-center
          px-6 py-6
          md:px-12
          lg:px-24
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1400px]
            items-center
            gap-16
            lg:grid-cols-[1fr_420px]
          "
        >
          {/* =========================================================
             LEFT CONTENT
          ========================================================= */}

          <div className="max-w-3xl">
            {/* BADGE */}

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
              className="
                mb-8
                inline-flex items-center gap-3
                rounded-full
                border border-yellow-400/20
                bg-yellow-400/10
                px-5 py-3
                text-sm
                text-yellow-200
                backdrop-blur-xl
              "
            >
              <Sparkles size={16} />

              Sant Dnyaneshwar Sangeet Vidyalaya • Pune
            </motion.div>

            {/* TITLE */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 1,
              }}
              className="
                marathi
                text-5xl
                font-black
                leading-[1]
                tracking-tight
                md:text-7xl
                lg:text-[5rem]
              "
            >
              संगीताची
              <span className="text-yellow-300">
                {" "}
                दिव्य
              </span>
              <br />
              परंपरा
            </motion.h1>

            {/* TEXT */}

            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-relaxed
                text-zinc-400
                md:text-xl
              "
            >
              संत ज्ञानेश्वर संगीत विद्यालयामध्ये
भारतीय शास्त्रीय गायन, तबला,
हार्मोनियम आणि सुगम संगीताचे
पारंपरिक गुरुकुल पद्धतीने प्रशिक्षण दिले जाते.
अनुभवी गुरुजनांचे मार्गदर्शन,
मंच सादरीकरणाच्या संधी आणि
गांधर्व परीक्षा तयारीद्वारे विद्यार्थ्यांचा
सर्वांगीण विकास घडवला जातो.
            </motion.p>

            {/* FEATURES */}

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
                delay: 0.3,
                duration: 1,
              }}
              className="
                mt-10
                grid gap-4
                sm:grid-cols-2
              "
            >
              {[
                "गांधर्व परीक्षा मार्गदर्शन",
  "मासिक संगीत सभा",
  "विद्यार्थी मंच सादरीकरण",
  "गायन • तबला • हार्मोनियम",
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    flex items-center gap-3
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    px-5 py-4
                    backdrop-blur-xl
                  "
                >
                  <div
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-xl
                      bg-yellow-400/10
                    "
                  >
                    <CheckCircle2
                      size={18}
                      className="text-yellow-300 animate-pulse"
                    />
                  </div>

                  <span className="text-zinc-300">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* BUTTONS */}

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
                delay: 0.4,
                duration: 1,
              }}
              className="
                mt-12
                flex flex-wrap gap-5
              "
            >
              <PremiumButton
                variant="gold"
                size="md"
              >
                Admissions Open

                {/* <ArrowUpRight size={18} /> */}
              </PremiumButton>

              <PremiumButton
                variant="glass"
                size="lg"
              >
                Explore Courses
              </PremiumButton>
            </motion.div>
          </div>

          {/* =========================================================
             RIGHT IMAGE CARD
          ========================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className="
              relative z-30
              hidden
              lg:block
            "
          >
            <div
              className="
                relative overflow-hidden
                rounded-[36px]
                border border-white/10
                bg-white/[0.04]
                p-4
                backdrop-blur-2xl
              "
            >
              <img
                src={guruImage}
                alt="Guru"
                className="
                  h-[620px]
                  w-full
                  rounded-[28px]
                  object-cover
                "
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-8
                  left-8
                  right-8
                "
              >
                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-yellow-400/20
                    bg-yellow-400/10
                    px-4 py-2
                    text-yellow-200
                    backdrop-blur-xl
                  "
                >
                  <Music2 size={15} />

                  गुरुजनांचे मार्गदर्शन
                </div>

                <h3
                  className="
                    mt-5
                    text-3xl
                    font-black
                  "
                >
                  परंपरेतून घडणारे कलाकार
                </h3>

                <p className="mt-3 text-zinc-300">
                  संस्कार • साधना • संगीत
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
         SECTION 1
      ========================================================= */}

      <section
        className="
          relative z-30
          flex items-center
          px-6 py-4
          md:px-16
          lg:px-24
          my-10
        "
      >
        <div className="max-w-2xl">
          <div
            className="
              rounded-[40px]
              border border-white/10
              bg-white/[0.03]
              p-10
              backdrop-blur-2xl
            "
          >
            <div
              className="
                mb-6
                flex h-20 w-20 items-center justify-center
                rounded-3xl
                bg-yellow-400/10
              "
            >
              <Star
                size={38}
                className="text-yellow-300"
              />
            </div>

            <h2
              className="
              text-4xl
                md:text-5xl
                font-black
                text-white
              "
            >
              शास्त्रीय गायन
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-zinc-400
              "
            >
              रागदारी संगीत, स्वर साधना,
आलाप, तान, बंदिश आणि
गांधर्व परीक्षा तयारीसह
संपूर्ण प्रशिक्षण
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
         SECTION 2
      ========================================================= */}

      <section
        className="
          relative z-30
          flex items-center justify-end
          px-6 py-4
          md:px-16
          lg:px-24
          my-10
        "
      >
        <div className="max-w-2xl">
          <div
            className="
              rounded-[40px]
              border border-white/10
              bg-white/[0.03]
              p-10
              backdrop-blur-2xl
            "
          >
            <div
              className="
                mb-6
                flex h-20 w-20 items-center justify-center
                rounded-3xl
                bg-purple-500/10
              "
            >
              <Music2
                size={38}
                className="text-purple-300"
              />
            </div>

            <h2
              className="
              text-4xl
                md:text-5xl
                font-black
                text-white
              "
            >
              गुरुकुल शिक्षण पद्धती
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-zinc-400
              "
            >
              अनुभवी गुरुजनांच्या
मार्गदर्शनाखाली नियमित रियाज,
मंच सादरीकरण आणि
संगीत संस्कारांचा विकास.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero3D;