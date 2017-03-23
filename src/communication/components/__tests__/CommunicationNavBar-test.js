import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { SIDEBAR_REDUCER_STATE } from '../../../core/reducers/sideBarReducer';
import CommunicationNavBar from '../CommunicationNavBar';

function makeMockStore() {
  const getNewStore = configureStore([]);

  return getNewStore({
    [SIDEBAR_REDUCER_STATE]: { },
  });
}

test('it displays its children below the header.', () => {
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <CommunicationNavBar sideBarId="TEST_SIDEBAR" initialExpandedWidth={200}>
        <i>Test Child 0</i>
        <i>Test Child 1</i>
        <i>Test Child 2</i>
      </CommunicationNavBar>
    </Provider>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

//TODO, how to test expand and collapse functions (currently can only do default closed test)
