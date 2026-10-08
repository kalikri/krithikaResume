import React from 'react';
import { createRoot } from 'react-dom/client';
import ResumeApp from './ResumeApp.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResumeApp />
  </React.StrictMode>,
);