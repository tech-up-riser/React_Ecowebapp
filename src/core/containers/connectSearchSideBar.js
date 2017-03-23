/* @flow */
import { connect } from 'react-redux';
import { compose, mapProps } from 'recompose';

import expandSideBarAction from '../actions/expandSideBarAction';
import collapseSideBarAction from '../actions/collapseSideBarAction';
import connectSideBar from './connectSideBar';

import type { Dispatch } from 'redux';

/**
 * Connect communication search functionality.
 */
export default compose(
  connect(null, (dispatch: Dispatch<*>, { sideBarId }) => ({
    collapseSideBar() {
      dispatch(collapseSideBarAction(sideBarId));
    },
    expandSideBar() {
      dispatch(expandSideBarAction(sideBarId));
    },
  })),
  connectSideBar,
  mapProps(({ loadCommunications, ...otherProps }) => ({
    title: 'Discussions', //TODO, remove to get from route
    catigories: undefined, //TODO, add a catigories reducer
    ...otherProps,
  })),
);
