import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Placeholder from '../Placeholder';

import Communication from '../../src/communication/components/Communication';

storiesOf('Communication', module)
  .add('shows the communication selector with the given title and status.', () => (
    <Communication title="Test title" status="active">
      <Placeholder />
    </Communication>
  ))
  .add('shows the communication selector with multiple placeholder children.', () => (
    <Communication title="Test title" status="none">
      <Placeholder height={200}>Child 0</Placeholder>
      <Placeholder height={200}>Child 1</Placeholder>
      <Placeholder height={200}>Child 2</Placeholder>
    </Communication>
  ));
