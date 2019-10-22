import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Signin from "./components/SignIn";
import SignUp from "./components/SignUp";
import Community from "./components/Community";
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/signin">Sign In</Link>
      <Route exact path="/signin" component={Signin}></Route>
      <Route path="/signup" component={SignUp} />
      <Community />
    </div>
  );
}

export default App;
