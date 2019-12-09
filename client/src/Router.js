import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./main/Home";
import Menu from "./main/Menu";
import Archive from "./Archive";

const Router = () => (
  <div>
    <Menu />
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/archive" component={Archive}></Route>
    </Switch>
  </div>
);

export default Router;
