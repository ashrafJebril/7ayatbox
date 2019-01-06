import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./ServicesList.css";

class ViewCategoriesCard extends React.Component {
  state = {
    qty: 0,
    result: ""
  };

  handleSubmit = () => {
    console.log("my service cart result",this.props.result);
    this.props.incrementCounter();
    this.props.saveResult(this.props.result);
  };
  render() {
    return (
      // eslint-disable-next-line no-lone-blocks
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="card">
          <img
            src={this.props.result.imageUrl}
            className="card-img-top"
            alt=""
          />

          <div className="card-block text-left">
            <h4 className="card-title">{this.props.result.title}</h4>
            <p className="card-text">{this.props.result.description}</p>
            <p className="card-text">{this.props.result.price}</p>
            <button onClick={this.handleSubmit} className="cart-cta">
              Add to cart
            </button>
            <Link
              to={{
                pathname: "/reservation",
                query: this.props.result
              }}
            >

            </Link>

          </div>
        </div>
      </div>
    );
  }
};


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

export default connect(mapStateToProps, mapDispatchToProps)(ViewCategoriesCard);
