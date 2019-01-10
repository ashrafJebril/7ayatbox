import React, { Component } from "react";
import "./AboutUs.css";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* About Us Form  */}
        <section>
          <div class="container">
            <div class="row about-bg">
              <div class="col-md-6" />
              <div class="col-md-6 col-sm-6 col-xs-12 about-bg-layer">
                <div class="">
                  <div class="about-content-box">
                    <div class="about-heading">
                      <h1>ABOUT US</h1>
                      <h2>Hayat Box</h2>
                      <p>Wedding Planner</p>
                    </div>
                    <div class="about-txt">
                      <p>
                        we are aw wedding palnning website we help you to find
                        the stuff the you need it for your wedding party , thats
                        mean you can be your own wedding planner
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Of About Us form */}
      </div>
    );
  }
}

export default AboutUs;
