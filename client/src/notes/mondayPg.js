import React, { Component } from "react";
import { isAuthenticated } from "../auth/Index";
import { Form, Button, Col, Card, Container, Row } from "react-bootstrap";

import { allMonday, mondayNew } from "../notes/note-api";

class Monday extends Component {
  constructor() {
    super();
    this.state = {
      note: "",
      notes: [],
      user: {},
      error: "",
      noteId: "",
      token: ""
    };
  }

  componentDidMount() {
    this.noteData = new FormData();
    this.setState({ user: isAuthenticated().user });

    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;
    this.setState({ token: token });

    allMonday(userId, token).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ notes: data });
      }
      console.log(this.state.notes);
      console.log(this.state.token);
    });
  }

  handleChange = name => event => {
    this.setState({ error: "" });
    const value = name === "photo" ? event.target.files[0] : event.target.value;

    const fileSize = name === "photo" ? event.target.files[0].size : 0;
    this.noteData.set(name, value);
    this.setState({ [name]: value, fileSize });
  };

  clickSubmit = event => {
    event.preventDefault();
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;

    mondayNew(userId, token, this.noteData).then(data => {
      if (data.error) this.setState({ error: data.error });
      else {
        this.setState({
          note: ""
        });
      }
      alert("note created!");
    });
  };

  //----------------------
  //----------------------

  newMonNote = note => (
    <div style={{ margin: "10px" }}>
      <h2 style={{ textAlign: "center" }}> New note</h2>
      <hr />
      <form>
        <Form.Row>
          <Col>
            <Form.Label>Note</Form.Label>
            <Form.Control
              placeholder="Your note here..."
              type="text"
              onChange={this.handleChange("note")}
              value={note}
            />
          </Col>
        </Form.Row>
      </form>
      <br />
      <Button
        size="lg"
        block
        onClick={this.clickSubmit}
        style={{
          backgroundColor: "#6e6e6dff",
          border: "none"
        }}
      >
        Create note
      </Button>
    </div>
  );

  noteList = () => (
    <div>
      <h1 style={{ textAlign: "center" }}>
        <h2>Notes for Monday</h2>
      </h1>
      {this.state.notes.map((notes, i) => {
        return (
          <div key={i}>
            <Card size="sm" style={{ padding: "10px" }}>
              <Card.Body>{notes.note}</Card.Body>
              <p>{notes._id._id}</p>
              <Button variant="danger">Delete</Button>
            </Card>
          </div>
        );
      })}
    </div>
  );
  render() {
    const { note } = this.state;
    return (
      <Container>
        <Row>
          <Col>{this.newMonNote(note)}</Col>
          <Col>{this.noteList()}</Col>
        </Row>
      </Container>
    );
  }
}

export default Monday;
