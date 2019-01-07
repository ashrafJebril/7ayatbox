import React, { Component } from "react";
import "./ContactUs.css";
import $ from "jquery";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class ContactUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      message: '',
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    }
  }

  nameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  phoneChange = (event) => {
    this.setState({ phone: event.target.value });
  }

  messageChange = (event) => {
    this.setState({ message: event.target.value });
  }
  handleSaveMessage = (event) => {
    $.ajax({
      url: `/contactus/submit`,
      type: "POST",
      data: {
        name: this.state.name,
        phone: this.state.phone,
        message: this.state.message
      },
      success: data => {
        alert("SUCCESS");
        console.log("SUCCESS", data);
      },
      error: err => {
        console.log("ERROR", err);
      }
    });
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};
  
  render() {
    return (

      <div>
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />


        {/* Contact Us Form */}
        <div class="contact-jumbotron contact-jumbotron-sm">
    <div class="contact-container">
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                <h1 class="contact-h1">
                    Contact us <small>Feel free to contact us</small></h1>
            </div>
        </div>
    </div>
</div>
<div class="contact-container2">
    <div class="row">
        <div class="col-md-8">
            <div class="well well-sm">
                <form onSubmit={this.handleSaveMessage}>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name">
                                Name</label>
                            <input type="text" class="form-control" name="name" placeholder="Enter name" required="required" onChange={this.nameChange} />
                        </div>

                        <div class="form-group">
                            <label for="subject">
                                Phone</label>
                            <input type="text" class="form-control" name="phone" placeholder="Enter phone" required="required" onChange={this.phoneChange}/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name">
                                Message</label>
                            <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                                placeholder="Message" onChange={this.messageChange}></textarea>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <button type="submit" class="btn btn-primary pull-right" id="btnContactUs">
                            Send Message</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
</div>
        {/* End Of Contact Us Form */}
        {/* Google Map */}
        <div id="gMap">
        <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 31.986617, lng: 35.837770}}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
      </div>
      {/* End Of Google Map */}
      </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCMVlgPTWDekuMzAX0e5uNxlSl2GZSvEUs")
  })(ContactUs);