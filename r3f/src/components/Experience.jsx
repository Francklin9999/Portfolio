import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { CameraControls, Environment, Gltf } from '@react-three/drei';
import { Avatar } from './Avatar';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

export default function Experience() {
  const planeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ camera, raycaster }) => {
    if (planeRef.current) {
      const intersects = raycaster.intersectObject(planeRef.current);
      setHovered(intersects.length > 0);
    }
  });

  const handleClick = () => {
    if (hovered) {
      window.location.href = 'https://www.example.com';
    }
  };

  useEffect(() => {
    const handlePointerDown = (event) => {
      event.stopPropagation();
      handleClick();
    };

    const canvas = planeRef.current;
    canvas.addEventListener('pointerdown', handlePointerDown);
    return () => canvas.removeEventListener('pointerdown', handlePointerDown);
  }, [hovered]);

  return (
    <>
      <CameraManager />
      <Environment preset="sunset" />
      <ambientLight intensity={0.8} color="pink" />
      <Gltf src="models/test1.glb" position={[0, -2, 0]} rotation={[0.2, 1.58, -0.2]} />
      <Avatar />
      <FloatingPlane ref={planeRef} />
    </>
  );
}

const CameraManager = () => {
  return (
    <CameraControls
      minZoom={1}
      maxZoom={3}
      minPolarAngle={Math.PI / 2} 
      maxPolarAngle={Math.PI / 2} 
      minAzimuthAngle={-Math.PI / 4.5} 
      maxAzimuthAngle={Math.PI / 4.5} 
      enablePan={false} 
      enableRotate={true} 
      enableZoom={true} 
      zoomSpeed={1} 
      polarRotateSpeed={0} 
      azimuthalRotateSpeed={0.3} 
      mouseButtons={{
        left: 1, 
        wheel: 1,
      }}
      touches={{
        one: null, 
        two: 1, 
      }}
    />
  );
}

const FloatingPlane = React.forwardRef((props, ref) => {
  const texture = new THREE.CanvasTexture(createCanvasWithText());
  const navigate = useNavigate();

  return (
    <mesh
      ref={ref}
      position={[-1, 2, 0]} 
      rotation={[0, 0, 0]} 
      onClick={() => navigate('/projects')}
    >
      <planeGeometry args={[0.5, 0.5]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
});

const createCanvasWithText = () => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 512;
  canvas.height = 256;
  
  context.font = 'bold 24px Arial';
  context.textAlign = 'center';
  context.fillText('Click Me!', canvas.width / 2, canvas.height / 2);
  
  return canvas;
};
