import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rests }){
  return (
    <Route
      {...rests}
      render={props => {
        if (localStorage.getItem('token')) {
          return <Component {...props} {...rests}/>;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
}

function AdminRoute({component:Component, ...rests}){
  let user;
  return (
    <Route
      {...rests}
      render={props => {
        if (user.admin){
          return <Component {...props} {...rests}/>;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}