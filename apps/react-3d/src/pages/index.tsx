import React from 'react';

import { Studio } from '@react-3d-nx/core';
import { Viewer } from '../app/ui/viewer';

export default function Page() {
  return (
    <section className="bg-black min-h-screen h-screen">
      <Studio>
        <Viewer />
      </Studio>
    </section>
  );
}
