import React, { Component } from "react";
import "./Cart.css";
import $ from "jquery";
import { connect } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.props.result2,
      userID: this.props.user.id,
      show: false
    };
  }
  //send post request for saving reservations
  handleSubmit = () => {
    this.setState({ show: true });
    $.ajax({
      url: "/reservation/addReservation",
      type: "POST",
      data: {
        cartDetails: this.props.result2,
        userID: this.state.userID,
        providerID: this.props.result2[0].providerID
      },
      success: data => {
        console.log("success", data);

        // setTimeout(() => {
        //   this.props.resetCounter();
        //   this.props.history.push("/");
        // }, 2500);
      },
      error: err => {
        console.log("ERROR");
      }
    });
  };
  //calculating the total price for cart
  total = () => {
    var total = 0;
    var results = this.props.result2;
    for (var i = 0; i < results.length; i++) {
      total = total + results[i].price;
    }
    return total;
  };

  render() {
    let mystyle = {
      borderTop: "1px solid #ddd",
      marginTop: "10px"
    };
    console.log(this.props.result2.length);
    return this.props.result2.length === 0 ? (
      <div className="container">
        <h3 className="cartH3">
          {" "}
          Nothing in your cart go to services to add more.
        </h3>
      </div>
    ) : (
      <div>
        <div className="container">
          <div className="row">
            {this.props.result2.map((result, index) => {
              return (
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="card">
                    <img
                      src={result.imageUrl}
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-block text-left">
                      <h4 className="card-title">{result.title}</h4>
                      <p className="card-text">{result.description}</p>
                      <p className="card-text">{result.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              marginTop: "30px",
              backgroundColor: "#F6F6F6",
              padding: "10px"
            }}
          >
            <h3 className="row" style={{ fontWeight: 400 }}>
              <span className="col-6">total price:</span>
              <span className="col-6 text-right">${this.total()}</span>
            </h3>
            <h3 className="row" style={{ fontWeight: 400 }}>
              <span className="col-6">tax (15%):</span>
              <span className="col-6 text-right">${this.total() * 0.15}</span>
            </h3>
            <h3 className="row" style={mystyle}>
              <span className="col-6">tota inc tax:</span>
              <span className="col-6 text-right">
                ${this.total() * 0.15 + this.total()}
              </span>
            </h3>
          </div>
          <div className="row">
            <div className="col-6" />
            <div className="col-6">
              <div className="Save-cart" />
              <button className="Save-cart-btn" onClick={this.handleSubmit}>
                Reserve
              </button>

              <div>
                <SweetAlert
                  show={this.state.show}
                  success
                  title="You have successfully reserved"
                  onConfirm={() => {
                    console.log("confirm");
                    this.setState({ show: false });
                    this.props.resetCounter();
                    this.props.history.push("/");
                  }}
                  onCancel={() => {
                    console.log("cancel");
                    this.setState({ show: false });
                  }}
                  onEscapeKey={() => this.setState({ show: false })}
                  onOutsideClick={() => this.setState({ show: false })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    resetCounter: () => dispatch({ type: "RESET" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
