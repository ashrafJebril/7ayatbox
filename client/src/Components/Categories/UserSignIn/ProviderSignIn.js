import React,{Component} from 'react'

class ProviderSignIn extends Comment{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }



    loginHandler=()=>{
        $.ajax({
            url: "/provider/login",
            type: "POST",
            data: {
              email: e.tareget.valu,
              password: e.tareget.valu,
             
            },
            success: data => {
              //alert("Hi");
              console.log("success", data);
              this.setState({ id:data.id ,name:data.name  });
            },
            error: err => {
              console.log("ERROR");
            }
          });


        }
        render(){
            return(
                
               
            <div></div>
            )
        }
        
    }


export default ProviderSignIn 
