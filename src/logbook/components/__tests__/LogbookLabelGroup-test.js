import React from 'react';
import renderer from 'react-test-renderer';

import LogbookLabelGroup from '../LogbookLabelGroup';

test('it displays a single label when only one is given.', () => {
  const component = renderer.create(
    <LogbookLabelGroup>
      <div>Test Label</div>
    </LogbookLabelGroup>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it displays the entier top label on top of the remaining ones when multiple are given.', () => {
  const component = renderer.create(
    <LogbookLabelGroup>
      <div>Test Label 0</div>
      <div>Test Label 1</div>
      <div>Test Label 2</div>
    </LogbookLabelGroup>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it displays the entier element of every label when multiple labels and the showAll prop are given.', () => {
  const component = renderer.create(
    <LogbookLabelGroup showAll>
      <div>Test Label 0</div>
      <div>Test Label 1</div>
      <div>Test Label 2</div>
    </LogbookLabelGroup>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
