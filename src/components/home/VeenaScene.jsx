import React, {
  useRef,
  useEffect,
  useMemo,
} from "react";

import {
  useFrame,
  useThree,
} from "@react-three/fiber";

import {
  useGLTF,
} from "@react-three/drei";

import * as THREE from "three";

import veenaModel from "../../assets/models/veena-optimized.glb";

/* =========================================================
   ULTRA OPTIMIZED CINEMATIC VEENA SCENE
   SUPER SMOOTH • LOW GPU • FAST LOAD
========================================================= */

const VeenaScene = ({
  scrollProgress,
}) => {
  const veenaRef = useRef();

  const { camera, gl } = useThree();

  /* =========================================================
     SMOOTH SCROLL
  ========================================================= */

  const smoothScroll = useRef(0);

  /* =========================================================
     LOAD MODEL
  ========================================================= */

  const { scene } = useGLTF(
    veenaModel
  );

  /* =========================================================
     CLONE MODEL
  ========================================================= */

  const clonedScene = useMemo(() => {
    return scene.clone(true);
  }, [scene]);

  /* =========================================================
     MASSIVE PERFORMANCE OPTIMIZATION
  ========================================================= */

  useEffect(() => {
    if (!clonedScene) return;

    /* -------------------------------- */
    /* RENDERER OPTIMIZATION */
    /* -------------------------------- */

    gl.setPixelRatio(
      Math.min(
        window.devicePixelRatio,
        1.5
      )
    );

    gl.outputColorSpace =
      THREE.SRGBColorSpace;

    gl.toneMapping =
      THREE.ACESFilmicToneMapping;

    gl.toneMappingExposure = 1;

    /* -------------------------------- */
    /* MODEL OPTIMIZATION */
    /* -------------------------------- */

    clonedScene.traverse((child) => {
      if (child.isMesh) {
        /* PERFORMANCE */

        child.castShadow = false;
        child.receiveShadow = false;

        child.frustumCulled = true;

        /* GEOMETRY */

        if (child.geometry) {
          child.geometry.computeBoundingSphere();
          child.geometry.computeBoundingBox();
        }

        /* MATERIAL */

        if (child.material) {
          child.material.transparent =
            false;

          child.material.depthWrite =
            true;

          child.material.depthTest =
            true;

          child.material.fog = false;

          child.material.dithering =
            false;

          child.material.toneMapped =
            true;

          /* PREMIUM LOOK */

          child.material.roughness =
            0.58;

          child.material.metalness =
            0.08;

          child.material.envMapIntensity =
            0.35;

          /* GOLD COLOR */

          if (
            child.material.color
          ) {
            child.material.color =
              new THREE.Color(
                "#c9a45c"
              );
          }
        }
      }
    });
  }, [clonedScene, gl]);

  /* =========================================================
     SECTION TIMELINE
  ========================================================= */

  const getSection = (p) => {
    if (p < 0.33) return 0;
    if (p < 0.66) return 1;
    return 2;
  };

  /* =========================================================
     ULTRA SMOOTH FRAME LOOP
  ========================================================= */

  useFrame((state, delta) => {
    if (!veenaRef.current)
      return;

    /* -------------------------------- */
    /* SMOOTH SCROLL */
    /* -------------------------------- */

    const targetScroll =
      Math.min(
        scrollProgress.current,
        1
      );

    smoothScroll.current =
      THREE.MathUtils.lerp(
        smoothScroll.current,
        targetScroll,
        1 -
          Math.exp(
            -delta * 3.5
          )
      );

    const p =
      smoothScroll.current;

    const section =
      getSection(p);

    const smooth =
      1 -
      Math.exp(
        -delta * 4.5
      );

    /* =========================================================
       FLOAT ANIMATION
    ========================================================= */

    const time =
      state.clock.elapsedTime;

    const floatingY =
      Math.sin(time * 0.9) *
      0.045;

    const floatingRot =
      Math.sin(time * 0.5) *
      0.02;

    /* =========================================================
       SECTION STATES
    ========================================================= */

    let rotY = 0;
    let rotX = 0;
    let rotZ = 0;

    let posX = 1.2;
    let posY = -0.65;
    let posZ = 0;

    let scale = 0.32;

    /* =========================================================
       SECTION 1
    ========================================================= */

    if (section === 0) {
      rotY =
        p * 1.3;

      rotX =
        p * 0.08;

      posX = 1.35;

      posZ = 0;
    }

    /* =========================================================
       SECTION 2
    ========================================================= */

    if (section === 1) {
      const local =
        (p - 0.33) / 0.33;

      rotY =
        1.2 +
        local * 1.6;

      rotX =
        0.08 +
        local * 0.2;

      posX =
        1.35 -
        local * 1.15;

      posZ =
        local * 0.25;

      scale =
        0.32 +
        local * 0.015;
    }

    /* =========================================================
       SECTION 3
    ========================================================= */

    if (section === 2) {
      const local =
        (p - 0.66) / 0.34;

      rotY =
        2.8 +
        local * 1.4;

      rotX = 0.22;

      posX = 0.2;

      posZ =
        0.25 -
        local * 0.4;

      scale = 0.335;
    }

    /* =========================================================
       APPLY TRANSFORMS
    ========================================================= */

    veenaRef.current.rotation.y =
      THREE.MathUtils.lerp(
        veenaRef.current.rotation.y,
        rotY + floatingRot,
        smooth
      );

    veenaRef.current.rotation.x =
      THREE.MathUtils.lerp(
        veenaRef.current.rotation.x,
        rotX,
        smooth
      );

    veenaRef.current.rotation.z =
      THREE.MathUtils.lerp(
        veenaRef.current.rotation.z,
        rotZ,
        smooth
      );

    veenaRef.current.position.x =
      THREE.MathUtils.lerp(
        veenaRef.current.position.x,
        posX,
        smooth
      );

    veenaRef.current.position.y =
      THREE.MathUtils.lerp(
        veenaRef.current.position.y,
        posY + floatingY,
        smooth
      );

    veenaRef.current.position.z =
      THREE.MathUtils.lerp(
        veenaRef.current.position.z,
        posZ,
        smooth
      );

    veenaRef.current.scale.x =
      THREE.MathUtils.lerp(
        veenaRef.current.scale.x,
        scale,
        smooth
      );

    veenaRef.current.scale.y =
      THREE.MathUtils.lerp(
        veenaRef.current.scale.y,
        scale,
        smooth
      );

    veenaRef.current.scale.z =
      THREE.MathUtils.lerp(
        veenaRef.current.scale.z,
        scale,
        smooth
      );

    /* =========================================================
       CINEMATIC CAMERA
    ========================================================= */

    const camX =
      (p - 0.5) * 1.1;

    const camY =
      0.4 +
      Math.sin(
        p * Math.PI
      ) *
        0.18;

    const camZ =
      3.8 - p * 0.65;

    camera.position.x =
      THREE.MathUtils.lerp(
        camera.position.x,
        camX,
        smooth
      );

    camera.position.y =
      THREE.MathUtils.lerp(
        camera.position.y,
        camY,
        smooth
      );

    camera.position.z =
      THREE.MathUtils.lerp(
        camera.position.z,
        camZ,
        smooth
      );

    /* SMOOTH LOOK */

    camera.lookAt(
      0,
      -0.05,
      0
    );
  });

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <group ref={veenaRef}
    >
      <primitive
        object={clonedScene}
        scale={[0.1, 0.1, 0.1]}
      />
    </group>
  );
};

/* =========================================================
   PRELOAD MODEL
========================================================= */

useGLTF.preload(veenaModel);

export default VeenaScene;