/* @flow */
import { connect } from 'react-redux';
import { compose, mapProps } from 'recompose';

import { getSelectedCommunication } from '../../communication';
import removeReactRouterProps from './removeReactRouterProps';

/**
 * Add the props needed by the CommunicationActivityTab.
 */
export default compose(
 connect((state) => ({
   selectedCommunication: getSelectedCommunication(state),
 })),
 mapProps(({ selectedCommunication, dispatch, ...otherProps }) => ({
   activity: selectedCommunication?
               (selectedCommunication.activity? selectedCommunication.activity: []):
               [],
   ...otherProps,
 })),
 removeReactRouterProps,
);
