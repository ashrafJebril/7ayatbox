import React, { Component } from "react";
import "./Home.css";
import "./About/About";
import About from "./About/About";
import { Link } from "react-router-dom";
import $ from "jquery";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { budget: "" };
  }

  //Budget modal submit
  submit = e => {
    this.setState({ budget: e.target.value });
  };

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
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Start Now
                </a>
              </div>

              <div
                className="modal fade"
                id="exampleModalCenter"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3 className="modal-title" id="exampleModalLongTitle">
                        Insert Your Budget{" "}
                      </h3>
                    </div>
                    <div className="modal-body">
                      <input
                        type="Number"
                        name="Budget"
                        onChange={this.submit}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="$ 0.000"
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-target="planmodal"
                        data-dismiss="modal"
                      >
                        Close
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#planmodal"
                        data-dismiss="modal"
                      >
                        See your Plane
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan Budget modal */}

              <div
                className="modal fade"
                id="planmodal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3 className="modal-title" id="exampleModalLongTitle">
                        Your Plan
                      </h3>
                    </div>
                    <div className="modal-body">
                      <label htmlFor="formGroupExampleInput">
                        Hall Or Hotel Budget{" "}
                      </label>
                      <input
                        type="text"
                        value={"$ " + Math.ceil(+this.state.budget * 0.76)}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                      <label htmlFor="formGroupExampleInput">DJ Budget</label>
                      <input
                        type="text"
                        defaultValue="0.00"
                        value={"$ " + Math.ceil(+this.state.budget * 0.02)}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                      <label htmlFor="formGroupExampleInput">
                        Zafeh Budget{" "}
                      </label>
                      <input
                        type="text"
                        defaultValue="0.00"
                        value={"$ " + Math.ceil(+this.state.budget * 0.02)}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                      <label htmlFor="formGroupExampleInput">
                        Buity Center budget{" "}
                      </label>
                      <input
                        type="text"
                        name="text"
                        defaultValue="0.00"
                        value={"$ " + Math.ceil(+this.state.budget * 0.1)}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="$ 0.000"
                      />
                      <label htmlFor="formGroupExampleInput">Car </label>
                      <input
                        type="text"
                        name="text"
                        defaultValue="0.00"
                        value={"$ " + Math.ceil(+this.state.budget * 0.05)}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                      <label htmlFor="formGroupExampleInput">Flowers </label>
                      <input
                        type="text"
                        name="text"
                        defaultValue="0.00"
                        value={"$ " + Math.ceil(+this.state.budget * 0.03)}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                      <label htmlFor="formGroupExampleInput">Camera </label>
                      <input
                        type="text"
                        name="text"
                        defaultValue="0.00"
                        value={"$ " + Math.ceil(+this.state.budget * 0.02)}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-target="#exampleModalCenter"
                        data-dismiss="modal"
                        data-toggle="modal"
                      >
                        Back to your budget
                      </button>
                      <Link
                        to={{
                          pathname: "/budgetresult",
                          query: this.state.budget
                        }}
                      >
                        <button type="button" className="btn btn-primary">
                          what we recommend{" "}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
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
