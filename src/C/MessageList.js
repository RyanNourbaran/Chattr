import React, { Component } from "react";

export default class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="message-list">
        {this.props.messages.map(message => {
          return (
            <li key={message.id}>
              <div>{message.senderId}</div>
              <div>{message.text}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}
