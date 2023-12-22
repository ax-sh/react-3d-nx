import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from '~react-pages';
import { Loader } from '@react-3d-nx/core';

export function App() {
  return <Suspense fallback={<Loader />}>{useRoutes(routes)}</Suspense>;
}

export default App;
