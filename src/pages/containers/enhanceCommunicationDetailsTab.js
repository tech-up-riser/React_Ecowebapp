/* @flow */
import { connect } from 'react-redux';
import { compose, mapProps } from 'recompose';

import { getSelectedCommunication } from '../../communication';
import removeReactRouterProps from './removeReactRouterProps';

/**
 * Add the props needed by the CommunicationDetailsTab.
 */
export default compose(
  connect((state) => ({
    selectedCommunication: getSelectedCommunication(state),
  })),
  mapProps(({ selectedCommunication, dispatch, ...otherProps }) => ({
    description: selectedCommunication? selectedCommunication.title : '',
    attachments: selectedCommunication?
                  (selectedCommunication.attachments? selectedCommunication.attachments: []):
                  [],
    ...otherProps,
  })),
  removeReactRouterProps,
);
