import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
    {
      title: "BusTracker",
      url: "https://github.com/Francklin9999/BusTracker",
      description: "Quick description adfskjhdgfkdjhfgkdjhfgldkfjglkjdflgkjdfg",
      img: "projects/BusTracker.png",
      technologies: "Go, Gin, Angular, Typescript, Docker, AWS, Websocket, REST APIs",
    },
    {
      title: "FlightScraper",
      url: "https://github.com/Francklin9999/FlightScraper",
      description: "Quick description adfskjhdgfkdjhfgkdjhfgldkfjglkjdflgkjdfg",
      img: "projects/FlightScraper.png",
      technologies: "NodeJS, ExpressJS, MongoDB, Puppeteer, NextJS, React, Typescript, Docker, REST APIs",
    },
    {
      title: "AI Powered WebScraper",
      url: "https://github.com/Francklin9999",
      description: "Quick description adfskjhdgfkdjhfgkdjhfgldkfjglkjdflgkjdfg",
      img: "projects/NotDone.png",
      technologies: "Java, SpringBoot, Selenium, Ollama, LLMs, Docker, REST APIS",
    },
    {
      title: "Sorting Algorithm",
      url: "https://github.com/Francklin9999/SortingAlgorithm_Java",
      description: "Quick description adfskjhdgfkdjhfgkdjhfgldkfjglkjdflgkjdfg",
      img: "projects/SortingAlgo.png",
      technologies: "Java, BubbleSort, HeapSort, InsertionSort, MergeSort, SelectionSort, TreeSort",
    },
    {
      title: "Data Dashboard",
      url: "https://github.com/Francklin9999/Data_Dashboard_Python",
      description: "Quick description adfskjhdgfkdjhfgkdjhfgldkfjglkjdflgkjdfg",
      img: "projects/Dashboard.png",
      technologies: "Python, Pandas, Dash, Plotly, StatsModels, Seaborn, Excel",
    },
    {
      title: "PathFinder",
      url: "https://github.com/Francklin9999/PathFinder_Python",
      description: "Quick description adfskjhdgfkdjhfgkdjhfgldkfjglkjdflgkjdfg",
      img: "projects/PathFinder.png",
      technologies: "Python, Pygame",
    },
];

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

const scaleFactor = 4;

export default function Projects() {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 5.6 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5 * scaleFactor,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? -Math.PI / 9 : -Math.PI / 8,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props} scale={[scaleFactor, scaleFactor, 1]}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2.1, 1.2, 1]}
        url={project.img}
        toneMapped={false}
        position-y={0.3}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};