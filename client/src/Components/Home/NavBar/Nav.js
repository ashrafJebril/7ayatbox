import React, { Component } from "react";
import "./Nav.css";
import $ from "jquery";
import {connect} from "react-redux"
import { Redirect, Link } from "react-router-dom";
import Cart from "../../Cart/Cart"

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      name: "",
      id:""
      
    };
  }
  handleSubmit = event => {
    var obj = {
      email: this.state.email,
      password: this.state.password
    };
  
    $.ajax({
      type: "POST",
      url: "/provider/login",
      data: {
        email: obj.email,
        password: obj.password
      },
      success: res => {
        console.log(res);
     
        if (res) {
          console.log("in set state")
          this.setState({
            isLoggedIn: true,
            name: res.name,
            id:res.id
          });
        }
      }
    });

    event.preventDefault();
  };

  render() {
 
    if (this.state.isLoggedIn) {
      console.log("hi", this.state.isLoggedIn)
        return <Redirect to={{
          pathname: '/Provider',
          query:this.state.id
         
        }} />
      }
    
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li className="parent">
              <a href="#">Services</a>
              <ul className="child">
                <li>
                  <Link
                    to={{
                      pathname: "/ServicesList",
                      query: "Hall"
                    }}
                  >
                    Wedding Halls
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/ServicesList",
                      query: "Zafeh"
                    }}
                  >
                    Zefah
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/ServicesList",
                      query: "DJ"
                    }}
                  >
                    DJ
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/ServicesList",
                      query: "BeautyCenter"
                    }}
                  >
                    Beauty Centers
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/ServicesList",
                      query: "Flower"
                    }}
                  >
                    Flowers
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/ServicesList",
                      query: "Car"
                    }}
                  >
                    Cars
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#" data-toggle="modal" data-target="#signIn">
                Become a Provider
              </a>
            </li>
            <li>
              <a href="#" data-toggle="modal" data-target="#signIn">
                Login
              </a>
            </li>
            <li>
            <Link to={{pathname:"/Cart"}}>My Cart {this.props.counter}</Link>
            </li>
          </ul>
        </nav>

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
    );
  }
}
const  mapStateToProps=state=>{
  return{
    ...state
  }
}

export default connect(mapStateToProps)(Nav);
