import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Placeholder from '../Placeholder';

import CommunicationTools from '../../src/communication/components/CommunicationTools';

storiesOf('CommunicationTools', module)
  .add('shows the communication selector with the given title and status.', () => (
    <CommunicationTools title="Test title" status="active">
      <Placeholder />
    </CommunicationTools>
  ))
  .add('shows the communication selector with multiple placeholder children.', () => (
    <CommunicationTools title="Test title" status="none">
      <Placeholder height={200}>Child 0</Placeholder>
      <Placeholder height={200}>Child 1</Placeholder>
      <Placeholder height={200}>Child 2</Placeholder>
    </CommunicationTools>
  ));
