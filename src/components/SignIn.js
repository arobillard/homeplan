import React from 'react';
import { Redirect } from 'react-router-dom';

class SignIn extends React.Component {

  render() {
    return (
      <>
      <h1>Sign In</h1>
      <Redirect to="/app" />
      {/* <Link to="/app">Sign In</Link> */}
      </>
    )
  }

}

export default SignIn;