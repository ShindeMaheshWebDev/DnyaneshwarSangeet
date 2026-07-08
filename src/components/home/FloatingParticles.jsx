import React, { useMemo } from "react";

import {
  Stars,
  Sparkles,
} from "@react-three/drei";

/* =========================================================
   PREMIUM FLOATING PARTICLES
   OPTIMIZED DARK VERSION
========================================================= */

const FloatingParticles = () => {
  /* =========================================================
     RANDOM POSITIONS
  ========================================================= */

  const sparklesPosition = useMemo(() => {
    const positions = new Float32Array(
      120 * 3
    );

    for (let i = 0; i < 120; i++) {
      positions[i * 3 + 0] =
        (Math.random() - 0.5) * 18;

      positions[i * 3 + 1] =
        (Math.random() - 0.5) * 12;

      positions[i * 3 + 2] =
        (Math.random() - 0.5) * 12;
    }

    return positions;
  }, []);

  return (
    <>
      {/* ===================================================== */}
      {/* PREMIUM STARS */}
      {/* ===================================================== */}

      <Stars
        radius={60}
        depth={30}
        count={1400}
        factor={2.5}
        saturation={0}
        fade
        speed={0.35}
      />

      {/* ===================================================== */}
      {/* GOLDEN SPARKLES */}
      {/* ===================================================== */}

      <Sparkles
        count={120}
        scale={[12, 8, 12]}
        size={2}
        speed={0.25}
        opacity={0.6}
        color="#facc15"
        position={[0, 0, 0]}
      />

      {/* ===================================================== */}
      {/* SOFT CENTER GLOW PARTICLES */}
      {/* ===================================================== */}

      <Sparkles
        count={35}
        scale={[4, 4, 4]}
        size={5}
        speed={0.15}
        opacity={0.35}
        color="#fde68a"
        position={[0, 0, 0]}
      />

      {/* ===================================================== */}
      {/* SIDE AMBIENT PARTICLES */}
      {/* ===================================================== */}

      <Sparkles
        count={45}
        scale={[16, 10, 16]}
        size={1.5}
        speed={0.2}
        opacity={0.18}
        color="#ffffff"
      />
    </>
  );
};

export default React.memo(
  FloatingParticles
);