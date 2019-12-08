import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import MyCalendar from "./user/MyCalendar";
// import Signup from "";
// import Signin from "";

// import Profile from "";

const MainRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/mycalendar" component={MyCalendar} />
      {/* <Route exact path="/" component={} />
      <Route exact path="/" component={} />
      <Route exact path="/" component={} /> */}
    </Switch>
  </div>
);
export default MainRouter;
