/* @flow */
import { connect } from 'react-redux';
import { compose, lifecycle, mapProps } from 'recompose';

import loadCommunicationsAction from '../actions/loadCommunicationsAction';
import selectCommunicationAction from '../actions/selectCommunicationAction';
import getCommunications from '../selectors/getCommunications';

import type { Dispatch } from 'redux';

/**
 * Connect communication search functionality.
 */
export default compose(
  connect(
    (state) => ({
      results: getCommunications(state),
    }),
    (dispatch: Dispatch<*>) => ({
      loadCommunications() {
        dispatch(loadCommunicationsAction());
        dispatch(selectCommunicationAction(0)); //TODO, remove to get from route
      },
    }),
  ),
  lifecycle({
    componentDidMount() {
      //NOTE, this loads static user data, needs to be changed with server data
      const { loadCommunications } = this.props;
      loadCommunications();
    },
  }),
  mapProps(({ loadCommunications, ...otherProps }) => otherProps),
);
