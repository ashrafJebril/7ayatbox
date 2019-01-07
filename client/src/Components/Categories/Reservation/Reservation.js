import React, { Component } from "react";

import ReservationBot from "./ReservationBot";
import "./Reservation.css";

class Reservation extends Component {
  constructor(props) {
    super(props);
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
    console.log(this.props.location.query.imageUrl)
    return (
      <div>
        {/* <img src={this.props.location.query.imageUrl} alt="" /> */}
        <div className="reservation-img">
        <img src={this.props.location.query.imageUrl}></img>
      
        </div>
       <div className="container-reservation">
        <div className="row title-reservation">
        <div className="col-6"><h2>{this.props.location.query.title}</h2></div>
        
        </div>
         <div className="row">
        <div className="col-6 title-reservation">{this.props.location.query.description} </div>
        
        </div>
        <div className="row">
        <div className="col-6 title-reservation"><mark>price $</mark><mark>{this.props.location.query.price}</mark></div>
        
        </div>
        <div className="row">
        <div className="col-6 title-reservation">Location <mark>{this.props.location.query.location}</mark></div>
        
        </div>
        <div className="row">
        <div className="col-6 title-reservation">Rate <mark>{this.props.location.query.rate}</mark></div>
        
        </div>
        <div className="row">
        <div className="col-6 title-reservation">Rate <mark>{this.props.location.query.rate}</mark></div>
        
        </div>
        </div>
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
