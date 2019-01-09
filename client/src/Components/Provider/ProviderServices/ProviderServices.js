import React, { Component } from "react"
import $ from "jquery"
import "../../Cart/Cart.css"

class ProviderServices extends Component {
    constructor(props) {
        super(props)
        

    }

    render() {
        return (
            <div className="container">
<div className="row">
            {this.props.location.query.map((result, index) => {
              return   <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="card">
                  <img
                    src={result.imageUrl}
                    className="card-img-top"
                    alt=""
                  />
  
                  <div className="card-block text-left">
                    <h4 className="card-title">{result.title}</h4>
                    <p className="card-text">{result.description}</p>
                    <p className="card-text cart-delete">{result.price}</p>
                    <button>
             Delete
            </button>
  
                  </div>
                </div>
              </div>
          
              
            })}
              </div>
              </div>
    )
    }
}


export default ProviderServices



