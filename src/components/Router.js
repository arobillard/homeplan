import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import NotFound from './NotFound';
import App from './App';

class Router extends React.Component {

  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route path='/app' component={App} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }

}

export default Router;