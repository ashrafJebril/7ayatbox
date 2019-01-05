import React,{Component} from "react"

import "./Cart.css"

import {connect} from "react-redux"

class Cart extends Component{
 constructor(props){
     super(props)
  this.state={
     result:this.props.result2
    
  }

     
 }
 handleSubmit=()=>{
   
 }

 
 total=()=>{
   var total=0
   var x =this.props.result2

   for(var i=0; i<x.length ; i++){
   
     total=total+x[i].price

   
   }
   return total
 }




 

 render(){
     
  
   
         
     
        let mystyle = {
          borderTop: "1px solid #ddd",
          marginTop: "10px"
        };
 
        return (
          
            <div className="container">
       {this.state.result.map((result, index) => {
              return <li>price {result.price} description {result.description}</li> ;
            })}
          <div style={{"marginTop": "30px", "backgroundColor":"#F6F6F6","padding": "10px"}}>
            <h3 className="row" style={{ fontWeight: 400 }}>
              <span className="col-6">total price:</span>
              <span className="col-6 text-right">${this.total()}</span>
            </h3>
            <h3 className="row" style={{ fontWeight: 400 }}>
              <span className="col-6">tax (15%):</span>
              <span className="col-6 text-right">${this.total()* 0.15}</span>
            </h3>
            <h3 className="row" style={mystyle}>
              <span className="col-6">tota inc tax:</span>
              <span className="col-6 text-right">${this.total()* 0.15+this.total()}</span>
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