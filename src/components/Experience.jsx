import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, CameraControls, Environment, Gltf, useScroll } from '@react-three/drei';
import { motion } from "framer-motion-3d";
import { framerMotionConfig } from "../config";
import { animate, useMotionValue } from 'framer-motion';
import { Avatar } from './Avatar';
import Projects from './Projects';
import Scene from './Scene';

export default function Experience(props) {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9));

  const [section, setSection] = useState(0);
  
  let firstRender = true;

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? 1 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 600);
  }, [section]);

  // useFrame((state) => {
  //   if (!firstRender) {
  //     state.camera.position.x = cameraPositionX.get();
  //     state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  //   } else {
  //     firstRender = false;
  //   }
  // });

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.8} color="pink" />
      <motion.group
        // position={[1.5, 2, 3]}
        // scale={[0.9, 0.9, 0.9]}
        // rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Scene />
        <Avatar animation={characterAnimation}/>
      </motion.group>
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
      </motion.group>
      <Projects />
    </>
  );
}

