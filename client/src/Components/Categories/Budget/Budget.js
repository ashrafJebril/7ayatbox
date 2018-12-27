import React, { Component } from "react";
import "./Budget.css";
import { Link } from "react-router-dom";

class Budget extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" ,
    budget:props.location.query
  };

 
  }



  render() {
    console.log("my props",Math.ceil( + this.state.budget * 0.4))
    return (
      <div>
        <h1>Helllo From Budget</h1>
        <br />
        <div className="bugetForm">
          <div className="totalBudget">
          <div className="planDetails">
                            <div className="formm">
                              <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                  <label htmlFor="formGroupExampleInput2">Hall Budget</label>
                                  <input
                                    type="text"
                                    value={"$ "+Math.ceil( + this.state.budget * 0.4)}
                                
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="$ 0.000"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="formGroupExampleInput">Zafeh Budget </label>
                                  <input
                                    type="text"
                                    value={"$ "+Math.ceil( this.state.budget * 0.3)}
                                
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="$ 0.000"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="formGroupExampleInput2">Car Budget</label>
                                  <input
                                    type="text"
                                    value={"$ "+Math.ceil ( this.state.budget * 0.2)}
                               
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="$ 0.000"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="formGroupExampleInput2">Flower Budget</label>
                                  <input
                                    type="text"
                                    value={"$ "+Math.ceil( this.state.budget * 0.04)}
                              
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="$ 0.000"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="formGroupExampleInput2">DJ Budget</label>
                                  <input
                                    type="text"
                                    value={"$ "+Math.ceil( this.state.budget * 0.02)}
                                  
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="$ 0.000"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="formGroupExampleInput2">
                                    Beauty Salon Budget
                                  </label>
                                  <input
                                    type="text"
                                    value={"$ "+Math.ceil( this.state.budget * 0.04)}
                                  
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="$ 0.000"
                                  />
       
                                 </div>
                                 </form>
                
                
              </div> 
              </div> 
              </div> 
              </div> 
              </div> 
                  
     
    );
  }
}

export default Budget;
