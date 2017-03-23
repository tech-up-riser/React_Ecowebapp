/* @flow */
import { connect } from 'react-redux';
import { compose, lifecycle, mapProps } from 'recompose';

import registerSideBarAction from '../actions/registerSideBarAction';
import unregisterSideBarAction from '../actions/unregisterSideBarAction';
import getIsExpanded from '../selectors/getIsExpanded';

/**
 * Register the given component as a Sidebar, that can expand and collapse.
 */
export default compose(
  connect((state, { sideBarId }) => ({
    ...getIsExpanded(state, sideBarId),
  })),
  lifecycle({
    componentDidMount() {
      const { dispatch, sideBarId, initialExpandedWidth, defaultExpanded } = this.props;
      if(!sideBarId)            throw new Error('Side Bars require a sideBarId.');
      if(!initialExpandedWidth) throw new Error('Side Bars require a initialExpandedWidth.');

      dispatch(registerSideBarAction(sideBarId, initialExpandedWidth, defaultExpanded));
    },
    componentWillUnmount() {
      const { dispatch, sideBarId } = this.props;

      dispatch(unregisterSideBarAction(sideBarId));
    },
  }),
  mapProps(({ state, dispatch, sideBarId, initialExpandedWidth, defaultExpanded, ...otherProps }) => otherProps),
);
