import React from 'react';
import renderer from 'react-test-renderer';

import SideBarNavGroup from '../SideBarNavGroup';

test('when expanded, it displays its children in a <Menu.Menu />.', () => {
  const component = renderer.create(
    <SideBarNavGroup expandedWidth={200} isExpanded>
      <i>Test Child 0</i>
      <i>Test Child 1</i>
      <i>Test Child 2</i>
    </SideBarNavGroup>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('when not expaned, it displays its children in a <Menu.Menu />.', () => {
  const component = renderer.create(
    <SideBarNavGroup expandedWidth={200} >
      <i>Test Child 0</i>
      <i>Test Child 1</i>
      <i>Test Child 2</i>
    </SideBarNavGroup>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('when expanded, it gives its children the isExpanded prop.', () => {
  const component = renderer.create(
    <SideBarNavGroup isExpanded>
      <i>Test Child 0</i>
      <i>Test Child 1</i>
      <i>Test Child 2</i>
    </SideBarNavGroup>
  );
  const tree = component.toJSON();
  const { children: [ { children: [ header ] }, ...childrenMenuItems ] } = tree;

  expect(header.props.isExpanded).toBe(true);

  childrenMenuItems.forEach(({ children: [ child ]}) => {
    expect(child.props.isExpanded).toBe(true);
  });
});

test('when not expanded, it does not gives its children the isExpanded prop.', () => {
  const component = renderer.create(
    <SideBarNavGroup>
      <i>Test Child 0</i>
      <i>Test Child 1</i>
      <i>Test Child 2</i>
    </SideBarNavGroup>
  );
  const tree = component.toJSON();const { children: [ header, ...children ] } = tree;

  expect(header.props.isExpanded).toBeFalsy();

  children.forEach(({ children: [ child ]}) => {
    expect(child.props.isExpanded).toBeFalsy();
  });
});
