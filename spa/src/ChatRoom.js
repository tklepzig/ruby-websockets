import React from "react";
import MessageForm from "./MessageForm.js";
import { Blubb } from "./Blubb.js";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    this.props.CableApp.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          this.setState({
            messages: this.state.messages.concat(data.message)
          });
        },
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    );
  }

  componentDidUpdate() {
    this.bottom.current.scrollIntoView();
  }

  render() {
    const messageList = this.state.messages.map(message => {
      return (
        <li key={message.id}>
          {message}
          <div ref={this.bottom} />
        </li>
      );
    });
    return (
      <div className="chatroom-container">
        <div>ChatRoom</div>
        <div className="message-list">{messageList}</div>
        <MessageForm CableApp={this.props.CableApp} />
        <Blubb CableApp={this.props.CableApp} />
      </div>
    );
  }
}

export default ChatRoom;
