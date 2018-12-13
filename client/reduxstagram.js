import React, {Component} from 'react';

// import css
import {render} from 'react-dom';

// import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import css from './styles/style.styl';

// import react router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}/>
            <Route path="/view/:postId" component={Single}/>
        </Route>
    </Router>
);

render(router, document.getElementById('root'));