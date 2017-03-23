import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { storiesOf } from '@kadira/storybook';

import Placeholder from '../Placeholder';

import CommunicationPage from '../../src/pages/components/CommunicationPage';
import { COMMUNICATION_REDUCER_STATE } from '../../src/communication/reducers/communicationsReducer';

function makeMockStore() {
  const getNewStore = configureStore([]);
  const communications = [
    { title: 'Test communication 0', author: 'User 0', date: '14/Dec/2016 00:21 PM MST', status: 'active' },
    { title: 'Test communication 1', author: 'User 1', date: '14/Dec/2016 01:21 PM MST' },
    { title: 'Test communication 2', author: 'User 2', date: '14/Dec/2016 01:21 PM MST', status: 'in-active' },
  ];

  return getNewStore({
    COMMUNICATION_REDUCER_STATE: {
      communications,
      selectedCommunication: communications[0],
    },
  });
}

storiesOf('CommunicationPage', module)
  .add('shows the Communication Page with a placeholder child.', () => (
    <Provider store={makeMockStore()}>
      <CommunicationPage>
        <Placeholder />
      </CommunicationPage>
    </Provider>
  ));
