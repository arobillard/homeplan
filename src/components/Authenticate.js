import React from 'react';


class Authenticate extends React.Component {

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
        {/* {this.props.authenticate()} */}
      </>
    )
  }

}

export default Authenticate;