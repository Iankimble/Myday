import React, { Component } from "react";
import moment from "moment";
import {
  Card,
  Button,
  CardColumns,
  Row,
  Col,
  Container
} from "react-bootstrap";

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

  componentDidMount() {}

  // Logic to call data from back end and display # of notes for each
  // day

  // Work on logic for flexibility
  // Logic that highlights current day

  // Button to API Post to create new note for each day

  // Button to API GET to get all notes for each day

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

    return (
      <div
        style={{
          // marginLeft: "20px",
          // marginRight: "20px",
          justifyContent: "center",
          alignContent: "center",
          display: "flex"
        }}
      >
        <Container
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            justifyContent: "center",
            alignContent: "center",
            display: "flex"
          }}
        >
          <Row>
            <CardColumns>
              <Card
                style={{
                  backgroundColor: "lightblue",
                  border: "black solid 3px",
                  padding: "2px",
                  marginLeft: "5px"
                }}
              >
                <Card.Img />
                <Card.Body>
                  <Card.Title>
                    <h2 style={{ textAlign: "center" }}>{sun}</h2>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div style={{}}>
                    <Button
                      variant="primary"
                      style={{
                        backgroundColor: "red",
                        border: "none"
                      }}
                    >
                      Create Note
                    </Button>
                    <Button variant="primary" style={{}}>
                      View notes
                    </Button>
                  </div>
                </Card.Body>
              </Card>

              <Card
                style={{
                  backgroundColor: "lightblue",
                  border: "black solid 3px",
                  padding: "2px",
                  margin: "5px"
                }}
              >
                <Card.Img />
                <Card.Body>
                  <Card.Title>
                    <h2 style={{ textAlign: "center" }}>{mon}</h2>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Create Note</Button>
                  <Button variant="primary">View notes</Button>
                </Card.Body>
              </Card>

              <Card
                style={{
                  backgroundColor: "lightblue",
                  border: "black solid 3px",
                  padding: "2px",
                  margin: "5px"
                }}
              >
                <Card.Img />
                <Card.Body>
                  <Card.Title>
                    <h2 style={{ textAlign: "center" }}>{tue}</h2>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Create Note</Button>
                  <Button variant="primary">View notes</Button>
                </Card.Body>
              </Card>

              <Card
                style={{
                  backgroundColor: "lightblue",
                  border: "black solid 3px",
                  padding: "2px",
                  margin: "5px"
                }}
              >
                <Card.Img />
                <Card.Body>
                  <Card.Title>
                    <h2 style={{ textAlign: "center" }}>{wed}</h2>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Create Note</Button>
                  <Button variant="primary">View notes</Button>
                </Card.Body>
              </Card>

              <Card
                style={{
                  backgroundColor: "lightblue",
                  border: "black solid 3px",
                  padding: "2px",
                  margin: "5px"
                }}
              >
                <Card.Img />
                <Card.Body>
                  <Card.Title>
                    <h2 style={{ textAlign: "center" }}>{thu}</h2>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Create Note</Button>
                  <Button variant="primary">View notes</Button>
                </Card.Body>
              </Card>

              <Card
                style={{
                  backgroundColor: "lightblue",
                  border: "black solid 3px",
                  padding: "2px",
                  margin: "5px"
                }}
              >
                <Card.Img />
                <Card.Body>
                  <Card.Title>
                    <h2 style={{ textAlign: "center" }}>{fri}</h2>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Create Note</Button>
                  <Button variant="primary">View notes</Button>
                </Card.Body>
              </Card>

              <Card
                style={{
                  backgroundColor: "lightblue",
                  border: "black solid 3px",
                  padding: "2px",
                  margin: "5px"
                }}
              >
                <Card.Img />
                <Card.Body>
                  <Card.Title>
                    <h2 style={{ textAlign: "center" }}>{sat}</h2>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Create Note</Button>
                  <Button variant="primary">View notes</Button>
                </Card.Body>
              </Card>
            </CardColumns>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MyCalendar;
