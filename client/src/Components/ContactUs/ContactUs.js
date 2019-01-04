import React, { Component } from "react";
import "./ContactUs.css";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = { result: [] };
  }

  render() {
      return (
        <div className="contactus_container">
        <h1 id="contactus_title">About Us</h1>
        <div id="contactus_about_div">
        <p id="contactus_about">An About Us Page is a page on your website that tells your readers all about you. It includes a detailed description covering all aspects of your business and you as entrepreneurs. This includes the products or services you are offering, how you came into being as a business, your mission and vision, your aim, and maybe something about your future goals too. Your “About Us” page is your perfect opportunity to tell a compelling story about yourself and your business.</p>
        </div>
        </div>
      );
    }
}

export default ContactUs;