/* @flow */
import { connect } from 'react-redux';
import { compose, lifecycle, mapProps } from 'recompose';
import { hashHistory } from 'react-router';

import getSelectedCommunication from '../selectors/getSelectedCommunication';

import type { Dispatch } from 'redux';

/**
 * Connect communication search functionality.
 */
export default compose(
  connect((state) => ({
    selectedCommunication: getSelectedCommunication(state),
  })),
  mapProps(({ dispatch, selectedCommunication: { title, status }, ...otherProps }) => ({
    title,
    status,
    tab: (() => {
      const { pathname } = hashHistory.getCurrentLocation();

      if(pathname === '/') return 'details';
      else                 return pathname.slice(1);
    })(),
    ...otherProps,
  })),
);
