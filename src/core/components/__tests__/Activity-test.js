import React from 'react';
import renderer from 'react-test-renderer';

import Activity from '../Activity';

const testActivity = {
  author: 'User 0',
  date: '1/1/2016',
  label: 'commented on this post',
};

test('it displays the given comment.', () => {
  const component = renderer.create(
    <Activity {...testActivity} />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
