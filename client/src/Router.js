import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./basics/Main";
import Menu from "./basics/Menu";
import Archive from "./Archive";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Profile from "./user/Profile";
import Sunday from "./notes/sundayPg";
import Monday from "./notes/mondayPg";
import Tuesday from "./notes/tuesdayPg";
import Wednesday from "./notes/wednesdayPg";
import Thursday from "./notes/thursdayPg";
import Friday from "./notes/fridayPg";
import Saturday from "./notes/saturdayPg";

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
      <PrivateRoute exact path="/monday/:userId" component={Monday} />
      <PrivateRoute exact path="/tuesday/:userId" component={Tuesday} />
      <PrivateRoute exact path="/wednesday/:userId" component={Wednesday} />
      <PrivateRoute exact path="/thursday/:userId" component={Thursday} />
      <PrivateRoute exact path="/friday/:userId" component={Friday} />
      <PrivateRoute exact path="/saturday/:userId" component={Saturday} />

      <Route exact path="/archive" component={Archive}></Route>
    </Switch>
  </div>
);

export default Router;
