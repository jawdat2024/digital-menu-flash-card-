import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const CACHE_VERSION = 'v3'; // Increment this to clear cache
const currentVersion = localStorage.getItem('cartel_cache_version');
if (currentVersion !== CACHE_VERSION) {
  const keysToRemove: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('cartel_inventory_')) {
      keysToRemove.push(key);
    }
  }
  keysToRemove.forEach(key => localStorage.removeItem(key));
  localStorage.setItem('cartel_cache_version', CACHE_VERSION);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);