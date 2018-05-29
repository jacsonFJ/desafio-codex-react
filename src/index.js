import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

window.Materialize = M;

ReactDOM.render(
  <BrowserRouter><Route component={App}/></BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
