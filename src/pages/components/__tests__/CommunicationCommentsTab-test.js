import React from 'react';
import renderer from 'react-test-renderer';

import CommunicationCommentsTab from '../CommunicationCommentsTab';

const testComments = [
  {
    author: 'Richard Simms',
    date: 'Today 5:45 am',
    body: 'Test comment 0',
    status: 'active',
    actionsTakens: ['Spoke to Resident', 'Jetted Sweer Line'],
    linkedLogbooks: [ 'logbook A' ],
  },
  {
    author: 'User 1',
    date: '1/1/2016',
    body: 'Test comment 1',
    linkedLogbook: [ 'logbook 0', 'logbook 1' ],
    attachments: [
      {},
    ],
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
    attachments: [
      {},
      {},
      {},
    ],
  },
];

test('it displays the given comments.', () => {
  const component = renderer.create(
    <CommunicationCommentsTab comments={testComments}/>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
