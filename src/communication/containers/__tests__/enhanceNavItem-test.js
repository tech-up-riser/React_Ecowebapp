import React from 'react';
import renderer from 'react-test-renderer';

import enhanceNavItem from '../enhanceNavItem';

it('passes all props added when rendered through of the given Component.', () => {
  const testProps = { test0: 0, test1: 1, test2: 2 };
  const TestComponent = enhanceNavItem('div');
  const component = renderer.create(
    <TestComponent {...testProps} />
  );
  const { props } = component.toJSON();

  for(let propsName in testProps) {
    expect(props[propsName]).toEqual(testProps[propsName]);
  }
});

it('adds the Add label to the props of the given Component.', () => {
  const TestComponent = enhanceNavItem('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  expect(props.label).toEqual('Communication');
});

it('adds the on click handler function to the props of the given Component.', () => {
  const TestComponent = enhanceNavItem('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  expect(props.onClick).toBeDefined();
});
