import React from 'react';
import renderer from 'react-test-renderer';

import SideBar from '../SideBar';

test('when expanded, it displays its header / children in a single column at the given width.', () => {
  const component = renderer.create(
    <SideBar header={<header>Test Header</header>} expandedWidth={200} isExpanded>
      <i>Test Child 0</i>
      <i>Test Child 1</i>
      <i>Test Child 2</i>
    </SideBar>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('when not expaned, it displays its header / children in a single column as thin as it can be.', () => {
  const component = renderer.create(
    <SideBar header={<header>Test Header</header>} expandedWidth={200} >
      <i>Test Child 0</i>
      <i>Test Child 1</i>
      <i>Test Child 2</i>
    </SideBar>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('when not expaned and hiddenWhenClosed is set, it does not display (style is display: none).', () => {
  const component = renderer.create(
    <SideBar header={<header>Test Header</header>} hiddenWhenClosed>
      <i>Test Child 0</i>
      <i>Test Child 1</i>
      <i>Test Child 2</i>
    </SideBar>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('when expanded, it gives its header / children the isExpanded prop.', () => {
  const component = renderer.create(
    <SideBar header={<header>Test Header</header>} isExpanded>
      <i>Test Child 0</i>
      <i>Test Child 1</i>
      <i>Test Child 2</i>
    </SideBar>
  );
  const tree = component.toJSON();
  const { children: [ { children: [ header ] }, ...childrenMenuItems ] } = tree;

  expect(header.props.isExpanded).toBe(true);

  childrenMenuItems.forEach(({ children: [ child ]}) => {
    expect(child.props.isExpanded).toBe(true);
  });
});

test('when not expanded, it does not gives its header / children the isExpanded prop.', () => {
  const component = renderer.create(
    <SideBar header={<header>Test Header</header>}>
      <i>Test Child 0</i>
      <i>Test Child 1</i>
      <i>Test Child 2</i>
    </SideBar>
  );
  const tree = component.toJSON();const { children: [ header, ...children ] } = tree;

  expect(header.props.isExpanded).toBeFalsy();

  children.forEach(({ children: [ child ]}) => {
    expect(child.props.isExpanded).toBeFalsy();
  });
});
