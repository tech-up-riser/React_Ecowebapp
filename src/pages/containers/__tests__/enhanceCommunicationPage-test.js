import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { COMMUNICATION_REDUCER_STATE } from '../../../communication/reducers/communicationsReducer';
import { SIDEBAR_REDUCER_STATE } from '../../../core/reducers/sideBarReducer';
import enhanceCommunicationPage from '../enhanceCommunicationPage';

function makeMockStore(results) {
  const getNewStore = configureStore([]);

  return getNewStore({
    [COMMUNICATION_REDUCER_STATE]: {
      communications: results? results: [],
    },
    [SIDEBAR_REDUCER_STATE]: { },
  });
}

it('passes all props added when rendered through of the given Component.', () => {
  const testProps = { test0: 0, test1: 1, test2: 2 };
  const TestComponent = enhanceCommunicationPage('div');
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <TestComponent sideBarId="TEST_SIDEBAR" initialExpandedWidth={200} {...testProps} />
    </Provider>
  );
  const { props } = component.toJSON();

  for(let propsName in testProps) {
    expect(props[propsName]).toEqual(testProps[propsName]);
  }
});

it('adds search results to the props of the given Component.', () => {
  const results = [
    { title: 'Test communication 0', author: 'User 0', date: '14/Dec/2016 00:21 PM MST', status: 'active' },
    { title: 'Test communication 1', author: 'User 1', date: '14/Dec/2016 01:21 PM MST' },
    { title: 'Test communication 2', author: 'User 2', date: '14/Dec/2016 01:21 PM MST', status: 'in-active' },
  ];
  const TestComponent = enhanceCommunicationPage('div');
  const component = renderer.create(
    <Provider store={makeMockStore(results)}>
      <TestComponent sideBarId="TEST_SIDEBAR" initialExpandedWidth={200} />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.results).toEqual(results);
});
