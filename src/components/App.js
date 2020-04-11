import React from 'react';
import base, { firebaseApp } from '../base';
import firebase from 'firebase';
import Authenticate from './Authenticate';
import UI from './UI';

class App extends React.Component {

  state = {
    userData: {},
    loggedIn: false
  }

  componentDidMount() {
    // reinstate local storage
    const lsLoggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    const lsCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (lsLoggedIn) {
      this.setState({
        loggedIn: lsLoggedIn,
        userData: lsCurrentUser
      });
      this.ref = base.syncState(`users/${lsCurrentUser.uid}`, {
        context: this,
        state: 'userData'
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('loggedIn', this.state.loggedIn);
  }

  authenticate = () => {
    const authProvider = new firebase.auth.FacebookAuthProvider();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  }

  authHandler = async (authData) => {
    console.log('authHandler running')
    const user = authData.user.uid;
    const userCheck = await base.fetch(`users/${user}`, {context: this});
    const nameArray = authData.user.displayName.split(' ');
    const fName = nameArray[0];
    const nameReverse = nameArray.reverse();
    const lName = nameReverse[0];
    console.log(nameArray);
    console.log(nameArray[0]);
    console.log(nameReverse[0]);
    // 1. If user doesn't exist, create user and set to state
    if(!userCheck.uid) {
      await base.post(`users/${user}`, {
        data: {
          uid: user,
          email: authData.user.email,
          img: authData.user.photoURL,
          name: authData.user.displayName,
          fName: fName,
          lName: lName
        }
      });
    }
    // 2. Set State
    this.setState({
      userData: {
        uid: user,
        email: authData.user.email,
        img: authData.user.photoURL,
        name: authData.user.displayName,
        fName: fName,
        lName: lName
      }
    })
    // 3. Sync State
    this.ref = base.syncState(`users/${user}`, {
      context: this,
      state: 'userData'
    });
    // 4. Set state to logged in 
    this.setState({ loggedIn: true });
    // 5. Save data to local storage
    localStorage.setItem('currentUser', JSON.stringify(this.state.userData));
    // 6. Push to profile page.
    this.props.history.push(`/app/profile`);
  }

  logOut = async () => {
    console.log('Logging Out!');
    await firebase.auth().signOut();
    this.setState({
      loggedIn: false,
      userData: {}
    });
    localStorage.removeItem('currentUser');
    this.props.history.push(`/`);
  }

  render() {
    if(!this.state.loggedIn) {
      return (
        <Authenticate authenticate={this.authenticate}/>
      )
    }
    return (
        <UI
          userData={this.state.userData}
          logOut={this.logOut}
        />
    )
  }

}

export default App;