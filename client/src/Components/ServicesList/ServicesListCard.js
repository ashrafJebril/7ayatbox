import React from "react";
import { Link } from "react-router-dom";
import "./ServicesList.css";
const ViewCategoriesCard = ({ result }) => {
  console.log(result);
  return (
    // eslint-disable-next-line no-lone-blocks
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
      <br />
      <div className="card">
        <img src={result.imageUrl} className="card-img-top" alt="" />

        <div className="card-block text-left">
          <h4 className="card-title">{result.title}</h4>
          <p className="card-text">{result.description}</p>
          <p className="card-text">{result.price}JD</p>
          <Link
            to={{
              pathname: "/",
              query: ""
            }}
          >
            <button className="detailsBTN btn btn-primary">More Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewCategoriesCard;
