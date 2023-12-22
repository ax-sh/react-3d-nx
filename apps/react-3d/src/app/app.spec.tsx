import { render } from '@testing-library/react';

import App from './app';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <App />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );
    expect(getByText(/Home/gi)).toBeTruthy();
  });
});
