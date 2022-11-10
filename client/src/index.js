// Global Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/App.js';
import Router from './components/Router.js';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Router/>
</BrowserRouter>
);