import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home"; // Example component
import About from "./About"; // Example component

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* Add more routes as needed */}
    </Switch>
  );
};

export default Main;
