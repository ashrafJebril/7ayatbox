import React, { Component } from "react";
import "./Login.css";
import $ from "jquery";
import { Link } from "react-router-dom";
export default class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }
  handleLogin = () => {
    $.ajax({
      url: `/${this.props.location.query}/login`,
      type: "POST",
      data: {
        email: $("#txt_email").val(),
        password: $("#txt_password").val()
      },
      success: data => {
        console.log("success", data);
        this.props.history.goBack();
      },
      error: err => {
        console.log("UserLogin ERROR", err);
      }
    });
  };
  render() {
    return (
      <div>
        <h2 className="header">Login to your account</h2>

        <div className="imgcontainer">
          <img src="https://bit.ly/2BYTfrp" alt="Avatar" class="avatar" />
        </div>

        <div class="container">
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            className="userlogininput"
            id="txt_email"
            required
          />

          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            className="userlogininput"
            id="txt_password"
            required
          />

          <button className="userloginbutton" onClick={this.handleLogin}>
            Login
          </button>
          <label>
            <input type="checkbox" checked="" name="remember" /> Remember me
          </label>
        </div>
        <div className="header">
          <Link to={{ pathname: "/signup", query: this.props.location.query }}>
            Not a member? register now!
          </Link>
        </div>

        <div class="container">
          <span class="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </div>
    );
  }
}
/*
 <div
          className="modal fade"
          id="signIn"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Provider Sign In{" "}
                </h3>
              </div>
              <div className="modal-body">
                <div className="wrapper">
                  <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h2 className="form-signin-heading">Event Manager login</h2>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Email Address"
                      required=""
                      autoFocus=""
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      required=""
                      value={this.state.password}
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                    <button
                      className="btn btn-lg btn-primary btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </form>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
*/
