import React from 'react';


class SignIn extends React.Component {

  render() {
    return (
      <>
      <h1>Welcome to HomePlan</h1>
      <button
        className="btn-sign-in-facebook"
        onClick={this.props.authenticate}
      >
        Sign In with Facebook
      </button>
        <button onClick={this.props.loadData}>Load Data</button>
      </>
    )
  }

}

export default SignIn;