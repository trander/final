import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Welcome, Logo, Login, Register } from './welcome';
import { App } from './app';
import { Main } from './main';
import { SearchedVoca } from './SearchedVoca';
import { List } from './list';
import { Profile } from './profile';
import { Bio } from './userbio';

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
                <IndexRoute component={Main} />
                <Route path="/search" component={SearchedVoca} />
                <Route path="/list" component={List} />
                <Route path="/editbio" component={Bio} />
            </Route>
        </Router>
    )
};

ReactDOM.render(
  router,
  document.querySelector('main')
);
