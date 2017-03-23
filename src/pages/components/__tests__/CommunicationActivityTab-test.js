import React from 'react';
import renderer from 'react-test-renderer';

import CommunicationActivityTab from '../CommunicationActivityTab';

const testActivity = [
];

test('it displays the given activity.', () => {
  const component = renderer.create(
    <CommunicationActivityTab activity={testActivity}/>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
