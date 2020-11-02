import React from "react";
import ReactDOM, { render } from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Users from "./components/users";
import Repo from "./components/repo";
import NotFound from "./components/notFound";
import Modal from "./components/modal-data";

const routing = (
  <Router>
    <div>
    {/* <Route exact path="/" component={App} />
      <Route path="/users" component={Users} />
      <Route path="/repo" component={Repo} /> */}
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/repo" component={Repo} />
        <Route path="/modal" component={Modal} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  routing,document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
