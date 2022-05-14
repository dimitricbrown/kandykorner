import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { KandyKorner } from "./components/KandyKorner"
import reportWebVitals from './reportWebVitals';

export const API = "http://localhost:8088"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <KandyKorner />
  </React.StrictMode>
);

reportWebVitals();
