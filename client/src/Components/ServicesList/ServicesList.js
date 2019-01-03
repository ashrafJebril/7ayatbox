import React, { Component } from "react";
import ServicesListCard from "./ServicesListCard";
import "./ServicesList.css";
import $ from "jquery";
class ViewCategories extends Component {
  constructor(props) {
    super(props);
    this.state = { result: [] };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.query !== this.props.location.query) {
      console.log("hisdhaisdhais", this.props.location.query);
      this.getAllServices();
    }
  }
  componentDidMount() {
    console.log("dsdsdsdsds", this.props.location.query);
    this.getAllServices();
  }
  getAllServices = () => {
    $.ajax({
      url: `/services/${this.props.location.query}`,
      type: "POST",
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
          <div className="row">
            {this.state.result.map((result, index) => {
              return <ServicesListCard key={index} result={result} />;
            })}
          </div>
        </div>
      );
    }
  }
}

export default ViewCategories;

