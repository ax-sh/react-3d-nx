import React, { useRef, useState } from 'react';
import { MeshProps, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Mesh } from 'three';
import { Studio } from '@react-3d-nx/core';

function Box(props: MeshProps) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>(null!);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

function Viewer() {
  const { camera } = useThree();
  console.log(camera);
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <OrbitControls
        onChange={() => {
          console.log(camera.position);
        }}
      />
    </>
  );
}

export default function Page() {
  return (
    <section className="bg-black min-h-screen h-screen">
      <Studio>
        <Viewer />
      </Studio>
    </section>
  );
}
