import React from "react";
import {Route, Switch} from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import OurCoffee from "../pages/ourCoffee/ourCoffee";
import Pleasure from "../pages/pleasure/pleasure";

const App = () => {
  return(
    <>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>

        <Route path="/our-coffee">
          <OurCoffee/>
        </Route>

        <Route path="/pleasure">
          <Pleasure/>
        </Route>
      </Switch>
    </>
  );
};

export default App;