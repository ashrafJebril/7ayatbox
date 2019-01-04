import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Cart from "../Cart/Cart";
import "./ServicesList.css";

class ViewCategoriesCard extends React.Component {
  state = {
    qty: 0,
    result: ""
  };

  add = () => {
    this.setState({
      qty: this.state.qty + 1,
      result: this.props.result
    });
  };
  subtract = () => {
    this.setState({
      qty: this.state.qty - 1
    });
  };
  handleSubmit = () => {
    console.log(this.props.result);
    this.props.incrementCounter();
    this.props.saveResult(this.props.result);
  };
  render() {
    console.log("qty", this.props);
    return (
      // eslint-disable-next-line no-lone-blocks
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <br />
        <div className="card">
          <img
            src={this.props.result.imageUrl}
            className="card-img-top"
            alt=""
          />

          <div className="card-block text-left">
            <h4 className="card-title">{this.props.result.title}</h4>
            <p className="card-text">{this.props.result.description}</p>
            <p className="card-text">{this.props.result.price}JD</p>
            <button onClick={this.handleSubmit}>Add to cart</button>
            <Link
              to={{
                pathname: "/reservation",
                query: this.props.result
              }}
            >
              <button className="detailsBTN btn btn-primary">
                Reserve Now
              </button>
            </Link>
          </div>
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
)(ViewCategoriesCard);
