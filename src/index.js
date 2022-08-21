import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Context/Settings';

import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SettingsProvider>
    <App />
  </SettingsProvider>
);
