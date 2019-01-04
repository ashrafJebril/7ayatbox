import React, { Component } from "react";
import ReservationBot from "./ReservationBot";
import "./Reservation.css";

class Reservation extends Component {
  constructor() {
    super();
    this.state = { displayBot: false };
  }
  displayBot = () => {
    this.setState({ displayBot: true });
  };
  componentDidMount() {
    console.log(this.props.location);
    setTimeout(() => {
      this.displayBot();
    }, 1000);
  }
  render() {
    return (
      <div>
        <img src={this.props.location.query.imageUrl} alt="" />
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
      </div>
    );
  }
}
export default Reservation;
