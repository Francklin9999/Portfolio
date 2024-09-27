import React, { useState, useEffect, useContext } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment,  useScroll } from '@react-three/drei';
import { motion } from "framer-motion-3d";
import { framerMotionConfig } from "../config";
import { animate, useMotionValue } from 'framer-motion';
import { Avatar } from './Avatar';
import Projects from './Projects';
import Scene from './Scene';
import { WindowWidthContext } from '../App';

export default function Experience(props) {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();
  const width = useContext(WindowWidthContext);

  const [section, setSection] = useState(0);

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

  useEffect(() => {
    if (width < 768 && section === 0) {
      animate(cameraPositionX, 1, {
        ...framerMotionConfig,
      });
      animate(cameraLookAtX, -5, {
        ...framerMotionConfig,
      });
    } else {
      animate(cameraPositionX, 0, {
        ...framerMotionConfig,
        });
        animate(cameraLookAtX, 0, {
          ...framerMotionConfig,
          });
    }
  }, [width, section, menuOpened]);

  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  const [positionAvatar, setPositionAvatar] = useState([-0.7, -1.0, 1]);
  const [rotationAvatar, setRotationAvatar] = useState([0, 0, -1.5]);
  const [scaleAvatar, setScaleAvatar] = useState([1.7, 1.8, 1.5]);

  useEffect(() => {
    if (section !== 0) {
      setPositionAvatar([2, -46, 0]);
      setRotationAvatar([0, 0, -0.8]);
      setScaleAvatar([1.7, 1.8, 1.5]);
      setCharacterAnimation("Idle");
    } else {
      setPositionAvatar([-0.7, -1.0, 1]);
      setRotationAvatar([0, 0, -1.5]);
      setScaleAvatar([1.7, 1.8, 1.5]);
      setCharacterAnimation("Typing");
    }
  }, [section]);

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
      <ambientLight intensity={0.1} color="pink" />
      <motion.group
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Scene />
        <Avatar animation={characterAnimation} positionAvatar={positionAvatar} rotationAvatar={rotationAvatar} scaleAvatar={scaleAvatar} />
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
      {/* <Projects /> */}
      
    </>
  );
}

