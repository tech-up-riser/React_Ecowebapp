import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { SIDEBAR_REDUCER_STATE } from '../../reducers/sideBarReducer';
import connectSideBar from '../connectSideBar';

function makeMockStore() {
  const getNewStore = configureStore([]);

  return getNewStore({
    [SIDEBAR_REDUCER_STATE]: { },
  });
}

it('passes all props added when rendered through of the given Component.', () => {
  const testProps = { test0: 0, test1: 1, test2: 2 };
  const TestComponent = connectSideBar('div');
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <TestComponent {...testProps} sideBarId="TEST_SIDEBAR" initialExpandedWidth={200} />
    </Provider>
  );
  const { props } = component.toJSON();

  for(let propsName in testProps) {
    expect(props[propsName]).toEqual(testProps[propsName]);
  }
});

it('adds isExpanded to the props of the given Component, which default to false.', () => {
  const TestComponent = connectSideBar('div');
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <TestComponent sideBarId="TEST_SIDEBAR" initialExpandedWidth={200} />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.isExpanded).toEqual(false);
});

it('adds expandedWidth to the props of the given Component, which default to 100%.', () => {
  const TestComponent = connectSideBar('div');
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <TestComponent sideBarId="TEST_SIDEBAR" initialExpandedWidth={200} />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.expandedWidth).toEqual('100%');
});
