import React from "react";

export const Blubb = props => {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    props.CableApp.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => setMessages(messages => messages.concat(data.message))
      }
    );
  }, []);

  return <div>{messages.join(",")}</div>;
};
