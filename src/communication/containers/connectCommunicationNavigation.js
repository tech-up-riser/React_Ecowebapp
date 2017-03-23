/* @flow */
import { connect } from 'react-redux';

import { collapseSideBarAction, expandSideBarAction } from '../../core';

import type { Dispatch } from 'redux';

/**
 * Connect communication search functionality.
 */
export default connect(null, (dispatch: Dispatch<*>, { sideBarId }) => ({
  collapseSideBar() {
    dispatch(collapseSideBarAction(sideBarId));
  },
  expandSideBar() {
    dispatch(expandSideBarAction(sideBarId));
  },
}));
