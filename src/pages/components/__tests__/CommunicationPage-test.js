import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import CommunicationPage from '../CommunicationPage';
import { COMMUNICATION_REDUCER_STATE } from '../../../communication/reducers/communicationsReducer';
import { SIDEBAR_REDUCER_STATE } from '../../../core/reducers/sideBarReducer';

function makeMockStore() {
  const getNewStore = configureStore([]);

  return getNewStore({
    [COMMUNICATION_REDUCER_STATE]: { },
    [SIDEBAR_REDUCER_STATE]: { },
  });
}

test('it displays the children next to the sidebar.', () => {
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <CommunicationPage results={[]}>
        Test Communication Page Content
      </CommunicationPage>
    </Provider>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it displays the given results in the sidebar.', () => {
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <CommunicationPage
        results={[
          { title: 'Testing department access', author: 'User 0', date: '14/Dec/2016 00:21 PM MST', status: 'active' },
          { title: 'Test communication 1', author: 'User 1', date: '14/Dec/2016 01:21 PM MST' },
          { title: 'Test communication 2', author: 'User 2', date: '14/Dec/2016 01:21 PM MST', status: 'in-active' },
        ]}
      >
        Test Communication Page Content
      </CommunicationPage>
    </Provider>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
