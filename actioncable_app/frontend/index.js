import React from "react";
import ReactDOM from "react-dom";
import ChatRoom from "./ChatRoom.js";

const b = require("actioncable");

const CableApp = {};
CableApp.cable = b.createConsumer("ws://localhost:8081/cable");

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<ChatRoom CableApp={CableApp} />, root);
});
