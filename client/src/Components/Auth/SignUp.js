import React, { Component } from "react";
import "./Login.css";
import $ from "jquery";
export default class UserSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, name: "", email: "", password: "" };
  }
  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };
  handleSignUp = () => {
    $.ajax({
      url: `/${this.props.location.query}/signUp`,
      type: "POST",
      data: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      },
      success: data => {
        this.props.history.push("/");
      },
      error: err => {
        console.log("UserSignin ERROR", err);
      }
    });
  };
  render() {
    return (
      <div>
        <h2 className="header">Create your account</h2>
        <div className="imgcontainer">
          <img src="https://bit.ly/2BYTfrp" alt="Avatar" class="avatar" />
        </div>
        <div class="container">
          <label for="UserName">
            <b>UserName</b>
          </label>
          <input
            onChange={this.handleNameChange}
            type="text"
            placeholder="Enter Name"
            name="UserName"
            className="userlogininput"
            id="txt_name"
            required
          />
          <label for="email">
            <b>Email</b>
          </label>
          <input
            onChange={this.handleEmailChange}
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
            onChange={this.handlePasswordChange}
            type="password"
            placeholder="Enter Password"
            name="password"
            className="userlogininput"
            id="txt_password"
            required
          />
          <button className="userloginbutton" onClick={this.handleSignUp}>
            Create Account
          </button>
        </div>
      </div>
    );
  }
}
