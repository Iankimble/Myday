import React, { Component } from "react";
import { isAuthenticated } from "../auth/Index";
import { read } from "./User-API";
import { Jumbotron, Button, Card, Row, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import { allSunday } from "../notes/note-api";

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
  }

  render() {
    const { sunday } = this.state;
    return (
      <div
        style={{
          marginLeft: "25%",
          marginRight: "25%",
          textAlign: "center"
        }}
      >
        <Card style={{ margin: "20px" }}>
          <Card.Header as="h5">Sunday</Card.Header>
          <Card.Body>
            <Card.Title>{sunday.length}</Card.Title>
            <Card.Text></Card.Text>

            <Link to={`/sunday/${isAuthenticated().user._id}`}>
              <Button variant="primary">View all notes</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ margin: "20px" }}>
          <Card.Header as="h5">Monday</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">View all notes</Button>
          </Card.Body>
        </Card>

        <Card style={{ margin: "20px" }}>
          <Card.Header as="h5">Tuesday</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">View all notes</Button>
          </Card.Body>
        </Card>

        <Card style={{ margin: "20px" }}>
          <Card.Header as="h5">Wednesday</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">View all notes</Button>
          </Card.Body>
        </Card>

        <Card style={{ margin: "20px" }}>
          <Card.Header as="h5">Thursday</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">View all notes</Button>
          </Card.Body>
        </Card>

        <Card style={{ margin: "20px" }}>
          <Card.Header as="h5">Friday</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">View all notes</Button>
          </Card.Body>
        </Card>

        <Card style={{ margin: "20px" }}>
          <Card.Header as="h5">Saturday</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">View all notes</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Profile;
