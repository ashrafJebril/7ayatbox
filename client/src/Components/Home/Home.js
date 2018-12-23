import React, { Component } from "react";
import "./Home.css";
import "./About/About";
import About from "./About/About";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    return (
      <div>
        <header className="container-fluid index-header">
          <div className="row title-row">
            <div className="col-12">
              <div className="backgroundImg" />
            </div>
          </div>

          <div className="row header-screen-row">
            <div className="screen-header-controllers">
              <div />
              <div />
              <div />
            </div>

            <div className="col-12 title-row">
              <h1>
                <mark>Create Your Beautiful Wedding </mark>
              </h1>
              <h4>
                <mark>Be Your Wedding Planner</mark>
              </h4>

              <div className="col-12 button-holder">
                <a href="/Budget">Start Now</a>
              </div>
            </div>
          </div>
        </header>
        <About />
      </div>
    );
  }
}
export default Home;
