import React, { Component } from "react";
import "./BudgetResult.css";
import ServicesListCard from "../../ServicesList/ServicesListCard";
import $ from "jquery";
class BudgetResult extends Component {
  constructor(props) {
    super(props);

    this.state = { result: [] };
  }
  componentDidMount() {
    //this.props.location.query
    $.ajax({
      url: "/providercategories/DJ",
      type: "POST",
      success: data => {
        console.log("dddd", data);
        this.setState({ result: data });
      },
      error: err => {
        console.log("ERROR");
      }
    });
  }
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

export default BudgetResult;
