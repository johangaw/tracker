import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

import AppComponent from './AppComponent.js';
import TrackComponent from './TrackComponent.js';
import ViewComponent from './ViewComponent.js';
import NoMatch from './NoMatch.js';

const TrackerRouter = function () {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={AppComponent}>
                <Route path="track" component={TrackComponent}/>
                <Route path="view" component={ViewComponent}/>
                <Route path="*" component={NoMatch} />
            </Route>
        </Router>
    );
};

export default TrackerRouter;