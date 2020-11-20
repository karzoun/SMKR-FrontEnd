import React, { Component } from "react";
import axios from "axios";
import { Row, Container, Form, Col, Button } from "react-bootstrap";
import WelcomeJumbotron from "../components/Jumbotron/welcomeJumbotron";

//import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.username,
      password: this.password,
    };
    axios
      .post("login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <WelcomeJumbotron />
        </Row>
        <Row>
          <Col size="md-12" className="column">
            <Form.Group onSubmit={this.handleSubmit}>
              <label>Username</label>
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={(e) => (this.username = e.target.value)}
              />
              <br />
              <label>Password</label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => (this.password = e.target.value)}
              />
              <br />
            </Form.Group>
            <Button
              className="btn btn-primary btn-block"
              type="submit"
              onClick={this.handleSubmit}
            >
              Log-In
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}