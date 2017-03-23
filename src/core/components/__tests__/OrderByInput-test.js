import React from 'react';
import renderer from 'react-test-renderer';

import OrderByInput from '../OrderByInput';

test('it displays the serach order controls.', () => {
  const component = renderer.create(
    <OrderByInput direction="up" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it displays the up and down arrow depending on the direction prop.', () => {
  const componentUp = renderer.create(
    <OrderByInput direction="up" />
  );
  const componentDown = renderer.create(
    <OrderByInput direction="down" />
  );

  const treeUp = componentUp.toJSON();
  const treeDown = componentDown.toJSON();

  expect(treeUp).toMatchSnapshot();
  expect(treeDown).toMatchSnapshot();
});

test('it calls the clear function when clear button is clicked.', () => {
  const clearFn = jest.fn();
  const component = renderer.create(
    <OrderByInput direction="up" onClickClear={clearFn} />
  );
  const tree = component.toJSON();
  const clearButton = tree.children[3];

  clearButton.props.onClick();
  expect(clearFn).toHaveBeenCalledTimes(1);
});
