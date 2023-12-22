import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
initialize({
  serviceWorker: { url: '../public/mockServiceWorker.js' },
  // onUnhandledRequest(request, print) {
  //   // Ignore any requests containing "cdn.com" in their URL.
  //   if (request.url.includes('cdn.com')) {
  //     return;
  //   }
  //
  //   // Otherwise, print an unhandled request warning.
  //   print.warning();
  // },
});

const preview = {
  parameters: {
    // your other code...
  },
  // Provide the MSW addon loader globally
  loaders: [mswLoader],
};

export default preview;
