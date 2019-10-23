import React from "react";
import "./App.css";
import Signin from "./components/SignIn";
import SignUp from "./components/SignUp";
import CommunityTesting from "./components/CommunityTesting";
import { Link, Route } from "react-router-dom";
import Child from "./components/Child";

function App() {
  return (
    <div className="App">
      <Link to="/signin">Sign In</Link> <br />
      <Link to="/signup">Sign Up</Link>
      <br />
      <Link to="/community">Community Page</Link>
      <br />
      <Link to="/child">ChildPage</Link>
      <Route exact path="/signin" component={Signin}></Route>
      <Route path="/signup" component={SignUp} />
      <Route exact path="/community" component={CommunityTesting}></Route>
      <Route path="/child" component={Child} />
    </div>
  );
}

export default App;
