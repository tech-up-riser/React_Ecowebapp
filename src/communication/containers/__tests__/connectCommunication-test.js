import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { COMMUNICATION_REDUCER_STATE } from '../../reducers/communicationsReducer';

import connectCommunication from '../connectCommunication';

const mockTitle = 'Test title';
const mockStatus = 'active';
function makeMockStore() {
  const getNewStore = configureStore([]);

  return getNewStore({
    [COMMUNICATION_REDUCER_STATE]: {
      selectedCommunication: {
        title: mockTitle,
        status: mockStatus,
      },
    }
  });
}

it('passes all props added when rendered through of the given Component.', () => {
  const testProps = { test0: 0, test1: 1, test2: 2 };
  const TestComponent = connectCommunication('div');
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

it('adds the selected tab prop to the given Component.', () => {
  const TestComponent = connectCommunication('div');
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <TestComponent />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.tab).toBeDefined();
});

it('adds the selected communication data to the props of the given Component.', () => {
  const TestComponent = connectCommunication('div');
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <TestComponent />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.title).toEqual(mockTitle);
  expect(props.status).toEqual(mockStatus);
});
