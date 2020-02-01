import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./basics/Main";
import Menu from "./basics/Menu";
import Archive from "./Archive";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Profile from "./user/Profile";
import Sunday from "./notes/sundayPg";
import PrivateRoute from "./auth/PrivateRoute";

const Router = () => (
  <div>
    <Menu />
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />

      <PrivateRoute exact path="/user/:userId" component={Profile} />
      <PrivateRoute exact path="/sunday/:userId" component={Sunday} />

      <Route exact path="/archive" component={Archive}></Route>
    </Switch>
  </div>
);

export default Router;
