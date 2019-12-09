import React, { Component } from "react";
import MyCalander from "./MyCalendar";

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <MyCalander />
      </div>
    );
  }
}
export default Profile;
