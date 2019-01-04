import React, { Component } from "react";
import "./ContactUs.css";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = { result: [] };
  }

  render() {
      return (
        <div className="aboutus_container">
        <h1 className="contactus_about_title">About Us</h1>
        <div className="contactus_about_div">
        <p className="contactus_about">An About Us Page is a page on your website that tells your readers all about you. It includes a detailed description covering all aspects of your business and you as entrepreneurs. This includes the products or services you are offering, how you came into being as a business, your mission and vision, your aim, and maybe something about your future goals too. Your “About Us” page is your perfect opportunity to tell a compelling story about yourself and your business.</p>
        </div>


        <div class="contactus_from" className="col-sm-4">
            <h1>Contact US</h1>
            <form>
              <div className="row">
                <br />
                <div className="col-lg-3">Name</div>
                <div className="col-lg-9 ">
                  <input type="text" className="contactus-input" required />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">Phone</div>
                <div className="col-lg-9 ">
                  <input type="tel" className="contactus-input" required />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">Message</div>
                <div className="col-lg-9 ">
                  <textarea rows="4" cols="50" required>
                  </textarea>
                </div>
              </div>
              <button className="contactus-btn">
                <span>Send A Message</span>
              </button>
            </form>
          </div>



        </div>
      );
    }
}

export default ContactUs;