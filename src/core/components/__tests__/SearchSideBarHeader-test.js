import React from 'react';
import renderer from 'react-test-renderer';

import SearchSideBarHeader from '../SearchSideBarHeader';

test('the open button is displayed, when collapsed', () => {
  const component = renderer.create(
    <SearchSideBarHeader title="Test Title" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('the title is displayed, when expaned', () => {
  const component = renderer.create(
    <SearchSideBarHeader title="Test Title" isExpanded />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('the catigories selector is displayed, if catigories are given', () => {
  const component = renderer.create(
    <SearchSideBarHeader
      catigories={[
        { catigoriesId: 0, label: 'Test catigory 0'},
        { catigoriesId: 1, label: 'Test catigory 1'},
        { catigoriesId: 2, label: 'Test catigory 2'},
      ]}
      isExpanded
    />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('when close button is clicked, if expanded, it calls the collapse function.', () => {
  const collapseFn = jest.fn();
  const component = renderer.create(
    <SearchSideBarHeader collapseSideBar={collapseFn} isExpanded />
  );
  const tree = component.toJSON();
  const [ _, icon ] = tree.children;
  const { onClick } = icon.props;

  onClick();
  expect(collapseFn).toHaveBeenCalledTimes(1);
});

test('when open icon is clicked, if collapsed, it calls the expand function.', () => {
  const expandFn = jest.fn();
  const component = renderer.create(
    <SearchSideBarHeader expandSideBar={expandFn} />
  );
  const tree = component.toJSON();
  const [ icon ] = tree.children;
  const { onClick } = icon.props;

  onClick();
  expect(expandFn).toHaveBeenCalledTimes(1);
});
