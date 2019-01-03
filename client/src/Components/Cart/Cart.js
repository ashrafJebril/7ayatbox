import React,{Component} from "react"
import $ from "jquery"
import "./Cart.css"
import { Redirect, Link } from "react-router-dom";
import {connect} from "react-redux"

class Cart extends Component{
 constructor(props){
     super(props)
  this.state={
      description:this.props.result2.description,
      price:this.props.result2.price
  }

     
 }

 render(){
     
    console.log("my cart props" , this.state.description)
   
         
       let total = this.props.result2.price;
        let tax = (this.props.result2.price * 0.15);
        let totalIncTax = (+total + +tax);
        let mystyle = {
          borderTop: "1px solid #ddd",
          marginTop: "10px"
        };
        return (
            <div>
              <div>{this.state.description}</div>  
          <div style={{"marginTop": "30px", "backgroundColor":"#F6F6F6","padding": "10px"}}>
            <h3 className="row" style={{ fontWeight: 400 }}>
              <span className="col-6">total price:</span>
              <span className="col-6 text-right">${total}</span>
            </h3>
            <h3 className="row" style={{ fontWeight: 400 }}>
              <span className="col-6">tax (15%):</span>
              <span className="col-6 text-right">${tax}</span>
            </h3>
            <h3 className="row" style={mystyle}>
              <span className="col-6">tota inc tax:</span>
              <span className="col-6 text-right">${totalIncTax}</span>
            </h3>
    
          </div>
          </div>
        );
      }
    }
     
 

const  mapStateToProps=state=>{
    return{
      ...state
    }
  }
export default connect(mapStateToProps)(Cart)