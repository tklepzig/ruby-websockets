import React from "react";

export const Blubb = () => {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => setMessages(messages => messages.concat(data.message))
      }
    );
  }, []);

  return <div>{messages.join(",")}</div>;
};
