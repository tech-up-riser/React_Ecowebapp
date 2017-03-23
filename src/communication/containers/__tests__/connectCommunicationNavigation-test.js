import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { collapseSideBarAction, expandSideBarAction } from '../../../core';
import connectCommunicationNavigation from '../connectCommunicationNavigation';

const { arrayContaining } = expect;
//NOTE, remove and use "div" if recompose is added to the connectCommunicationNavigation
function TestDiv(props) {
  return <div {...props} />;
}

function makeMockStore() {
  const getNewStore = configureStore([]);

  return getNewStore({});
}

it('passes all props added when rendered through of the given Component.', () => {
  const testProps = { test0: 0, test1: 1, test2: 2 };
  const TestComponent = connectCommunicationNavigation(TestDiv);
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

it('adds the collapse function the to the Component, which is called with the given sideBarId.', () => {
  const TestComponent = connectCommunicationNavigation(TestDiv);
  const TEST_SIDEBAR = 'TEST_SIDEBAR';
  const testStore = makeMockStore();
  const component = renderer.create(
    <Provider store={testStore}>
      <TestComponent sideBarId={TEST_SIDEBAR} />
    </Provider>
  );
  const { props } = component.toJSON();

  props.collapseSideBar();
  const actions = testStore.getActions();

  expect(actions).toEqual(arrayContaining([ collapseSideBarAction(TEST_SIDEBAR) ]));
});

it('adds the expand function the to the Component, which is called with the given sideBarId.', () => {
  const TestComponent = connectCommunicationNavigation(TestDiv);
  const TEST_SIDEBAR = 'TEST_SIDEBAR';
  const testStore = makeMockStore();
  const component = renderer.create(
    <Provider store={testStore}>
      <TestComponent sideBarId={TEST_SIDEBAR} />
    </Provider>
  );
  const { props } = component.toJSON();

  props.expandSideBar();
  const actions = testStore.getActions();

  expect(actions).toEqual(arrayContaining([ expandSideBarAction(TEST_SIDEBAR) ]));
});
