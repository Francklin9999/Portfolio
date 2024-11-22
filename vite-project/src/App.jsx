import './App.css'
import { Suspense, lazy } from 'react'
import reactLogo from './assets/react.svg'

// Works also with SSR as expected
const Card = lazy(() => import('./Card'))
import { createContext, useEffect, useLayoutEffect, useRef, useState } from 'react';

function App() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [width, setWidth] = useState(null);

  const cameraPosition = [0, 2, 4.5];
  const cameraRotation = [0, 0, 0];
  const cameraRef = useRef();

  useEffect(() => {
    const width = window.innerWidth;
    setWidth(width);
  }, [])

  return (
    <Router>
      
    </Router>
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>

    //   <Suspense fallback={<p>Loading card component...</p>}>
    //     <Card />
    //   </Suspense>

    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
