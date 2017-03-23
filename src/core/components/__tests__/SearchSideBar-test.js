import React from 'react';
import renderer from 'react-test-renderer';

import SearchSideBar from '../SearchSideBar';

test('the title is displayed in the header', () => {
  const component = renderer.create(
    <SearchSideBar title="Test Title" isExpanded>
      <i>Test Child 0</i>
      <i>Test Child 1</i>
      <i>Test Child 2</i>
    </SearchSideBar>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('the catigories selector is displayed in the header, if catigories are given', () => {
  const component = renderer.create(
    <SearchSideBar catigories={[ 'Test catigories'/* //TODO, relpace with real catigories */ ]} isExpanded>
      <i>Test Child 0</i>
      <i>Test Child 1</i>
      <i>Test Child 2</i>
    </SearchSideBar>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('when expanded, it displays its children in a single column at the given width.', () => {
  const component = renderer.create(
    <SearchSideBar expandedWidth={200} isExpanded>
      <i>Test Child 0</i>
      <i>Test Child 1</i>
      <i>Test Child 2</i>
    </SearchSideBar>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('when not expaned, it does not display its children.', () => {
  const component = renderer.create(
    <SearchSideBar>
      <i>Test Child 0</i>
      <i>Test Child 1</i>
      <i>Test Child 2</i>
    </SearchSideBar>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('when expanded, it gives its children the isExpanded prop.', () => {
  const component = renderer.create(
    <SearchSideBar isExpanded>
      <i>Test Child 0</i>
      <i>Test Child 1</i>
      <i>Test Child 2</i>
    </SearchSideBar>
  );
  const tree = component.toJSON();
  const [ _, ...children ] = tree.children;

  children.forEach(({ children: [ child ]}) => {
    expect(child.props.isExpanded).toBe(true);
  });
});

test('when not expanded, it does not gives its children the isExpanded prop.', () => {
  const component = renderer.create(
    <SearchSideBar>
      <i>Test Child 0</i>
      <i>Test Child 1</i>
      <i>Test Child 2</i>
    </SearchSideBar>
  );
  const tree = component.toJSON();
  const [ _, ...children ] = tree.children;

  children.forEach(({ children: [ child ]}) => {
    expect(child.props.isExpanded).toBeFalsy();
  });
});
