import React from 'react';
import NavBar from './ui-elements/NavBar';
import AppBar from './ui-elements/AppBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Settings from './pages/Settings';
import NavDrawer from './ui-elements/NavDrawer';
import NavDrawerScrim from './ui-elements/NavDrawerScrim';
import { CSSTransition } from 'react-transition-group';

class UI extends React.Component {

  state = {
    navDrawerOpen: false
  }

  openNavDrawer = () => {
    this.setState({ navDrawerOpen: true })
  }

  closeNavDrawer = () => {
    this.setState({ navDrawerOpen: false })
  }

  render() {
    return (
      <>
        <NavBar />
        <main id="main" role="main">
          <CSSTransition
            classNames="mdc-drawer-animate"
            timeout={{enter: 250, exit: 250}}
            in={this.state.navDrawerOpen}
          >
            <NavDrawer
              userData={this.props.userData}
              logOut={this.props.logOut}
            />
          </CSSTransition>  
          <CSSTransition
            classNames="mdc-drawer-scrim-animate"
            timeout={{enter: 250, exit: 250}}
            in={this.state.navDrawerOpen}
          >
            <NavDrawerScrim
              closeNavDrawer={this.closeNavDrawer}
            />
          </CSSTransition>
          <AppBar openNavDrawer={this.openNavDrawer} />
          <Switch>
            <Route path="/app/profile">
              <Profile
                userData={this.props.userData}
              />
            </Route>
            <Route path="/app/home">
              <Home />
            </Route>
            <Route path="/app/calendar">
              <Calendar />
            </Route>
            <Route path="/app/settings">
              <Settings />
            </Route>
            <Route>
              <Redirect to="/app/profile" />
            </Route>
          </Switch>
        </main>
      </>
    )
  }

}

export default UI;