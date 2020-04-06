import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import SignIn from './SignIn';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            {/* <Route component={NotFound} /> */}
            <Route component={App} />
        </Switch>
    </BrowserRouter>
);

export default Router;