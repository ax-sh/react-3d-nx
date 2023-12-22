import React, { PropsWithChildren } from 'react';
import { Canvas } from '@react-three/fiber';

export function Studio({ children }: PropsWithChildren) {
  return <Canvas className="w-full h-full">{children}</Canvas>;
}
