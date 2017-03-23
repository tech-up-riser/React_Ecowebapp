import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Placeholder from '../Placeholder';

import SearchFiltersBar from '../../src/core/components/SearchFiltersBar';
import SearchFilterInput from '../../src/core/components/SearchFilterInput';

storiesOf('SearchFiltersBar', module)
  .add('shows search filter bar with a placeholder child.', () => (
    <SearchFiltersBar>
      <Placeholder />
    </SearchFiltersBar>
  ))
  .add('shows search filter bar with placeholder children.', () => (
    <SearchFiltersBar>
      <Placeholder width={250}>Left Child</Placeholder>
      Middle text
      <Placeholder width={250}>Middle Child</Placeholder>
      <Placeholder width={250}>Right child</Placeholder>
    </SearchFiltersBar>
  ))
  .add('shows search filter bar with example filters.', () => (
    <SearchFiltersBar>
      <SearchFilterInput placeholder="Test filter 0" />
      Search Filters:
      <SearchFilterInput placeholder="Test filter 1" />
      <SearchFilterInput placeholder="Test filter 2" />
      <SearchFilterInput placeholder="Test filter 3" />
      <SearchFilterInput placeholder="Test filter 4" />
    </SearchFiltersBar>
  ));
