import React from 'react';
import renderer from 'react-test-renderer';

import enhancePageWrapper from '../enhancePageWrapper';

it('passes all props added when rendered through of the given Component.', () => {
  const testProps = { test0: 0, test1: 1, test2: 2 };
  const TestComponent = enhancePageWrapper('div');
  const component = renderer.create(
    <TestComponent {...testProps} />
  );
  const { props } = component.toJSON();

  for(let propsName in testProps) {
    expect(props[propsName]).toEqual(testProps[propsName]);
  }
});

it('adds the path to the logo as the logoImgSrc prop, given to the Component.', () => {
  const TestComponent = enhancePageWrapper('div');
  const component = renderer.create(
    <TestComponent />
  );
  const { props } = component.toJSON();

  expect(props.logoImgSrc).toEqual('/images/logo-white.svg');
});
