import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'client' for createRoot
import App from './App'; // No need for .tsx extension here usually

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);