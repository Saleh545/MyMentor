import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./Sass/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter  future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}>
    <App />
  </BrowserRouter>,
);
