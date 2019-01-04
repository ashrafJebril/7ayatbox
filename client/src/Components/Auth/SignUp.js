import React, { Component } from "react";
import "./Login.css";
import $ from "jquery";
export default class UserSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }
  handleSignUp = () => {
    $.ajax({
      url: `/${this.props.location.query}/signUp`,
      type: "POST",
      data: {
        name: $("#txt_name").val(),
        email: $("#txt_email").val(),
        password: $("#txt_password").val()
      },
      success: data => {
        console.log("success", data, this.props.history);
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

          <button className="userloginbutton" onClick={this.handleSignUp}>
            Create Account
          </button>
        </div>
      </div>
    );
  }
}
