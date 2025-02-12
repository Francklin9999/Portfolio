import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useLayoutEffect, useRef } from "react";

export const projects = [
  {
    title: "PathFinder",
    url: "https://github.com/Francklin9999/PathFinder_Python",
    description: "A visual representation of pathfinding algorithms using Python and Pygame.",
    img: "projects/PathFinder.png",
    technologies: "Python, Pygame",
  },
  {
    title: "FlightScraper",
    url: "https://github.com/Francklin9999/FlightScraper",
    description: "A web scraper that compares flight prices across multiple websites for better deals.",
    img: "projects/FlightScraper.png",
    technologies: "NodeJS, ExpressJS, MongoDB, Puppeteer, NextJS, React, Typescript, Docker, REST APIs",
  },
  {
    title: "Sorting Algorithm",
    url: "https://github.com/Francklin9999/SortingAlgorithm_Java",
    description: "A Java application showcasing the performance of different sorting algorithms.",
    img: "projects/SortingAlgo.png",
    technologies: "Java, BubbleSort, HeapSort, InsertionSort, MergeSort, SelectionSort, TreeSort",
  },
  {
    title: "PolyHacks 2025",
    url: "https://github.com/Francklin9999/Polyhacks2025",
    description: "24 hours to build an informative web app about space, explore our solar system and create your own planet.",
    img: "projects/PolyHacks2025.png",
    technologies: "JavaScript, React, ThreeJS, Tailwind CSS, Vite, Vercel",
  },
  {
    title: "Datathon 2024",
    url: "https://github.com/Francklin9999/Datathon_2024_PolyMTL",
    description: "24 hours to build a financial stock analysis platform using AI to predict the market.",
    img: "projects/Datathon2024.png",
    technologies: "Python, AWS, EC2, GENAI, Streamlit, Langchain, Finance APIs",
  },
  {
    title: "BusTracker",
    url: "https://github.com/Francklin9999/BusTracker",
    description: "Real-time bus tracking app using WebSockets to show live positions of buses on a map.",
    img: "projects/BusTracker.png",
    technologies: "Go, Gin, Angular, Typescript, Docker, AWS, Websocket, REST APIs",
  },
  {
    title: "AI Powered WebScraper",
    url: "https://github.com/Francklin9999/AIScraperAndGenerator",
    description: "An AI-powered web scraper that extracts information from any website and generates a custom image based on the scraped content.",
    img: "projects/AIWebScraper.png",
    technologies: "Python, Selenium, Ollama, FluxAi, LLMs, GenAI",
  },
  {
    title: "Data Dashboard",
    url: "https://github.com/Francklin9999/Data_Dashboard_Python",
    description: "Interactive dashboard displaying visualized data analytics and trends.",
    img: "projects/Dashboard.png",
    technologies: "Python, Pandas, Dash, Plotly, StatsModels, Seaborn, Excel",
  },
];

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

let scaleFactor = 2;

export default function Projects() {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  useLayoutEffect(() => {
    if(window.innerWidth > 768) {
      scaleFactor = 4;
    }
  })

  return (
    <group position-y={-viewport.height * 6 + 3}>
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
        fontSize={0.15}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.08}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};