import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import PageWrapper from '../PageWrapper';

function makeMockStore() {
  const getNewStore = configureStore([]);

  return getNewStore({});
}

test('it displays the children with in the wrapper.', () => {
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <PageWrapper>
        Test Page Content
      </PageWrapper>
    </Provider>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it displays the logo using given url.', () => {
  const component = renderer.create(
    <Provider store={makeMockStore()}>
      <PageWrapper logoImgSrc="/path/to/logo.png" />
    </Provider>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
