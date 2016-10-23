import React from 'react';
import { render } from 'react-dom';
import App from './App';

import './global.css';

function getRoute() {
  return window.location.hash.substring(0);
}

console.log(getRoute());

function renderApp() {
  render(
    <App />,
    document.getElementById('root')
  );
}

renderApp();
