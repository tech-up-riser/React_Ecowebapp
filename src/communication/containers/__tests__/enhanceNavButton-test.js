import React from 'react';
import renderer from 'react-test-renderer';

import enhanceNavButton from '../enhanceNavButton';

it('passes all props added when rendered through of the given Component.', () => {
  const testProps = { test0: 0, test1: 1, test2: 2 };
  const TestComponent = enhanceNavButton('div');
  const component = renderer.create(
    <TestComponent {...testProps} />
  );
  const { props } = component.toJSON();

  for(let propsName in testProps) {
    expect(props[propsName]).toEqual(testProps[propsName]);
  }
});

it('adds the Add label as the children of the given Component.', () => {
  const TestComponent = enhanceNavButton('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { children } = component.toJSON();

  expect(children).toEqual([ 'Add' ]);
});

it('adds the on click handler function to the props of the given Component.', () => {
  const TestComponent = enhanceNavButton('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  expect(props.onClick).toBeDefined();
});
