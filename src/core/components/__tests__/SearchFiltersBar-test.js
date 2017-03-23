import React from 'react';
import renderer from 'react-test-renderer';

import SearchFiltersBar from '../SearchFiltersBar';

test('it displays its children in a secondary Menu.', () => {
  const component = renderer.create(
    <SearchFiltersBar>
      <div>Test filter 0</div>
      Test text:
      <div>Test filter 1</div>
      <div>Test filter 2</div>
    </SearchFiltersBar>
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it calls the update seatch function when search button is clicked.', () => {
  const searchFn = jest.fn();
  const component = renderer.create(
    <SearchFiltersBar onSearchClick={searchFn}>
      <div>Test filter 0</div>
      Test text:
      <div>Test filter 1</div>
      <div>Test filter 2</div>
    </SearchFiltersBar>
  );
  const tree = component.toJSON();
  const searchButton = tree.children[1].children[3].children[0];

  searchButton.props.onClick();
  expect(searchFn).toHaveBeenCalledTimes(1);
});
