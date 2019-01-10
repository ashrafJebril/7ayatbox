import React, { Component } from "react";
import $ from "jquery";
import "./Provider.css";
import { Redirect, Link } from "react-router-dom";
import { storage } from "../../firebase";
import SweetAlert from "react-bootstrap-sweetalert";
class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providerId: this.props.location.query,
      result: [],
      categoryId: 1,
      description: "",
      imageUrl: "",
      location: "",
      price: "",
      rate: "4.5",
      title: "",
      capicity: "",
      type: "",
      image: {},
      show: false
    };
    this.acceptedFileTypes = "image/x-png, image/png, image/jpg,image.jpeg";
  }

  componentDidMount = () => {
    console.log("i am in");
    $.ajax({
      url: "/provider/getProviderServices",
      type: "POST",
      data: {
        providerId: this.state.providerId
      },
      success: data => {
        this.setState({ result: data });
      },
      error: err => {
        console.log("ERROR");
      }
    });
  };

  handleSubmitButtonClick = () => {
    this.setState({ show: true });
    //starting put request to firebase storage
    const uploadTask = storage
      .ref(`images/${this.state.image.name}`)
      .put(this.state.image);
    //the on function is event listener that provide 3 functions progress,error,complete
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function
      },
      error => {
        // error function
        console.log("errr", error);
      },
      () => {
        // complete function
        storage
          .ref("images")
          .child(this.state.image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ imageUrl: url });
            this.addServicesHandler();
          });
      }
    );
  };
  //////
  addServicesHandler = () => {
    var obj = {
      providerId: this.state.providerId,
      categoryId: this.state.categoryId,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
      price: this.state.price,
      location: this.state.location,
      rate: this.state.rate,
      title: this.state.title,
      capicity: this.state.capicity
    };
    $.ajax({
      url: "/provider/addService",
      type: "POST",
      data: {
        providerId: obj.providerId,
        categoryId: obj.categoryId,
        description: obj.description,
        imageUrl: obj.imageUrl,
        price: obj.price,
        rate: obj.rate,
        title: obj.title,
        capicity: obj.capicity,
        location: obj.location
      },
      success: data => {
        console.log("success", data);

        this.setState({ text: data.express });
      },
      error: err => {
        console.log("ERROR");
      }
    });
  };

  ServiceHandleChange = event => {
    this.setState({ categoryId: event.target.value });
  };

  titleHandleChange = event => this.setState({ title: event.target.value });
  locationHandleChange = event =>
    this.setState({ location: event.target.value });
  imageHandleChange = event => this.setState({ imageUrl: event.target.value });
  locationHandleChange = event =>
    this.setState({ location: event.target.value });
  descriptionHandleChange = event =>
    this.setState({ description: event.target.value });
  rateHandleChange = event => this.setState({ rate: event.target.value });
  priceHandleChange = event => this.setState({ price: event.target.value });
  capicityHandleChange = event =>
    this.setState({ capicity: event.target.value });

  fileSelectedHandler = event => {
    console.log("Ev", event.target.files[0]);
    this.setState({ image: event.target.files[0] });
    console.log("Image", this.state);
  };
  render() {
    return (
      <div>
        <div class="container-fluid page-cont">
          <div class="row dash-row">
            <div class="col-4 data-box">
              <div>
                <h3>
                  <Link
                    to={{
                      pathname: "/ProviderServices",
                      query: this.state.result
                    }}
                  >
                    <span>{this.state.result.length}</span>{" "}
                  </Link>
                  Services
                </h3>
              </div>
            </div>

            <div class="col-4 data-box">
              <div>
                <h3>
                  <span>7</span> Reservations
                </h3>
              </div>
            </div>

            <div class="col-4 data-box">
              <div>
                <h3>
                  <span>3500 </span>JD Revenues
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row inputs">
            <div className="col-25">
              <label for="fname">title</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                onChange={this.titleHandleChange}
                id="fname"
                name="firstname"
                placeholder="Your title.."
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="subject">Image</label>
            </div>
            <div className="col-3 ">
              <div className="uploadImage">
                <input
                  type="file"
                  name="file"
                  id="subject"
                  accept={this.acceptedFileTypes}
                  multiple={false}
                  onChange={this.fileSelectedHandler}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="country">Service</label>
            </div>
            <div className="col-75">
              <select
                value={this.state.value}
                onChange={this.ServiceHandleChange}
              >
                <option value="1">Halls</option>
                <option value="2">Zafeh</option>
                <option value="3">DJ</option>
                <option value="4">Beauty Center</option>
                <option value="5">Flowers</option>
                <option value="6">Cars</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="subject">Price</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                onChange={this.priceHandleChange}
                id="subject"
                name="firstname"
                placeholder="Your Price"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="subject">Location</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                onChange={this.locationHandleChange}
                id="subject"
                name="firstname"
                placeholder="Your Location"
              />
            </div>
          </div>
          {/* <div className="row">
            <div className="col-25">
              <label for="subject">Rate</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                onChange={this.rateHandleChange}
                id="subject"
                name="firstname"
                placeholder="Your Rate"
              />
            </div>
          </div> */}
          <div className="row">
            <div className="col-25">
              <label for="subject">Description</label>
            </div>
            <div className="col-75">
              <textarea
                onChange={this.descriptionHandleChange}
                id="subject"
                name="firstname"
                placeholder="Your description.."
              />
            </div>
          </div>
          <div className="row">
            <div>
              <button
                onClick={this.handleSubmitButtonClick}
                className="cart-cta"
              >
                Add Srevice
              </button>
              <SweetAlert
                show={this.state.show}
                success
                title="your service has been added"
                onConfirm={() => {
                  console.log("confirm");
                  this.setState({ show: false });
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
    );
  }
}

export default Provider;
