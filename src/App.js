import React from "react";
import "./App.css";
import Signin from "./components/SignIn";
import SignUp from "./components/SignUp";
import Community from "./components/Community";
import { Link, Route } from "react-router-dom";
import Child from "./components/Child";
import Communities from "./components/Communities";
import Countries from "./components/Countries";
import Users from "./components/Users";
import PrivateRoute from "./components/PrivateRoute";
import UserTest from "./components/UserTest";
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <br />
      <Route exact path="/signin" component={Signin}></Route>
      <Route path="/signup" component={SignUp} />
      <PrivateRoute exact path="/country/:id/:id" component={Community} />
      <PrivateRoute path="/child/:childId" component={Child} />
      <PrivateRoute path="/homepage" component={Countries} />
      <PrivateRoute exact path="/country/:id" component={Communities} />
      <Route path="/users" component={Users} />
      <Route path="/userTest" component={UserTest} />
    </div>
  );
}

export default App;
