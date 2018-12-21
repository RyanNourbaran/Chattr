import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const instanceLocator = "v1:us1:91261234-cbed-48b8-9374-8ff1012e8b1b";
const testToken =
  "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/91261234-cbed-48b8-9374-8ff1012e8b1b/token";
const username = "perborgen";
const roomId = 9796712;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
