// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from '~react-pages';
import { Loader } from './loader';

export function App() {
  return <Suspense fallback={<Loader />}>{useRoutes(routes)}</Suspense>;
}

export default App;
