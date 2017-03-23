import React from 'react';
import renderer from 'react-test-renderer';

import FillRemaining from '../FillRemaining';

test('it uses the flex-direction given by direction prop.', () => {
  const componentRow = renderer.create(
    <FillRemaining direction="row">
      <div>First Child</div>
      <div>Second Child</div>
      <div>Third Child</div>
    </FillRemaining>
  );
  const componentColumn = renderer.create(
    <FillRemaining direction="column">
      <div>First Child</div>
      <div>Second Child</div>
      <div>Third Child</div>
    </FillRemaining>
  );

  const treeRow = componentRow.toJSON();
  const treeColumn = componentColumn.toJSON();

  expect(treeRow).toMatchSnapshot();
  expect(treeColumn).toMatchSnapshot();
});

test('it uses column as the flex-direction if the direction prop is not given.', () => {
  const component = renderer.create(
    <FillRemaining>
      <div>First Child</div>
      <div>Second Child</div>
      <div>Third Child</div>
    </FillRemaining>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it throws an error when called with one child.', () => {
  const testRender = () => {
    renderer.create(
      <FillRemaining>
        <div>Only Child</div>
      </FillRemaining>
    );
  };

  expect(testRender).toThrowErrorMatchingSnapshot();
});

test('it throws an error when called with one child.', () => {
  const testRender = () => {
    renderer.create(
      <FillRemaining direction="not-row-or-column">
        <div>First Child</div>
        <div>Second Child</div>
      </FillRemaining>
    );
  };

  expect(testRender).toThrowErrorMatchingSnapshot();
});
