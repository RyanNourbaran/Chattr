import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./C/Title";
import MessageList from "./C/MessageList";
import SendMessageForm from "./C/SendMessageForm";

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "who'll win?"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: DUMMY_DATA
    };
  }

  render() {
    return (
      <div className="app">
        <Title />
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
      </div>
    );
  }
}

export default App;
