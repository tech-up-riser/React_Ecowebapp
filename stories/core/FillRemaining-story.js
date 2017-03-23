import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Placeholder from '../Placeholder';

import FillRemaining from '../../src/core/components/FillRemaining';

storiesOf('FillRemaining', module)
  .add('fills the entire height of its partent', () => (
    <FillRemaining direction="column">
      <Placeholder height={60}>
        Top child
      </Placeholder>
      <Placeholder color="red">
        Bottom child
      </Placeholder>
    </FillRemaining>
  ))
  .add('fills the entire width of its partent', () => (
    <FillRemaining direction="row">
      <Placeholder width={60}>
        Left child
      </Placeholder>
      <Placeholder color="red">
        Right child
      </Placeholder>
    </FillRemaining>
  ));
