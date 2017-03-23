import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { COMMUNICATION_REDUCER_STATE } from '../../../communication/reducers/communicationsReducer';
import enhanceCommunicationDetailsTab from '../enhanceCommunicationDetailsTab';

function makeMockStore() {
  const getNewStore = configureStore([]);

  return getNewStore({
    [COMMUNICATION_REDUCER_STATE]: {},
  });
}

it('passes all props added when rendered through of the given Component.', () => {
  const testProps = { test0: 0, test1: 1, test2: 2 };
  const TestComponent = enhanceCommunicationDetailsTab('div');
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

it('adds the description to the props of the given Component.', () => {
  const TestComponent = enhanceCommunicationDetailsTab('div');
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <TestComponent />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.description).toBeDefined();
});

it('adds the attachments to the props of the given Component.', () => {
  const TestComponent = enhanceCommunicationDetailsTab('div');
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <TestComponent />
    </Provider>
  );
  const { props } = component.toJSON();

  expect(props.attachments).toBeDefined();
});
