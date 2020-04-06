import React from 'react';
import { data } from '../starter-data';
import NavBar from './NavBar';
import AppBar from './AppBar';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import Home from './Home';
import Calendar from './Calendar';
import Settings from './Settings';

class App extends React.Component {

  state = {
    users: {},
    rooms: {},
    items: {},
    tasks: {}
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    Object.keys(data).map(key => this.setState({ [key]: data[key] }))
  }

  render() {
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