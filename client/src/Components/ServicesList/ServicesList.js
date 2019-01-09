import React, { Component } from "react";
import ServicesListCard from "./ServicesListCard";
import "./ServicesList.css";
import $ from "jquery";
import { connect } from "react-redux";
import ListCard from "../UserReservation/ListCard"
class ViewCategories extends Component {
  constructor(props) {
    super(props);
    this.state = { result: [] };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.query !== this.props.location.query) {
      this.getAllServices();
    }
  }
  componentDidMount() {
    this.getAllServices();
  }
  getAllServices = () => {
    $.ajax({
      url: `/services/${this.props.location.query}`,
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
    console.log("abo shreef",this.props.user)
    // eslint-disable-next-line no-lone-blocks
    {
      return (
        <div className="container">

          <h1>{this.props.location.query}</h1>
        
          <hr className="hr-header" />
          <p className="signin-paragraph"> please sign in to to reserve</p>
          <div className="row">
     
            {this.state.result.map((result, index) => {

             return Object.keys( this.props.user).length>0? <ServicesListCard key={index} result={result} />:
             <ListCard key={index} result={result} />
           
           })}
            
          </div>
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

export default connect(mapStateToProps)(ViewCategories);

