import React, { Component } from "react";
import Calender from "../Calender/Calender";
import ReservationBot from "./ReservationBot";
import "./Reservation.css";
class Reservation extends Component {
  constructor() {
    super();
    this.state = { displayBot: false };
  }
  displayBot = () => {
    console.log("sdsdsds");
    this.setState({ displayBot: true });
    console.log(this.state.displayBot);
  };
  render() {
    return (
      <div>
        <button className="open-button" onClick={this.displayBot}>
          C
        </button>
        {this.state.displayBot ? (
          <div className="chat-popup">
            <ReservationBot />
          </div>
        ) : (
          ""
        )}
        {/*
        <div class="chat-popup" id="myForm">
          <ReservationBot />
        </div>
        ////////////// Image With Details //////////////*/}
        <div class="category-image">
          {/*  */}
          <div class="info">
            <h2>Description</h2>
            <ul>
              <li>
                <strong>Price: </strong>3000 JD
              </li>
              <li>
                <strong>Capacity: </strong>250 Person
              </li>
              <li>
                <strong>Deser: </strong>Cake
              </li>
              <li>
                <strong>Drink: </strong>Pepsi
              </li>
            </ul>
          </div>
        </div>
        {/* ///////////// End Of Image With Details ///////////// */}

        {/* ///////////// Description Form ///////////// */}
        <div className="row ">
          <div class="category-details" className="col-sm-4 container-info">
            <h1>Numan Halls</h1>
            {/* ///////////// Rating Stars ///////////// */}
            <fieldset class="rating">
              <input type="radio" id="star5" name="rating" value="5" />
              <label class="full" for="star5" title="Awesome - 5 stars" />
              <input
                type="radio"
                id="star4half"
                name="rating"
                value="4 and a half"
              />
              <label
                class="half"
                for="star4half"
                title="Pretty good - 4.5 stars"
              />
              <input type="radio" id="star4" name="rating" value="4" />
              <label class="full" for="star4" title="Pretty good - 4 stars" />
              <input
                type="radio"
                id="star3half"
                name="rating"
                value="3 and a half"
              />
              <label class="half" for="star3half" title="Meh - 3.5 stars" />
              <input type="radio" id="star3" name="rating" value="3" />
              <label class="full" for="star3" title="Meh - 3 stars" />
              <input
                type="radio"
                id="star2half"
                name="rating"
                value="2 and a half"
              />
              <label
                class="half"
                for="star2half"
                title="Kinda bad - 2.5 stars"
              />
              <input type="radio" id="star2" name="rating" value="2" />
              <label class="full" for="star2" title="Kinda bad - 2 stars" />
              <input
                type="radio"
                id="star1half"
                name="rating"
                value="1 and a half"
              />
              <label class="half" for="star1half" title="Meh - 1.5 stars" />
              <input type="radio" id="star1" name="rating" value="1" />
              <label class="full" for="star1" title="Sucks big time - 1 star" />
              <input type="radio" id="starhalf" name="rating" value="half" />
              <label
                class="half"
                for="starhalf"
                title="Sucks big time - 0.5 stars"
              />
            </fieldset>
            <br />
            {/* End Of Rating Stars */}
            {/* ///////////// description and button ///////////// */}
            <p class="information">
              "If you’re looking up for ‘wedding reception venues Sydney’ on the
              internet "
            </p>
          </div>
          {/* ///////////// End Of Description Form ///////////// */}

          {/* ///////////// Reservation Form ///////////// */}
          <div class="category-details" className="col-sm-4 container-info">
            <h1>Make Your Reservation</h1>
            <form>
              <div className="row">
                <br />
                <div className="col-lg-3">First Name</div>
                <div className="col-lg-9 ">
                  <input type="text" className="reservation-input" required />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">Last Name</div>
                <div className="col-lg-9 ">
                  <input type="text" className="reservation-input" required />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">Email</div>
                <div className="col-lg-9 ">
                  <input type="email" className="reservation-input" required />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">Phone</div>
                <div className="col-lg-9 ">
                  <input type="tel" className="reservation-input" required />
                </div>
              </div>
              <div class="control" />
              <button class="btn">
                <span class="price">3000 JD </span>
                <span class="shopping-cart">
                  <i class="fa fa-shopping-cart" aria-hidden="true" />
                </span>
                <span class="book">Book Now</span>
              </button>
            </form>
          </div>
          {/* ///////////// End Of Reservation Form ///////////// */}
        </div>
        <Calender />
      </div>
    );
  }
}
export default Reservation;
