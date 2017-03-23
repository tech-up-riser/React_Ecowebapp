import React from 'react';
import { storiesOf } from '@kadira/storybook';

import CommunicationCommentsTab from '../../src/pages/components/CommunicationCommentsTab';

storiesOf('CommunicationCommentsTab', module)
  .add('shows the Activity tab with out any comments.', () => (
    <CommunicationCommentsTab />
  ))
  .add('shows the Activity tab with comments.', () => (
    <CommunicationCommentsTab
      comments={[
        {
          author: 'User 0',
          date: '1/1/2016',
          body: 'Test comment 0',
          status: 'active',
          linkedLogbooks: [ 'logbook 0' ],
        },
        {
          author: 'User 1',
          date: '1/1/2016',
          body: 'Test comment 1',
          linkedLogbooks: [ 'logbook 0', 'logbook 1' ],
          attachments: [ 0 ],
        },
        {
          author: 'User 2',
          date: '2/2/2016',
          body: 'Test comment 2',
        },
        {
          author: 'User 3',
          date: '3/3/2016',
          body: 'Test comment 3',
          status: 'in-active',
          attachments: [ 1, 2 ],
        },
      ]}
    />
  ));
