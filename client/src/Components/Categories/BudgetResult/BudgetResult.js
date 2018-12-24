import React, { Component } from "react";
import "./BudgetResult.css";
import BudgetResultItem from "./BudgetResultItem";
class BudgetResult extends Component {
  constructor(props) {
    super(props);

    this.state = { result: "" };
  }
  componentDidMount() {
    //do the query for categories
    console.log("yooooo", this.props.location.query);
  }
  render() {
    {
      return [1, 2, 3, 4].map(() => {
        return <BudgetResultItem />;
      });
    }
  }
}

export default BudgetResult;
