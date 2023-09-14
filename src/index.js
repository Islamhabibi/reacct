// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);