/* @flow */
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import {
  CommunicationActivityTab,
  CommunicationCommentsTab,
  CommunicationDetailsTab,
  CommunicationPage,
  PageWrapper
} from './pages';

export default (
  <Router history={hashHistory}>
    <Route component={PageWrapper}>
      <Route path="/" component={CommunicationPage}>
        <IndexRoute             component={CommunicationDetailsTab} />
        <Route path="details"   component={CommunicationDetailsTab} />
        <Route path="comments"  component={CommunicationCommentsTab} />
        <Route path="activity"  component={CommunicationActivityTab} />
      </Route>
    </Route>
  </Router>
);
