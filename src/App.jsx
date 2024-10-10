import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import Home from './home';
import Interface from './components/Interface';
import { Scroll, ScrollControls } from '@react-three/drei';
import { createContext, Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { MotionConfig } from "framer-motion";
import ScrollManager from './ScrollManager';
import Menu from './components/Menu';
import Cursor from './components/Cursor';
import { Leva } from 'leva';
import { framerMotionConfig } from './config';
import LoadingScreen from './components/LoadingScreen';
import Projects from './components/Projects';

export const WindowWidthContext = createContext();

function App() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [width, setWidth] = useState(null);
  const [cameraPosition, setCameraPosition] = useState([0, 2, 4.5]);
  const [cameraRotation, setCameraRotation] = useState([0, 0, 0]);
  const cameraRef = useRef();

  useLayoutEffect(() => {
    const width = window.innerWidth;
    setWidth(width);
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={
          <>
            <LoadingScreen started={started} setStarted={setStarted} />
            <MotionConfig transition={{
              ...framerMotionConfig,
            }}>
              <WindowWidthContext.Provider value={width}>
              <Canvas shadows camera={{ position: cameraPosition, rotation: cameraRotation, fov: 100 }} onCreated={({ camera }) => (cameraRef.current = camera)}>
                <color attach="background" args={["#e6e7ff"]} />
                <ScrollControls pages={8.5} damping={0.1} >
                  <ScrollManager section={section} onSectionChange={setSection}/>
                  <Scroll>
                    {<Experience section={section} menuOpened={menuOpened}/>}
                    <Projects />
                  </Scroll>
                  <Scroll html>
                    {started && <Interface setSection={setSection} />}
                  </Scroll>
                </ScrollControls>
              </Canvas>
              <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
              <Cursor />
              </WindowWidthContext.Provider>
            </MotionConfig>
            <Leva hidden />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
