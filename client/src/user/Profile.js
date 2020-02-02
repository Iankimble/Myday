import React, { Component } from "react";
import { isAuthenticated } from "../auth/Index";
import { read } from "./User-API";
import { Jumbotron, Button, Card, Row, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";

import {
  allSunday,
  allMonday,
  allTuesday,
  allWednesday,
  allThursday,
  allFriday,
  allSaturday
} from "../notes/note-api";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      redirectToSignin: false,
      error: "",
      sunday: [],
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: []
    };
  }

  componentDidMount() {
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;

    allSunday(userId, token).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ sunday: data });
      }
      console.log(this.state.sunday);
    });

    allMonday(userId, token).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ monday: data });
      }
      console.log(this.state.monday);
    });

    allTuesday(userId, token).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ tuesday: data });
      }
      console.log(this.state.tuesday);
    });

    allWednesday(userId, token).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ wednesday: data });
      }
      console.log(this.state.wednesday);
    });

    allThursday(userId, token).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ thursday: data });
      }
      console.log(this.state.thursday);
    });

    allFriday(userId, token).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ friday: data });
      }
      console.log(this.state.friday);
    });

    allSaturday(userId, token).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ saturday: data });
      }
      console.log(this.state.saturday);
    });
  }

  render() {
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

    let thu = moment()
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

    const {
      sunday,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday
    } = this.state;
    return (
      <div
        style={{
          marginLeft: "25%",
          marginRight: "25%",
          textAlign: "center"
        }}
      >
        <h1>Today is your Day!</h1>
        <h4> Create a note corresponding to an task you have for the week</h4>
        <Card style={{ margin: "20px" }}>
          <Card.Header as="h5">{sun}</Card.Header>
          <Card.Body>
            <Card.Title>{sunday.length} notes</Card.Title>
            <Card.Text></Card.Text>

            <Link to={`/sunday/${isAuthenticated().user._id}`}>
              <Button variant="primary">View all notes</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ margin: "20px" }}>
          <Card.Header as="h5">{mon}</Card.Header>
          <Card.Body>
            <Card.Title>{monday.length} notes</Card.Title>
            <Card.Text></Card.Text>
            <Link to={`/monday/${isAuthenticated().user._id}`}>
              <Button variant="primary">View all notes</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ margin: "20px" }}>
          <Card.Header as="h5">{tue}</Card.Header>
          <Card.Body>
            <Card.Title>{tuesday.length} notes</Card.Title>
            <Card.Text></Card.Text>
            <Link to={`/tuesday/${isAuthenticated().user._id}`}>
              <Button variant="primary">View all notes</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ margin: "20px" }}>
          <Card.Header as="h5">{wed}</Card.Header>
          <Card.Body>
            <Card.Title>{wednesday.length} notes</Card.Title>
            <Card.Text></Card.Text>
            <Link to={`/wednesday/${isAuthenticated().user._id}`}>
              <Button variant="primary">View all notes</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ margin: "20px" }}>
          <Card.Header as="h5">{thu}</Card.Header>
          <Card.Body>
            <Card.Title>{thursday.length} notes</Card.Title>
            <Card.Text></Card.Text>
            <Link to={`/thursday/${isAuthenticated().user._id}`}>
              <Button variant="primary">View all notes</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ margin: "20px" }}>
          <Card.Header as="h5">{fri}</Card.Header>
          <Card.Body>
            <Card.Title>{friday.length} notes</Card.Title>
            <Card.Text></Card.Text>
            <Link to={`/friday/${isAuthenticated().user._id}`}>
              <Button variant="primary">View all notes</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ margin: "20px" }}>
          <Card.Header as="h5">{sat}</Card.Header>
          <Card.Body>
            <Card.Title>{saturday.length} notes</Card.Title>
            <Card.Text></Card.Text>
            <Link to={`/saturday/${isAuthenticated().user._id}`}>
              <Button variant="primary">View all notes</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Profile;
