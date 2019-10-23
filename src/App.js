import React from "react";
import "./App.css";

import Signin from "./components/SignIn";
import SignUp from "./components/SignUp";

<<<<<<< HEAD
import CommunityTesting from "./components/CommunityTesting";
=======
import Community from "./components/Community";
import { Link, Route } from "react-router-dom";
>>>>>>> dd997b5470b92926b4f9ab122350d8573059a002
import Child from "./components/Child";
import Communities from "./components/Communities";
import Countries from "./components/Countries";

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
<<<<<<< HEAD

      <Route exact path= '/community' component={CommunityTesting}></Route>
      <Route path='/child' component={Child} />
      <Route path='/homepage' component={Countries}/>
      <Route path='/country/:id' component={Communities}/>

=======
      <Route exact path="/community" component={Community}></Route>
      <Route path="/child" component={Child} />
      <Route path="/homepage" component={Countries} />
      <Route path="/country/:id" component={Communities} />
>>>>>>> dd997b5470b92926b4f9ab122350d8573059a002
    </div>
  );
}

export default App;
