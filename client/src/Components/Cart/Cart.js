import React,{Component} from "react"
import $ from "jquery"
import "./Cart.css"
import { Redirect, Link } from "react-router-dom";

class Cart extends Component{
 constructor(props){
     super(props)
  

     
 }
 render(){
     console.log("cart data" ,this.props.location)
     return(
         
         <div className="cart">My Cart</div>
     )
 }
}

export default Cart