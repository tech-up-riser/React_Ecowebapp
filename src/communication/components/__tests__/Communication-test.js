import React from 'react';
import renderer from 'react-test-renderer';

import Communication from '../Communication';

test('it displays the given title above tabs, tools and children.', () => {
  const component = renderer.create(
    <Communication title="Test Title">
      <div>Test Communication</div>
    </Communication>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it displays its children below the title, tabs and tools.', () => {
  const component = renderer.create(
    <Communication>
      <div>Test Communication</div>
    </Communication>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it displays the given status.', () => {
  const componentActive = renderer.create(
    <Communication status="active" />
  );
  const componentInactive = renderer.create(
    <Communication status="in-active" />
  );
  const componentNone = renderer.create(
    <Communication status="none" />
  );
  const treeActive = componentActive.toJSON();
  const treeInactive = componentInactive.toJSON();
  const treeNone = componentNone.toJSON();

  expect(treeActive).toMatchSnapshot();
  expect(treeInactive).toMatchSnapshot();
  expect(treeNone).toMatchSnapshot();
});
