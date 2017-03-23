import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import connectCommunicationsSearch from '../connectCommunicationsSearch';

function makeMockStore() {
  const getNewStore = configureStore([]);

  return getNewStore({});
}

it('passes all props added when rendered through of the given Component.', () => {
  const testProps = { test0: 0, test1: 1, test2: 2 };
  const TestComponent = connectCommunicationsSearch('div');
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <TestComponent {...testProps} />
    </Provider>
  );
  const { props } = component.toJSON();

  for(let propsName in testProps) {
    expect(props[propsName]).toEqual(testProps[propsName]);
  }
});

it('adds search results to the props of the given Component.', () => {
  const TestComponent = connectCommunicationsSearch('div');
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <TestComponent />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.results).toBeDefined();
});
