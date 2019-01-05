import React, { Component } from "react";
import "./ContactUs.css";
import $ from "jquery";

class ContactUs extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            phone:'',
            message:''
        }
    }

    nameChange = (event) => {
      this.setState({name: event.target.value});
    }
    
    phoneChange = (event) => {
      this.setState({phone: event.target.value});
    }

    messageChange = (event) => {
      this.setState({message: event.target.value});
    }
    handleSaveMessage = (event) => {
      $.ajax({
        url: `/contactus/submit`,
        type: "POST",
        data: {
          name:this.state.name,
          phone:this.state.phone,
          message:this.state.message
        },
        success: data => {
          console.log("SUCCESS", data);
        },
        error: err => {
          console.log("ERROR", err);
        }
      });
    };

  render() {
      return (
          <div>
        <div className="aboutus_container">
        <h1 className="contactus_about_title">About Us</h1>
        <div className="contactus_about_div">
        <p className="contactus_about">An About Us Page is a page on your website that tells your readers all about you. It includes a detailed description covering all aspects of your business and you as entrepreneurs. This includes the products or services you are offering, how you came into being as a business, your mission and vision, your aim, and maybe something about your future goals too. Your “About Us” page is your perfect opportunity to tell a compelling story about yourself and your business.</p>
        </div>

        </div>

        {/* Contact Us Form */}
        <div className="contactus_container">
        <div className="contactus_form" className="col-sm-4">
            <h1>Contact US</h1>
            <form onSubmit={this.handleSaveMessage}>
              <div className="row">
                <br />
                <div className="col-lg-3">Name</div>
                <div className="col-lg-9 ">
                  <input type="text" name="name" className="contactus-input" onChange={this.nameChange.bind(this)} required />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">Phone</div>
                <div className="col-lg-9 ">
                  <input type="tel" name="phone" className="contactus-input" onChange={this.phoneChange.bind(this)} required />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">Message</div>
                <div className="col-lg-9 ">
                  <textarea name="message" rows="4" cols="50" onChange={this.messageChange.bind(this)} required />
                </div>
              </div>
              <button className="contactus-btn">
                <span>Send A Message</span>
              </button>
            </form>
          </div>
          </div>
          {/* End Of Contact Us Form */}
          </div>
      );
    }
}

export default ContactUs;