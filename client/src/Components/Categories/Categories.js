import React, { Component } from 'react';
import Calendar from 'react-calendar';
import DateTimePicker from 'react-datetime-picker';
 
class Categories extends Component {
    constructor(){
        super()
  this.state = {
    date: new Date(),
  }
}
  onChange = date => this.setState({ date })
 
  render() {
    let style={
        width:"300px"
    }
      console.log("state",this.state.date)
    return (
       

      <div className="container-fluid">
          <input type="text" value={this.state.date} style={style}/>
          <div>
        <DateTimePicker 
          onChange={this.onChange}
          value={this.state.date}
          dateFormat = "MONTH DATE DAY - YEAR"
          width='400'
          theme='window' 
        />
      </div>


      </div>
    );
  }
}
export default Categories 