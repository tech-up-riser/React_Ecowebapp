import React from 'react';
import { Feed } from 'semantic-ui-react';
import { storiesOf } from '@kadira/storybook';

import Activity from '../../src/core/components/Activity';

storiesOf('Activity', module)
  .addDecorator((story) => (
    <Feed style={{ margin: 20 }}>
      {story()}
    </Feed>
  ))
  .add('shows activity info in a semantic-ui Feed.', () => (
    <Activity author="Test User" label="added a comment" date="14/Dec/2016 13:21 PM MST" />
  ))
  .add('shows multiple activities info in a semantic-ui Feed.', () => [
    <Activity author="Test User 0" label="added a comment" date="14/Dec/2016 00:21 PM MST" key={0} />,
    <Activity author="Test User 1" label="added a comment" date="14/Dec/2016 01:21 PM MST" key={1} />,
    <Activity author="Test User 2" label="added a comment" date="14/Dec/2016 02:21 PM MST" key={2} />,
  ]);
