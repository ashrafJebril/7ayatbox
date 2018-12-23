import React, { Component } from "react";
import $ from "jquery";
import Home from '../Components/Home/Home'
import Nav from '../Components/Home/NavBar/Nav'
import Footer from '../Components/Home/Footer/Footer'
import Categories from '../Components/Categories/Categories'
import SignIn from '../Components/SignIn/SignIn'


import {BrowserRouter ,Route ,Switch} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  componentDidMount() {
    $.ajax({
      url: "/hello",
      type: "GET",
      success: data => {
        this.setState({ text: data.express });
      },
      error: err => {
        alert(err);
      }
    });
  }
  render() {
    return (
      <div>
        <Nav/>
    
        <BrowserRouter>
        <Switch>
        <Route path="/SignIn" component={SignIn} exact/>
        <Route path="/" component={Home} exact/>
        <Route path='/Categories' component={Categories} exact />
        </Switch>
        
        </BrowserRouter>
<Footer/>

</div>
    );
  }
}

export default App;
