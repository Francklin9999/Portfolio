import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import Home from './home';
import Interface from './components/Interface';
import { Scroll, ScrollControls } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { MotionConfig } from "framer-motion";
import ScrollManager from './ScrollManager';
import Menu from './components/Menu';
import Cursor from './components/Cursor';
import { Leva } from 'leva';

function App() {
  const [section, setSection] = useState(0);
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
            <MotionConfig transition={{
              type: "spring",
              mass: 5,
              stiffness: 500,
              damping: 50,
              restDelta: 0.0001,
            }}>
              <Canvas shadows camera={{ position: [0, 2, 4.5], fov: 100 }}>
                <ScrollControls pages={4} damping={0.1}>
                  <ScrollManager section={section} onSectionChange={setSection}/>
                  <Scroll>
                    <Experience section={section} menuOpened={menuOpened}/>
                  </Scroll>
                  <Scroll html>
                    <Interface />
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
