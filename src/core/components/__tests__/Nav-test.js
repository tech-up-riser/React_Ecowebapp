import React from 'react';
import renderer from 'react-test-renderer';

import Nav from '../Nav';

test('it displays its children in a <nav /> tag.', () => {
  const component = renderer.create(
    <Nav>
      <div>Test Nav Item 0</div>
      <div>Test Nav Item 1</div>
      <div>Test Nav Item 2</div>
    </Nav>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
