import React, { Component } from "react";
import { connect } from "react-redux";
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
    setTimeout(() => {
      this.displayBot();
    }, 1000);
  }
  //add to cart
  addToCart = result => {
    this.props.incrementCounter();
    this.props.saveResult(this.props.location.query);
  };

  render() {

    
    return (
      <div>
      <div className="reservation-background">
     
        <div className="container-reservation">
          <div className="row title-reservation">
            <div className="col-7">
              <h2>{this.props.location.query.title}</h2>
            </div>
          </div>
   
          <div className="row">
            <div className="col-6 title-reservation">
              <mark>price $</mark>
              <mark>{this.props.location.query.price}</mark>
            </div>
          </div>
       
          <div className="row">
            <div className="col-6 title-reservation">
              Location <mark>{this.props.location.query.location}</mark>
            </div>
          </div>
        
          <div className="row">
            <div className="col-6 title-reservation">
              Rate <mark>{this.props.location.query.rate}</mark>
            </div>
          </div>
       
      
        </div>
       
        <button className="open-button" onClick={this.displayBot}>
          C
        </button>
        {this.state.displayBot ? (
          <div className="chat-popup">
           
            <ReservationBot addToCart={this.addToCart} />
          </div>
        ) : (
          ""
        )}
    
      </div>
      <div className="row description">
      <div className="col-4">{this.props.location.query.description}</div>
      <div className="col-6"><img src="https://previews.123rf.com/images/irinaww/irinaww1510/irinaww151000409/46601258-vector-wedding-logo-design-template-marriage-couple-ceremony-symbol.jpg" className="reservation-img"></img></div>
     
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
    incrementCounter: () => dispatch({ type: "INCREMENT" }),
    saveResult: result => dispatch({ type: "SAVE", value: result })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reservation);
