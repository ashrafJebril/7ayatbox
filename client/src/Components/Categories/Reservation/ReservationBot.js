import ChatBot from "react-simple-chatbot";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
class ReservationBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      age: ""
    };

    this.theme = {
      background: "#f5f8fb",
      fontFamily: "Helvetica Neue",
      headerBgColor: "#EF6C00",
      headerFontColor: "#fff",
      headerFontSize: "15px",
      botBubbleColor: "#EF6C00",
      botFontColor: "#fff",
      userBubbleColor: "#fff",
      userFontColor: "#4a4a4a"
    };

    this.steps = [
      {
        id: "1",
        message: "What is your name?",
        trigger: "2"
      },
      {
        id: "2",
        user: true,
        trigger: "3"
      },
      {
        id: "3",
        message: "Hi {previousValue}, nice to meet you!",
        trigger: "4"
      },
      {
        id: "4",
        message: "Can I help you in your booking?",
        trigger: "5"
      },
      {
        id: "5",
        options: [
          { value: "yes", label: "yes", trigger: "6" },
          { value: "no", label: "no", trigger: "no" }
        ]
      },
      {
        id: "no",

        message: "Ok have a nice day :)",
        end: true
      },
      {
        id: "6",

        message: "Please choose the month",
        trigger: "7"
      },
      {
        id: "7",
        options: [
          { value: "Jan", label: "Jan", trigger: "8" },
          { value: "Feb", label: "Feb", trigger: "8" },
          { value: "Mar", label: "Mar", trigger: "8" },
          { value: "Apr", label: "Apr", trigger: "8" },
          { value: "may", label: "may", trigger: "8" },
          { value: "Jun", label: "Jun", trigger: "8" },
          { value: "Jul", label: "Jul", trigger: "8" },
          { value: "Aug", label: "Aug", trigger: "8" },
          { value: "Sep", label: "Sep", trigger: "8" },
          { value: "Oct", label: "Oct", trigger: "8" },
          { value: "Nov", label: "Nov", trigger: "8" },
          { value: "Dec", label: "Dec", trigger: "8" }
        ]
      },
      {
        id: "8",
        message: "Do you want the first available day? ",
        trigger: "9"
      },
      {
        id: "9",
        options: [
          { value: "yes", label: "yes", trigger: "10" },
          { value: "no", label: "no", trigger: "11" }
        ]
      },
      {
        id: "10",

        options: [
          {
            value: 1,
            label: `${this.getAvailableDates()}`,
            trigger: "13"
          }
        ]
      },
      {
        id: "11",
        message: "Ok key in your preferred day",
        trigger: "12"
      },
      {
        id: "12",
        user: true,
        trigger: "13"
      },
      {
        id: "13",
        message: "ok I added the service to your plan",
        end: true
      }
    ];
  }
  handleEnd = ({ steps, values }) => {
    console.log("Values", values);
  };
  getAvailableDates = month => {
    return Math.floor(Math.random() * 30) + 1;
  };
  componentDidMount() {}
  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <ChatBot steps={this.steps} handleEnd={this.handleEnd} />
      </ThemeProvider>
    );
  }
}
export default ReservationBot;
