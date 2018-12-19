import React, { Component } from "react";
import $ from "jquery";
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
    return <div className="App">{this.state.text}</div>;
  }
}

export default App;
