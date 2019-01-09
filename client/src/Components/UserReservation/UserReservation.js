import React, { Component } from "react";
import ServicesListCard from "../ServicesList/ServicesListCard";
import "./UserReservation.css";
import { connect } from "react-redux";
import $ from "jquery";
class UserReservation extends Component {
  constructor(props) {
    super(props);
    this.state = { result: [] };
  }
  componentDidMount() {
  
    this.getAllServices();
  }
  getAllServices = () => {
    console.log("IDDDD", this.props.user.id);
    $.ajax({
      url: `/reservation/userReservation?userId=${this.props.user.id}`,
      type: "GET",
      success: data => {
        this.setState({ result: data });
        
      },
      error: err => {
        console.log("ERROR");
      }
    });
  };

  render() {
    // eslint-disable-next-line no-lone-blocks
    {
      return (
        <div className="container">
          <h1>My Reservation</h1>
          <hr className="hr-header" />
     
            {this.state.result.map((result, index) => {
              return <ServicesListCard key={index} result={result} />;
            })}
          </div>
  
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(UserReservation);
