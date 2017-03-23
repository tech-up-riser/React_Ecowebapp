import React from 'react';
import renderer from 'react-test-renderer';

import Comment from '../Comment';

const testComment = {
  author: 'User 0',
  date: '1/1/2016',
  body: 'Test comment 0',
  status: 'active',
  actionsTakens: ['Spoke to Resident', 'Jetted Sewer Line'],
  linkedLogbook: 'logbook 0',
};

test('it displays the given comment.', () => {
  const component = renderer.create(
    <Comment {...testComment} />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
