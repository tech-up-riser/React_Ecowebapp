import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../Header';

test('it displays the logo using given url.', () => {
  const component = renderer.create(
    <Header logoImgSrc="/path/to/logo.png" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it displays the children on the right side.', () => {
  const component = renderer.create(
    <Header>
      Header test children
    </Header>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
