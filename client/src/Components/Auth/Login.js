import React, { Component } from "react";
import "./Login.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Login extends Component {
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
        this.props.logedin(data);
        $("#navProvider").hide();
        $("#navLogin").hide();
        $(".headerNav-container").append(
          "<li className='logoutLi'><a >LogOut</a></li>"
        );
        this.props.history.goBack();
      },
      error: err => {
        console.log("UserLogin ERROR", err);
      }
    });
  };
  render() {
    return (
      <div className="container">
        <h2 className="header">Login to your account</h2>

        <div className="imgcontainer">
          <img src="https://bit.ly/2BYTfrp" alt="Avatar" className="avatar" />
        </div>

        <div className="container">
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

        <div className="container">
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logedin: user => dispatch({ type: "logedin", value: user })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
