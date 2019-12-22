import React from "react";
import {Route, Switch} from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import OurCoffee from "../pages/ourCoffee/ourCoffee";
import Pleasure from "../pages/pleasure/pleasure";
import Error from "../error/error";
import CurrentCoffeePage from "../pages/currentCoffeePage";

const App = () => {
  return(
    <>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>

        <Route exact path="/our-coffee">
          <OurCoffee/>
        </Route>

        <Route path="/pleasure">
          <Pleasure/>
        </Route>

        <Route path="/our-coffee/:name"
          render={({match}) => {
            const {name} = match.params;
            const replaceName = name.replace(":", "");
            return <CurrentCoffeePage name={replaceName}/>;
          }}/>

        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </>
  );
};

export default App;