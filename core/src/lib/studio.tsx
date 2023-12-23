import React from 'react';
import { Canvas, CanvasProps } from '@react-three/fiber';

export function Studio({ children }: CanvasProps) {
  return (
    <Canvas className="w-full h-full">
      <React.Suspense fallback={null}>{children}</React.Suspense>
    </Canvas>
  );
}
