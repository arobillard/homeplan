import React from 'react';
import { NavLink } from 'react-router-dom';


class SignIn extends React.Component {

  render() {
    return (
      <>
      <h1>HomePlan</h1>
      <NavLink to="/profile">Sign In</NavLink>
      </>
    )
  }

}

export default SignIn;