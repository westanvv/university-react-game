import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'src/components/App';
import Dashboard from 'src/components/Dashboard';

import 'src/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <App>
    <Dashboard />
  </App>
);
