import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyAVBcRX_tw6ayK5lxpyfJBCRDizUUlfdzw",
  authDomain: "suidrnr.firebaseapp.com",
  projectId: "suidrnr",
  storageBucket: "suidrnr.appspot.com",
  messagingSenderId: "14696651570",
  appId: "1:14696651570:web:0c8f4428f408855b8ad52b",
  measurementId: "G-GZCEMQ5N7M",
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
