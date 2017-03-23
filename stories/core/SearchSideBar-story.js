import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Placeholder from '../Placeholder';

import SearchSideBar from '../../src/core/components/SearchSideBar';

storiesOf('SearchSideBar', module)
  .add('shows the search bar with no children, when collapsed.', () => (
    <SearchSideBar>
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </SearchSideBar>
  ))
  .add('shows the search bar with a placeholder child, when expaned.', () => (
    <SearchSideBar title="Some Title" expandedWidth={400} isExpanded>
      <Placeholder />
    </SearchSideBar>
  ))
  .add('shows the search bar with placeholder children, when expaned.', () => (
    <SearchSideBar title="Some Title" expandedWidth={400} isExpanded>
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </SearchSideBar>
  ))
  .add('shows the search bar with catigories selector in the header.', () => (
    <SearchSideBar title="Some Title" catigories={[ 'Test catigorie' ]} expandedWidth={400} isExpanded>
      <Placeholder />
    </SearchSideBar>
  ))
  .add('shows the search bar header with the expand function, when collapsed.', () => (
    <SearchSideBar expandSideBar={action('expand')} expandedWidth={400}>
      <Placeholder />
    </SearchSideBar>
  ))
  .add('shows the search bar header with the collapsed function, when expanded.', () => (
    <SearchSideBar title="Some Title" collapseSideBar={action('collapse')} expandedWidth={400} isExpanded>
      <Placeholder />
    </SearchSideBar>
  ));
