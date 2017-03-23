import React from 'react';
import { storiesOf } from '@kadira/storybook';

import CommunicationDetailsTab from '../../src/pages/components/CommunicationDetailsTab';

storiesOf('CommunicationDetailsTab', module)
  .add('shows the details tab with out any attachments.', () => (
    <CommunicationDetailsTab description="Test description for story." />
  ))
  .add('shows the details tab with attachments.', () => (
    <CommunicationDetailsTab
      description="Test description for story."
      attachments={[
        { fileName: 'testAttchment0.jpg', size: '10mb' },
        { fileName: 'testAttchment1.jpg', size: '11mb' },
        { fileName: 'testAttchment2.jpg', size: '12mb' },
      ]}
    />
  ));
