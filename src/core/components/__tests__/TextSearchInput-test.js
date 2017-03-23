import React from 'react';
import renderer from 'react-test-renderer';

import TextSearchInput from '../TextSearchInput';

test('it displays the serach input.', () => {
  const component = renderer.create(
    <TextSearchInput />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
