import React from 'react';
import renderer from 'react-test-renderer';

import {
  connectCateogorySelectorFilter,
  connectUserFilter,
  connectModuleFilter,
  connectDepartmentFilter,
  connectMoreFilters
} from '../connectFilters';

describe('connectCateogorySelectorFilter', () => {
  it('passes all props added when rendered through of the given Component.', () => {
    const testProps = { test0: 0, test1: 1, test2: 2 };
    const TestComponent = connectCateogorySelectorFilter('div');
    const component = renderer.create(
      <TestComponent {...testProps} />
    );
    const { props } = component.toJSON();

    for(let propsName in testProps) {
      expect(props[propsName]).toEqual(testProps[propsName]);
    }
  });

  it('adds cateogory placeholder to the props of the given Component.', () => {
    const TestComponent = connectCateogorySelectorFilter('div');
    const component = renderer.create(
      <TestComponent />
    );
    const { props } = component.toJSON();

    expect(props.placeholder).toEqual('Cateogory Selector');
  });

  it('adds possible cateogories as options to the props of the given Component.', () => {
    const TestComponent = connectCateogorySelectorFilter('div');
    const component = renderer.create(
      <TestComponent />
    );
    const { props } = component.toJSON();

    expect(props.options).toBeDefined();
  });
});

describe('connectUserFilter', () => {
  it('passes all props added when rendered through of the given Component.', () => {
    const testProps = { test0: 0, test1: 1, test2: 2 };
    const TestComponent = connectUserFilter('div');
    const component = renderer.create(
      <TestComponent {...testProps} />
    );
    const { props } = component.toJSON();

    for(let propsName in testProps) {
      expect(props[propsName]).toEqual(testProps[propsName]);
    }
  });

  it('adds cateogory placeholder to the props of the given Component.', () => {
    const TestComponent = connectUserFilter('div');
    const component = renderer.create(
      <TestComponent />
    );
    const { props } = component.toJSON();

    expect(props.placeholder).toEqual('User Filter');
  });

  it('adds possible cateogories as options to the props of the given Component.', () => {
    const TestComponent = connectUserFilter('div');
    const component = renderer.create(
      <TestComponent />
    );
    const { props } = component.toJSON();

    expect(props.options).toBeDefined();
  });
});

describe('connectModuleFilter', () => {
  it('passes all props added when rendered through of the given Component.', () => {
    const testProps = { test0: 0, test1: 1, test2: 2 };
    const TestComponent = connectModuleFilter('div');
    const component = renderer.create(
      <TestComponent {...testProps} />
    );
    const { props } = component.toJSON();

    for(let propsName in testProps) {
      expect(props[propsName]).toEqual(testProps[propsName]);
    }
  });

  it('adds cateogory placeholder to the props of the given Component.', () => {
    const TestComponent = connectModuleFilter('div');
    const component = renderer.create(
      <TestComponent />
    );
    const { props } = component.toJSON();

    expect(props.placeholder).toEqual('Module Filter');
  });

  it('adds possible cateogories as options to the props of the given Component.', () => {
    const TestComponent = connectModuleFilter('div');
    const component = renderer.create(
      <TestComponent />
    );
    const { props } = component.toJSON();

    expect(props.options).toBeDefined();
  });
});

describe('connectDepartmentFilter', () => {
  it('passes all props added when rendered through of the given Component.', () => {
    const testProps = { test0: 0, test1: 1, test2: 2 };
    const TestComponent = connectDepartmentFilter('div');
    const component = renderer.create(
      <TestComponent {...testProps} />
    );
    const { props } = component.toJSON();

    for(let propsName in testProps) {
      expect(props[propsName]).toEqual(testProps[propsName]);
    }
  });

  it('adds cateogory placeholder to the props of the given Component.', () => {
    const TestComponent = connectDepartmentFilter('div');
    const component = renderer.create(
      <TestComponent />
    );
    const { props } = component.toJSON();

    expect(props.placeholder).toEqual('Department Filter');
  });

  it('adds possible cateogories as options to the props of the given Component.', () => {
    const TestComponent = connectDepartmentFilter('div');
    const component = renderer.create(
      <TestComponent />
    );
    const { props } = component.toJSON();

    expect(props.options).toBeDefined();
  });
});

describe('connectMoreFilters', () => {
  it('passes all props added when rendered through of the given Component.', () => {
    const testProps = { test0: 0, test1: 1, test2: 2 };
    const TestComponent = connectMoreFilters('div');
    const component = renderer.create(
      <TestComponent {...testProps} />
    );
    const { props } = component.toJSON();

    for(let propsName in testProps) {
      expect(props[propsName]).toEqual(testProps[propsName]);
    }
  });

  it('adds cateogory placeholder to the props of the given Component.', () => {
    const TestComponent = connectMoreFilters('div');
    const component = renderer.create(
      <TestComponent />
    );
    const { props } = component.toJSON();

    expect(props.placeholder).toEqual('More...');
  });

  it('adds possible cateogories as options to the props of the given Component.', () => {
    const TestComponent = connectMoreFilters('div');
    const component = renderer.create(
      <TestComponent />
    );
    const { props } = component.toJSON();

    expect(props.options).toBeDefined();
  });
});
