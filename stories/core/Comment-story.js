import React from 'react';
import { Feed } from 'semantic-ui-react';
import { storiesOf } from '@kadira/storybook';

import Comment from '../../src/core/components/Comment';

storiesOf('Comment', module)
  .addDecorator((story) => (
    <Feed style={{ margin: 20 }}>
      {story()}
    </Feed>
  ))
  .add('shows a comment in a semantic-ui Feed.', () => (
    <Comment author="User 0" date="1/1/2016" body="Test comment 0" />
  ))
  .add('shows an active comment in a semantic-ui Feed.', () => (
    <Comment author="User 1" date="1/1/2016" body="Test comment 1" status="active" />
  ))
  .add('shows an in-active comment in a semantic-ui Feed.', () => (
    <Comment author="User 2" date="1/1/2016" body="Test comment 2" status="in-active" />
  ))
  .add('shows a comment with a linked logbook in a semantic-ui Feed.', () => (
    <Comment author="User 3" date="1/1/2016" body="Test comment 3" linkedLogbook="logbook 3"/>
  ))
  .add('shows a comment with attachments in a semantic-ui Feed.', () => (
    <Comment author="User 4" date="1/1/2016" body="Test comment 4" attachments={[ 0, 1 ]} />
  ))
  .add('shows a comment a linked logbook and attachments in a semantic-ui Feed.', () => (
    <Comment author="User 5" date="1/1/2016" body="Test comment 5" linkedLogbook="logbook 5" attachments={[ 0, 1 ]} />
  ))
  .add('shows multiple activities info in a semantic-ui Feed.', () => [
    <Comment author="User 0" date="1/1/2016" body="Test comment 0" key={0} />,
    <Comment author="User 1" date="1/1/2016" body="Test comment 1" status="active" key={1} />,
    <Comment author="User 2" date="1/1/2016" body="Test comment 2" status="in-active" key={2} />,
    <Comment author="User 3" date="1/1/2016" body="Test comment 3" linkedLogbook="logbook 1"key={3} />,
    <Comment author="User 4" date="1/1/2016" body="Test comment 4" attachments={[ 0, 1 ]} key={4} />,
    <Comment author="User 5" date="1/1/2016" body="Test comment 5" linkedLogbook="logbook 5" attachments={[ 0, 1 ]} key={5} />
  ]);
