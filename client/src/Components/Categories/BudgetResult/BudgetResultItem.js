import React, { Component } from "react";
import "./BudgetResult.css";
import { Link } from "react-router-dom";
class BudgetResultItem extends Component {
  constructor(props) {
    super(props);
    this.image =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgI7-6cl4LWsaXTgnOqhJf-e-2_QSwaMs4om_GV_IyAh5OuoZ4SQ";
  }

  render() {
    return (
      <div>
        <h1 className="recmmendation">Recommended Hall</h1>
        <div className="card ">
          <img className="card-img-top" src={this.image} alt="Card image cap" />
          <div className="card-body ">
            <div className="row">
              <div className="col-sm-10">
                <h5 className="card-title">Numan Hall</h5>
                <p className="card-text">the best wedding hall in jordan</p>
              </div>
              <div className="col-sm-2">
                <h5>Price</h5>
                <h5>capacity</h5>
              </div>
            </div>
          </div>
          <Link
            to={{
              pathname: "/reservation",
              query: ""
            }}
          >
            <button className="detailsBTN btn btn-primary">More Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BudgetResultItem;
