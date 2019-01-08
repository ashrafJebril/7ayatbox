import React,{Component} from "react"
import $ from "jquery"
import "./Provider.css"
import { Redirect, Link } from "react-router-dom";

class Provider extends Component{
 constructor(props){
     super(props)
     this.state={
       providerId:this.props.location.query,
       result:[],
       categoryId:1,
       description:"",
       imageUrl:"",
       location:"",
       price:"",
       rate:"",
       title:"",
       capicity:"",
       type:""


     }

 }   

 componentDidMount=()=>{

console.log("i am in")
$.ajax({
    url: "/provider/getProviderServices",
    type: "POST",
    data: {
     providerId: this.state.providerId,
     
    },
    success: data => {
    
      console.log("success services", data);
      this.setState({ result: data });
     
   
    },
    error: err => {
      console.log("ERROR");
    }
  });
  
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
console.log("providerId",this.state.providerId)
     return(
         
     <div>
       	<div class="container-fluid page-cont">
		<div class="row dash-row">
			
			<div class="col-4 data-box">
				<div>
					<h3><Link  to={{
                        pathname: "/ProviderServices",
                        query: this.state.result
                      }}><span>{this.state.result.length}</span> </Link>Services</h3>
				</div>
			</div>
			
			<div class="col-4 data-box">
				<div>
					<h3><span>0</span> Services</h3>
				</div>
			</div>
			
			<div class="col-4 data-box">
				<div>
					<h3><span>0</span> Services</h3>
				</div>
			</div>
			
		</div>
	</div>
  <div className="container">
<div className="row inputs" >
<div class="col-25">
<label for="fname">title</label>
</div>
<div class="col-75">
<input type="text" onChange={this.titleHandleChange} id="fname" name="firstname" placeholder="Your title.."></input>
</div>
</div>

<div className="row">
<div class="col-25">
<label for="subject">Image URL</label>
</div>
<div class="col-75">
<input type="text" onChange={this.imageHandleChange} id="subject" name="firstname" placeholder="Your Image.."></input> 
</div>
</div>
<div class="row">
    <div class="col-25">
      <label for="country">Service</label>
    </div>
    <div class="col-75">
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
<div class="col-25">
<label for="subject">Price</label>
</div>
<div class="col-75">
<input type="text" onChange={this.priceHandleChange} id="subject" name="firstname" placeholder="Your Price"></input> 
</div>
</div>

<div className="row">
<div class="col-25">
<label for="subject">Location</label>
</div>
<div class="col-75">
<input type="text" onChange={this.locationHandleChange} id="subject" name="firstname" placeholder="Your Location"></input> 
</div>
</div>
<div className="row">
<div class="col-25">
<label for="subject">Rate</label>
</div>
<div class="col-75">
<input type="text" onChange={this.rateHandleChange} id="subject" name="firstname" placeholder="Your Rate"></input> 
</div>
</div>
<div className="row">
<div class="col-25">
<label for="subject">Description</label>
</div>
<div class="col-75">
<textarea onChange={this.descriptionHandleChange} id="subject" name="firstname" placeholder="Your description.."></textarea>
</div>
</div>
<div class="row">
    <input type="submit" value="Submit" onClick={this.addServicesHandler}/>
  </div>
</div>
</div>


     )
     
 }
}


export default Provider



  //               onChange={e => this.setState({ host: e.target.value })} />
  //           </div>
  //         </div>
  //       </div>


  //       <div>
  //         <div className="form-group row">
  //           <label className="col-sm-2 col-form-label">Event Name: </label>
  //           <div className="col-sm-10">
  //             <input className="form-control" placeholder="event name" value={this.state.event}
  //               onChange={e => this.setState({ event: e.target.value })} />
  //           </div>
  //         </div>
  //       </div>

  //       <div>
  //         <div className="form-group row">
  //           <label className="col-sm-2 col-form-label">Event Cost: </label>
  //           <div className="col-sm-10">
  //             <input className="form-control" placeholder="cost" value={this.state.cost}
  //               onChange={e => this.setState({ cost: e.target.value })} />
  //           </div>
  //         </div>
  //       </div>



  //       <div>
  //         <div className="form-group row">
  //           <label className="col-sm-2 col-form-label"> Photo: </label>
  //           <div className="col-sm-10">
  //             <input className="form-control" placeholder="insert a URL" value={this.state.photo}
  //               onChange={e => this.setState({ photo: e.target.value })} />
  //           </div>
  //         </div>
  //       </div>



  //       <div>
  //         <div className="form-group row">
  //           <label className="col-sm-2 col-form-label"> Number of seats: </label>
  //           <div className="col-sm-10">
  //             <input className="form-control" placeholder="available seats number" value={this.state.sets}
  //               type="number" onChange={e => this.setState({ sets: e.target.value })} />
  //           </div>
  //         </div>
  //       </div>



  //       <div>
  //         <div className="form-group row">
  //           <label className="col-sm-2 col-form-label"> Date and time:</label>
  //           <div className="col-sm-10">
  //             <input className="form-control" placeholder="mm/dd/yy" value={this.state.date}
  //               type="datetime-local" onChange={e => this.setState({ date: e.target.value })} />
  //           </div>
  //         </div>
  //       </div>


  //       <div>
  //         <div className="form-group row">
  //           <label className="col-sm-2 col-form-label"> Event location:</label>
  //           <div class="col-sm-8">
  //             <input id="location-input" className="form-control" placeholder="city, street" value={this.state.location}
  //               onClick={this.modal} />
  //           </div>
  //           <div class="col-sm-2"><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Map</button></div>
  //         </div>
  //       </div>

  //       <div>
  //         <div className="form-group row">
  //           <label className="col-sm-2 col-form-label">Event description:</label>
  //           <div className="col-sm-10">
  //             <textarea className="form-control" placeholder="event description" value={this.state.description}
  //               onChange={e => this.setState({ description: e.target.value })} />
  //           </div>
  //         </div>
  //       </div>


  //       <div className="row">
  //         <button type="submit" value="create" className="btn btn-primary btn-lg btn-block" >create</button>
  //       </div>
  //     </div>
  //     <br />
  //   </form >
