import React, { Component } from "react";
import "./App.css";
import Title from "./C/Title";
import MessageList from "./C/MessageList";
import SendMessageForm from "./C/SendMessageForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(text) {
    this.setState({
      messages: [...this.state.messages, { senderId: "Arya", text: text }]
    });
  }
  render() {
    return (
      <div className="app">
        <Title />
        <MessageList
          roomId={this.state.roomId}
          messages={this.state.messages}
        />
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
