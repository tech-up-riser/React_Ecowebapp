import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import expandSideBarAction from '../../actions/expandSideBarAction';
import collapseSideBarAction from '../../actions/collapseSideBarAction';
import { SIDEBAR_REDUCER_STATE } from '../../reducers/sideBarReducer';
import connectSearchSideBar from '../connectSearchSideBar';

const { arrayContaining } = expect;

function makeMockStore() {
  const getNewStore = configureStore([]);

  return getNewStore({
    [SIDEBAR_REDUCER_STATE]: { },
  });
}

it('passes all props added when rendered through of the given Component.', () => {
  const testProps = { test0: 0, test1: 1, test2: 2 };
  const TestComponent = connectSearchSideBar('div');
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

it('adds the title to the Compnents props', () => {
  const TestComponent = connectSearchSideBar('div');
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <TestComponent sideBarId="TEST_SIDEBAR" initialExpandedWidth={200} />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.title).toBeDefined();
});

it('adds the collapse function the to the Component, which is called with the given sideBarId.', () => {
  const TestComponent = connectSearchSideBar('div');
  const TEST_SIDEBAR = 'TEST_SIDEBAR';
  const testStore = makeMockStore();
  const component = renderer.create(
    <Provider store={testStore}>
      <TestComponent sideBarId={TEST_SIDEBAR} initialExpandedWidth={200} />
    </Provider>
  );
  const { props } = component.toJSON();

  props.collapseSideBar();
  const actions = testStore.getActions();

  expect(actions).toEqual(arrayContaining([ collapseSideBarAction(TEST_SIDEBAR) ]));
});

it('adds the expand function the to the Component, which is called with the given sideBarId.', () => {
  const TestComponent = connectSearchSideBar('div');
  const TEST_SIDEBAR = 'TEST_SIDEBAR';
  const testStore = makeMockStore();
  const component = renderer.create(
    <Provider store={testStore}>
      <TestComponent sideBarId={TEST_SIDEBAR} initialExpandedWidth={200} />
    </Provider>
  );
  const { props } = component.toJSON();

  props.expandSideBar();
  const actions = testStore.getActions();

  expect(actions).toEqual(arrayContaining([ expandSideBarAction(TEST_SIDEBAR) ]));
});
