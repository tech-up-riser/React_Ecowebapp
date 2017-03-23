import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { storiesOf } from '@kadira/storybook';

import Placeholder from '../Placeholder';

import PageWrapper from '../../src/pages/components/PageWrapper';

function makeMockStore() {
  const getNewStore = configureStore([]);

  return getNewStore({});
}

storiesOf('PageWrapper', module)
  .add('shows the Page Wrapper with a placeholder child.', () => (
    <Provider store={makeMockStore()}>
      <PageWrapper logoImgSrc="/images/logo-white.svg">
        <Placeholder />
      </PageWrapper>
    </Provider>
  ));
