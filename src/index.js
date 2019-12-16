import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './index.sass';
import "bootstrap/dist/css/bootstrap.css";
import App from './components/app/app';

ReactDOM.render(
  <div>
    <Router>
      <App />
    </Router>
  </div>, 
document.getElementById('root'));
