import React, { Component } from "react";
import "./ContactUs.css";
import $ from "jquery";

class ContactUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      message: ''
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

  render() {
    return (

      <div>
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />


        {/* About Us Form  */}
        <section>
	<div class="container-fluid">
        	<div class="row about-bg">
                <div class="col-md-6">   
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12 about-bg-layer">
                <div class="">
                <div class="about-content-box">
                <div class="about-heading">
                    <h1>ABOUT US</h1>
                    <h2>Hayat Box</h2>
                    <p>Wedding Planner</p>
                </div>
                    <div class="about-txt">
                    	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    </div>
                </div>
			</div>
        </div> 
    </div>
</section>
        {/* End Of About Us form */}

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
      </div>
    );
  }
}

export default ContactUs;