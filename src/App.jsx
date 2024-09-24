import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import Home from './home';
import Interface from './components/Interface';
import { Scroll, ScrollControls } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import { MotionConfig } from "framer-motion";
import ScrollManager from './ScrollManager';
import Menu from './components/Menu';
import Cursor from './components/Cursor';
import { Leva } from 'leva';
import { framerMotionConfig } from './config';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

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
              <Canvas shadows camera={{ position: [0, 2, 4.5], fov: 100 }}>
                <color attach="background" args={["#e6e7ff"]} />
                <ScrollControls pages={8} damping={0.1} >
                  <ScrollManager section={section} onSectionChange={setSection}/>
                  <Scroll>
                    <Suspense>
                      {started && <Experience section={section} menuOpened={menuOpened}/>}
                    </Suspense>
                  </Scroll>
                  <Scroll html>
                    {started && <Interface setSection={setSection} />}
                  </Scroll>
                </ScrollControls>
              </Canvas>
              <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
              <Cursor />
            </MotionConfig>
            <Leva hidden />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
