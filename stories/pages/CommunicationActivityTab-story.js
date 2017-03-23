import React from 'react';
import { storiesOf } from '@kadira/storybook';

import CommunicationActivityTab from '../../src/pages/components/CommunicationActivityTab';

storiesOf('CommunicationActivityTab', module)
  .add('shows the Activity tab with out any activities.', () => (
    <CommunicationActivityTab />
  ))
  .add('shows the Activity tab with activities.', () => (
    <CommunicationActivityTab
      activity={[
        { author: 'User 0', date: '14/Dec/2016 00:21 PM MST', label: 'commented on this post' },
        { author: 'User 1', date: '14/Dec/2016 01:21 PM MST', label: 'added two attachments' },
        { author: 'User 2', date: '14/Dec/2016 02:21 PM MST', label: 'change status to active' },
      ]}
    />
  ));
