import React from 'react';
import renderer from 'react-test-renderer';

import NavItem from '../NavItem';

test('it displays label next to the arrow.', () => {
  const component = renderer.create(
    <NavItem label="Test label" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
