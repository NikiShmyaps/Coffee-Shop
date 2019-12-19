import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './index.sass';
import "bootstrap/dist/css/bootstrap.css";
import App from './components/app/app';
import { Provider } from "react-redux";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import Service from "./services/coffee-service";
import ServiceContext from "./components/serviceСontext/serviceСontext";
import store from "./store";

const service = new Service();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ServiceContext.Provider value={service}>
        <Router>
          <App />
        </Router>  
      </ServiceContext.Provider>
    </ErrorBoundry>
  </Provider>, 
document.getElementById('root'));
