import React from 'react';
import renderer from 'react-test-renderer';

import LogbookLabel from '../LogbookLabel';

test('it displays the given children in a semantic-ui-react Label.', () => {
  const component = renderer.create(
    <LogbookLabel title="Test Title">
      Test Logbook
    </LogbookLabel>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
