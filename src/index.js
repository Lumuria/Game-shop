import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // لا تكتب .tsx
import './i18n'; // الترجمة يجب أن تُستورد قبل App
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

if (!container) {
  throw new Error("Root container not found. Make sure your HTML has a <div id='root'></div>");
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 reportWebVitals();
