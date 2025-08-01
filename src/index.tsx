import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // هذا لازم يشير لـ App.tsx تلقائيًا
import './i18n'; // مهم لتفعيل الترجمة

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
