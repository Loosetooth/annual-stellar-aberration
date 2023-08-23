import { Canvas } from '@react-three/fiber'
import { Earth } from './components/Earth';
import { Stats, OrbitControls, GizmoHelper, GizmoViewport, PerspectiveCamera } from '@react-three/drei'
import { Sun } from './components/Sun';
import { Arrows } from './components/Arrows/Arrows';
import * as THREE from 'three'
import { EarthOrbit } from './components/EarthOrbit';
import { useEffect, useRef } from 'react';
import { Legend } from './components/Legend';

function App() {
  const paused = useRef(false)

  // detect space bar to pause
  useEffect(() => {
    const onSpaceBar = (event) => {
      if (event.key === ' ') {
        paused.current = !paused.current
      }
    };
    window.addEventListener('keydown', onSpaceBar);

    return () => {
      window.removeEventListener('keydown', onSpaceBar);
    };
  }, []);

  return (
    <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
      <Legend />
      <Canvas camera={{ position: [100, 100, 100] }}>
        <ambientLight intensity={1} />
        {/* <pointLight color="white" position={[0, 0, 0]} intensity={1} /> */}
        {/* <directionalLight color="white" position={[0, 0, 5]} /> */}
        <Sun paused={paused} />
        <Earth paused={paused} />
        <EarthOrbit />
        <Arrows paused={paused} />
        <OrbitControls />
        {/* <Stats /> */}
        <GizmoHelper
          alignment="top-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
          {/* alternative: <GizmoViewcube /> */}
        </GizmoHelper>
      </Canvas>
    </div>
  );
}

export default App;
