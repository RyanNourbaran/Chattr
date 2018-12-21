import React, { Component } from "react";
import LetterAvatars from "./Avatar";

export default class MessageList extends Component {
  render() {
    return (
      <ul className="message-list">
        {this.props.messages.map(message => {
          return (
            <li>
              <LetterAvatars name={"srya"} />
              <div>{message.senderId}</div>
              <div>{message.text}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}
