import React, { Component } from "react";
import "./Home.css";
import "./About/About";
import About from "./About/About";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { budget: "" };
  }


  submit = (e) => {
    this.setState({ budget: e.target.value });
  }
  render() {
    console.log("home state", this.state.budget)
    return (
      <div>
        <header className="container-fluid index-header">
          <div className="row title-row">
            <div className="col-12">
              <div className="backgroundImg" />
            </div>
          </div>

          <div className="row header-screen-row">
            <div className="screen-header-controllers">
              <div />
              <div />
              <div />
            </div>

            <div className="col-12 title-row">
              <h1>
                <mark>Create Your Beautiful Wedding </mark>
              </h1>
              <h4>
                <mark>Be Your Wedding Planner</mark>
              </h4>

              <div className="col-12 button-holder">
                <a href="#" data-toggle="modal" data-target="#exampleModalCenter">Start Now</a>

              </div>



              <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="exampleModalLongTitle">Insert Your Budget </h3>
            
                    
            
                    </div>
                    <div class="modal-body">

                      <input
                        type="Number"
                        name="Budget"
                        onChange={this.submit}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="$ 0.000"
                      />
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-target="planmodal" data-dismiss="modal">Close</button>
                      
                   
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#planmodal" data-dismiss="modal">See your Plane</button>
                    </div>
                  </div>
                </div>
              </div>



{/* new modal */}

<div class="modal fade" id="planmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="exampleModalLongTitle">Your Plan</h3>
                   
                    </div>
                    <div class="modal-body">
                    <label htmlFor="formGroupExampleInput">Hall Or Hotel Budget </label>
                      <input
                        type="text"
                      
                        value={"$ "+Math.ceil( + this.state.budget * 0.76)}
                        className="form-control"
                        id="formGroupExampleInput"
                        
                      />
                       <label htmlFor="formGroupExampleInput">DJ Budget</label>
                      <input
                        type="text"
                   
                        value={"$ "+Math.ceil( + this.state.budget * 0.02)}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="$ 0.000"
                      />
                       <label htmlFor="formGroupExampleInput">Zafeh Budget </label>
                      <input
                        type="text"
                   
                        value={"$ "+Math.ceil( + this.state.budget * 0.02)}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="$ 0.000"
                      />
                       <label htmlFor="formGroupExampleInput">Buity Center budget </label>
                      <input
                        type="text"
                        name="text"
                       value={"$ "+Math.ceil( + this.state.budget * 0.1)}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="$ 0.000"
                      />
                       <label htmlFor="formGroupExampleInput">Car </label>
                         <input
                        type="text"
                        name="text"
                       value={"$ "+Math.ceil( + this.state.budget * 0.05)}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="$ 0.000"
                      />
                          <label htmlFor="formGroupExampleInput">Flowers </label>
                         <input
                        type="text"
                        name="text"
                       value={"$ "+Math.ceil( + this.state.budget * 0.03)}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="$ 0.000"
                      />
                             <label htmlFor="formGroupExampleInput">Camera </label>
                         <input
                        type="text"
                        name="text"
                       value={"$ "+Math.ceil( + this.state.budget * 0.02)}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="$ 0.000"
                      />
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" data-target="#exampleModalCenter" data-dismiss="modal" data-toggle="modal" >Back to your budget</button>
                   <Link 
                      to={{
                        pathname: "/budgetresult",
                        query: this.state.budget
                      }}>
                        <button type="button" class="btn btn-primary">what we recommend </button>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </header>
        <About />
      </div>
    );
  }
}
export default Home;
