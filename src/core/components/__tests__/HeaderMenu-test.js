import React from 'react';
import renderer from 'react-test-renderer';

import HeaderMenu from '../HeaderMenu';

test('it displays its children an inverted secondary semantic-ui Menu.', () => {
  const component = renderer.create(
    <HeaderMenu>
      <div>Test Header Item 0</div>
      <div>Test Header Item 1</div>
      <div>Test Header Item 2</div>
    </HeaderMenu>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
