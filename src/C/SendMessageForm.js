import React, { Component } from "react";

export default class SendMessageForm extends Component {
  constructor() {
    super();
    this.state = {
      message: "@"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("@handleSubmit");

    console.log(this.props);
    this.props.sendMessage(this.state.message);
    this.setState({
      message: ""
    });
  }
  render() {
    return (
      <form className="send-message-form" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type your message and hit ENTER"
          type="text"
        />
      </form>
    );
  }
}
