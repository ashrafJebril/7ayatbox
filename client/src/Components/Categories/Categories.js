import React, { Component } from 'react';
import Calender from "./Calender/Calender";
 
class Categories extends Component {
    constructor(){
        super()
  this.state = {
    date: new Date(),
  }
}
  onChange = date => this.setState({ date })
 
  render() {
    

    return (
       

      <div className="container-fluid">
          <div>
            <Calender />
          </div>
      </div>
    );
  }
}
export default Categories 