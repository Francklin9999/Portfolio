import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import Project from './components/Project';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Canvas shadows camera={{ position: [0, 2, 4.5] }}>
            <Experience />
          </Canvas>
        } />
        <Route path="/projects" element={
          <Project />
        } />
      </Routes>
    </Router>
  );
}

export default App;
