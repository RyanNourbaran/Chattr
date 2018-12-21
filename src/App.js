import React, { Component } from "react";
import "./App.css";
import Title from "./C/Title";
import MessageList from "./C/MessageList";
import SendMessageForm from "./C/SendMessageForm";
import Chatkit from "@pusher/chatkit-client";

const DUMMY_DATA = [
  {
    senderId: "Arya",
    text: "who'll win?"
  },
  {
    senderId: "Matt",
    text: "who'll win?"
  }
];
const instanceLocator = "v1:us1:91261234-cbed-48b8-9374-8ff1012e8b1b";
const testToken =
  "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/91261234-cbed-48b8-9374-8ff1012e8b1b/token";
const username = "Arya";
const roomId = "19376309";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []]
    };
    this.sendMessage = this.sendMessage.bind(this);
  }
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: username,
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
    });

    chatManager.connect().then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: roomId,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            });
          }
        }
      });
      this.currentUser = currentUser;
    });
  }
  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: roomId
    });
    console.log(text);
  }
  render() {
    return (
      <div className="app">
        <Title />
        <MessageList messages={this.state.messages} />
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
