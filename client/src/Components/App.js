import React, { Component } from "react";
import $ from "jquery";
import Home from "../Components/Home/Home";
import Nav from "../Components/Home/NavBar/Nav";


import Reservation from "../Components/Categories/Reservation/Reservation.js";

import Budget from "../Components/Categories/Budget/Budget";
import ServicesList from "../Components/ServicesList/ServicesList";
import BudgetResult from "../Components/Categories/BudgetResult/BudgetResult";
import Provider from "../Components/Provider/Provider"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "../Components/Cart/Cart"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  componentDidMount() {
    $.ajax({
      url: "/provider/login",
      type: "POST",
      data: {
        email: "sebawy@gmail.com",
        password: "123456",
        name: "Sebawy Group"
      },
      success: data => {
        //alert("Hi");
        console.log("success", data);
        this.setState({ text: data.express });
      },
      error: err => {
        console.log("ERROR");
      }
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />

          <Switch>
            <Route exact path="/Provider" component={Provider} />

            <Route exact path="/" component={Home} />
            <Route exact path="/Reservation" component={Reservation} />
            <Route exact path="/budget" component={Budget} />
            <Route exact path="/budgetresult" component={BudgetResult} />
            <Route exact path="/ServicesList" component={ServicesList} />
            <Route exact path="/Cart" component={Cart}></Route>
            <Route exact path="/Reservation" component={Reservation}></Route>
          </Switch>

          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
