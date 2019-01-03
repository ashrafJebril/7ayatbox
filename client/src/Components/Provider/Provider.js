import React,{Component} from "react"
import $ from "jquery"

class Provider extends Component{
 constructor(props){
     super(props)
     this.state={
       providerId:this.props.location.query,
       categoryId:1,
       description:"",
       imageUrl:"",
       location:"",
       price:"",
       rate:"",
       title:"",
       capicity:"",
       type:"Capacity"


     }

 }   
 addServicesHandler=()=>{
   
    var obj = {
        providerId: this.state.providerId,
        categoryId: this.state.categoryId,
        description: this.state.description,
        imageUrl: this.state.imageUrl, 
        price: this.state.price,
        location:this.state.location,
        rate: this.state.rate,
        title: this.state.title,
        capicity: this.state.capicity
       
      };
      console.log("success", obj.providerId,obj.categoryId ,obj.description,obj.imageUrl,obj.price,obj.rate,obj.capicity,obj.title,obj.location);
    $.ajax({
        url: "/provider/addService",
        type: "POST",
        data: {
         providerId: obj.providerId,
         categoryId: obj.categoryId,
         description: obj.description,
         imageUrl: obj.imageUrl,
         price: obj.price,
         rate: obj.rate,
         title: obj.title,
         capicity: obj.capicity,
         location:obj.location


         
        },
        success: data => {
        
          console.log("success", data);
          alert("you Service is Added")
          this.setState({ text: data.express });
        },
        error: err => {
          console.log("ERROR");
        }
      });
      
    


 

   

 }
 ServiceHandleChange = (event) =>{
  

    this.setState({categoryId: event.target.value});
    console.log("event.target.value",event.target.value ,"categoryId",this.state.categoryId)
 }


 titleHandleChange = (event) =>
 this.setState({title: event.target.value});
 locationHandleChange = (event) =>
 this.setState({location: event.target.value});
 imageHandleChange = (event) =>
 this.setState({imageUrl: event.target.value});
 locationHandleChange = (event) =>
 this.setState({location: event.target.value});
 descriptionHandleChange = (event) =>
 this.setState({description: event.target.value});
rateHandleChange = (event) =>
 this.setState({rate: event.target.value});
priceHandleChange = (event) =>
 this.setState({price: event.target.value});
 capicityHandleChange = (event) =>
 this.setState({capicity: event.target.value});
 render(){

     return(
         
         <div>
<div className="row">
<div className="col-lg-3">
Title
</div>
<div className="col-lg-3">
<input type="text" onChange={this.titleHandleChange}></input>
</div>
</div>
<div className="row">
<div className="col-lg-3">
Description
</div>
<div className="col-lg-3">
<input type="text" onChange={this.descriptionHandleChange}></input>
</div>
</div>
<div className="row">
<div className="col-lg-3">
Image URL
</div>
<div className="col-lg-3">
<input type="text" onChange={this.imageHandleChange}></input>
</div>
</div>
<div className="row">
<div className="col-lg-3">
Price
</div>
<div className="col-lg-3">
<input type="text" onChange={this.priceHandleChange}></input>
</div>
</div>
<div className="row">
<div className="col-lg-3">
{this.state.type}
</div>
<div className="col-lg-3">
<input type="text" id="capicity-input" onChange={this.capicityHandleChange}></input>
</div>
</div>
<div className="row">
<div className="col-lg-3">
Service
</div>
<div className="col-lg-3">

<select value={this.state.value} onChange={this.ServiceHandleChange}>
    
  <option value="1">Halls</option>











  
  <option value="2">Zafeh</option>
  <option value="3">DJ</option>
  <option value="4">Beauty Center</option>
  <option value="5">Flowers</option>
  <option value="6">Cars</option>
</select>

</div>
</div>
<div className="row">
<div className="col-lg-3">
Rate
</div>
<div className="col-lg-3">
<input type="text" onChange={this.rateHandleChange}></input>
</div>
<div className="col-lg-3"><button onClick={this.addServicesHandler}>submit</button></div>
</div>
<div className="row">
<div className="col-lg-3">
Location
</div>
<div className="col-lg-3">
<input type="text" onChange={this.locationHandleChange}></input>
</div>

</div>
</div>
     )
     
 }
}
export default Provider