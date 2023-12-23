import React from 'react';
import { Sphere, Plane } from '@react-three/drei';

import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Basic() {
  return (
    <>
      {/* <Plane args={[2, 2]} />
      <Sphere args={[1, 32, 32]}>
        <meshBasicMaterial attach="material" color="red" />
      </Sphere> */}
      <mesh
        visible
        userData={{ test: 'hello' }}
        position={[0, 0, 0]}
        castShadow
      >
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
    </>
  );
}

const MainScene = () => {
  return (
    <section className={'min-h-screen h-screen w-screen'}>
      <Canvas>
        <React.Suspense fallback={null}>
          {/* <ambientLight /> */}

          <Basic />
          <PerspectiveCamera makeDefault position={[0, 0, 15]}>
            <directionalLight position={[5, 5, 4]} intensity={0.2} />
            <directionalLight
              position={[-5, -5, 0]}
              color="green"
              intensity={0.2}
            />
            <OrbitControls />
          </PerspectiveCamera>
        </React.Suspense>
      </Canvas>
    </section>
  );
};

export default MainScene;
