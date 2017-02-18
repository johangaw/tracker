import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

import AppComponent from './AppComponent.jsx';
import TrackComponent from './TrackComponent.jsx';
import ViewComponent from './ViewComponent.jsx';
import NoMatch from './NoMatch.jsx';

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