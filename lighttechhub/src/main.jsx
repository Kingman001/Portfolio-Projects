import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // optional, create if you use it

const el = document.getElementById('root');
if (!el) throw new Error('Root element not found');
createRoot(el).render(<App />);
