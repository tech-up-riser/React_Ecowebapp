import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import connectUserInfo from '../connectUserInfo';

function makeMockStore() {
  const getNewStore = configureStore([]);

  return getNewStore({});
}

it('passes all props added when rendered through of the given Component.', () => {
  const testProps = { test0: 0, test1: 1, test2: 2 };
  const TestComponent = connectUserInfo('div');
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

it('adds the client name to the props of the given Component.', () => {
  const TestComponent = connectUserInfo('div');
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <TestComponent />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.clientName).toBeDefined();
});

it('adds the client\'s id to the props of the given Component.', () => {
  const TestComponent = connectUserInfo('div');
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <TestComponent />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.clientId).toBeDefined();
});

it('adds isAdmin to the props of the given Component.', () => {
  const TestComponent = connectUserInfo('div');
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <TestComponent />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.isAdmin).toBeDefined();
});

it('adds the perform logout function to the props of the given Component.', () => {
  const TestComponent = connectUserInfo('div');
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <TestComponent />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.performLogout).toBeDefined();
});
