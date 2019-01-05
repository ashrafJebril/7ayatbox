import React, { Component } from "react";
import "./Nav.css";
import $ from "jquery";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      name: "",
      id: ""
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
          console.log("in set state");
          this.setState({
            isLoggedIn: true,
            name: res.name,
            id: res.id
          });
        }
      }
    });

    event.preventDefault();
  };
  componentDidMount() {
    $(document).ready(function() {
      var sHeight = window.innerHeight;
      var y = $(window).scrollTop();

      //Scroll Effects
      $(window).bind("scroll", function() {
        y = $(window).scrollTop();

        $(".index-header")
          .filter(function() {
            return (
              $(this).offset().top < y + $(window).height() &&
              $(this).offset().top + $(this).height() > y
            );
          })
          .css("background-position", "center " + parseInt(-y / 3) + "px");
        if (y > 100) {
          $(".headerNav-container").css({
            padding: "5px 0px"
          });

          $(".headerNav-container").addClass("nav-changed");
        } else {
          $(".headerNav-container").removeClass("nav-changed");
          $(".headerNav-container").css({
            padding: "20px 0px 20px"
          });
        }
      });
    });
  }

  render() {
    //check for the user if he logged in
    if (this.state.isLoggedIn) {
      console.log("hi", this.state.isLoggedIn);
      return (
        <Redirect
          to={{
            pathname: "/Provider",
            query: this.state.id
          }}
        />
      );
    }

    return (
      <div>
        <div className="container-fluid headerNav-container">
          <ul>
            <li>
              <div className="navlogo" />
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
              <div className="sub-menu-holder">
                <ul>
                  <li>
                    {" "}
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
                    {" "}
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
                    {" "}
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
                    {" "}
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
                    {" "}
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
                    {" "}
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
              </div>
            </li>
            <li id="navProvider">
              <Link to={{ pathname: "/login", query: "provider" }}>
                Become a Provider
              </Link>
            </li>
            <li id="navLogin">
              <Link to={{ pathname: "/login", query: "user" }}>Login</Link>
            </li>
            <li>{this.props.user.name}</li>
            <li>
              <Link to={{ pathname: "/Cart" }}>
                My Cart <mark>{this.props.counter}</mark>
              </Link>
            </li>
          </ul>
        </div>

        {/* <div
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
        </div> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Nav);
