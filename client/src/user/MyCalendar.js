import React, { Component } from "react";
import moment from "moment";
class MyCalendar extends Component {
  constructor() {
    super();
    this.state = {
      sun: [],
      mon: [],
      tue: [],
      wed: [],
      thur: [],
      fri: [],
      sat: []
    };
  }

  week() {
    let sun = moment()
      .startOf("week")
      .format("dddd, MMMM Do YYYY");

    let mon = moment()
      .startOf("week")
      .add(1, "d")
      .format("dddd, MMMM Do YYYY");

    let tue = moment()
      .startOf("week")
      .add(2, "d")
      .format("dddd, MMMM Do YYYY");

    let wed = moment()
      .startOf("week")
      .add("3", "d")
      .format("dddd, MMMM Do YYYY");

    let thur = moment()
      .startOf("week")
      .add("4", "d")
      .format("dddd, MMMM Do YYYY");

    let fri = moment()
      .startOf("week")
      .add("5", "d")
      .format("dddd, MMMM Do YYYY");

    let sat = moment()
      .endOf("week")
      .format("dddd, MMMM Do YYYY");
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h2>sun</h2>
        <h2>mon</h2>
        <h2>tue</h2>
        <h2>wed</h2>
        <h2>thu</h2>
        <h2>fri</h2>
        <h2>sat</h2>
      </div>
    );
  }
}

export default MyCalendar;
