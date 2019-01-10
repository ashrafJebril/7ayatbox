import React, { Component } from "react";
import "./Nav.css";
import $ from "jquery";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
        if (y > 20) {
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
    return (
      <div>
        <div className="container-fluid headerNav-container">
          <ul>
            <li>
              <div className="navlogo" />
            </li>
            <li>
              <Link
                to={{
                  pathname: "/"
                }}
              >
                Home
              </Link>
            </li>

            <li id="nav-service">
              <a href="#">Services</a>
              <div className="sub-menu-holder">
                <ul>
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

            <li className="My-reservation">
              {" "}
              <Link to={{ pathname: "/myreservation" }}>Reservations</Link>
            </li>

            <li id="navLogin">
              <Link to={{ pathname: "/login", query: "user" }}>Login</Link>
            </li>

            <li id="cart-nav">
              <Link to={{ pathname: "/Cart" }}>
                My Cart <mark>{this.props.counter}</mark>
              </Link>
            </li>

            <li className="logout">
              <a href="/">Logout</a>
            </li>
            <li className="logedName">
              {" "}
              <a>{this.props.user.name}</a>
            </li>
          </ul>
        </div>
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
