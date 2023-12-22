import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
initialize({ serviceWorker: { url: '../public/mockServiceWorker.js' } });

const preview = {
  parameters: {
    // your other code...
  },
  // Provide the MSW addon loader globally
  loaders: [mswLoader],
};

export default preview;
