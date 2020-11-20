import React, { Component } from "react";
import "./jumbotron.css";

class WelcomeJumbotron extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container-fluid">
          <h1 class="display-4">
            SMKR <i className="fas fa-cannabis "></i>
            <h6>Welcome, please sign-up to continue.</h6>
          </h1>
          <h2 class="lead"></h2>
        </div>
      </div>
    );
  }
}
export default WelcomeJumbotron;
