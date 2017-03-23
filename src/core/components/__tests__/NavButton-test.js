import React from 'react';
import renderer from 'react-test-renderer';

import NavButton from '../NavButton';

test('it displays its children as the label of the item.', () => {
  const component = renderer.create(
    <NavButton>
      Test Child
    </NavButton>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
