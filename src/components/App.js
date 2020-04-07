import React from 'react';
import base from '../base';
import { data } from '../starter-data';
import NavBar from './NavBar';
import AppBar from './AppBar';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import Home from './Home';
import Calendar from './Calendar';
import Settings from './Settings';
import SignIn from './SignIn';

class App extends React.Component {

  state = {
    users: {},
    rooms: {},
    items: {},
    tasks: {},
    calendar: {},
    user: null
  }

  componentDidMount() {
    this.ref = base.syncState('cheese', {
      context: this,
      state: 'users'
    });
  }

  componentWillUnmount() {
    console.log('umount')
    base.removeBinding(this.ref);
  }

  loadData = () => {
    Object.keys(data).map(key => this.setState({ [key]: data[key] }))
  }

  authenticate = () => {
    console.log('authenticated!');
  }

  render() {

    // 1. Check if they are logged in and if not return the Log In component
    if (!this.state.user) {
      return (
        <SignIn authenticate={this.authenticate} loadData={this.loadData} />
      )
    }
    // 2. If/Once logged In, render the store

    return (
      <>
        <NavBar />
        <main id="main" role="main">
          <AppBar />
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </main>
      </>
    )
  }
}

export default App;