import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route } from "react-router-dom";

import Signin from "./components/SignIn";
import SignUp from "./components/SignUp";
import Communities from './components/Communities'
import Countries from './components/Countries'



function App() {
  return (
    <div className="App">
      <Link to="/signin">Sign In</Link>
      <Route exact path="/signin" component={Signin}></Route>
      <Route path="/signup" component={SignUp} />
      <Route path='/homepage' component={Countries}/>
      <Route path='/country/:id' component={Communities}/>
    </div>
  );
}

export default App;
