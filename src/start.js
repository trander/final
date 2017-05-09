import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Welcome, Logo, Login, Register } from './welcome';
import { App } from './app';
import { Profile } from './profile';
import {Search} from './search';

let router = (
    <Router history={hashHistory}>
        <Route path="/" component={Welcome}>
            <Route path="/login" component={Login} />
            <IndexRoute component={Register} />
  	         </Route>
    </Router>
);


if (location.pathname != '/welcome') {
    router = (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Profile} />
                <Route path="search" component={Search} />
            </Route>
        </Router>
    )
};


ReactDOM.render(
  router,
  document.querySelector('main')
);
