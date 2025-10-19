import React from 'react';
import { createRoot } from 'react-dom/client';
import './i18n'; // يجب أن يكون قبل استيراد App
import App from './App.tsx';
import './index.css';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();