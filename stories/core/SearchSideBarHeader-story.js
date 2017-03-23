import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Placeholder from '../Placeholder';

import SearchSideBarHeader from '../../src/core/components/SearchSideBarHeader';

storiesOf('SearchSideBarHeader', module)
  .add('shows the open icon, when collapsed.', () => (
    <SearchSideBarHeader />
  ))
  .add('shows the title and close icon, when expaned.', () => (
    <SearchSideBarHeader title="Some Title" isExpanded />
  ))
  .add('shows the catigories selector in the header, when catigories are given.', () => (
    <SearchSideBarHeader
      title="Some Title"
      catigories={[
        { catigoriesId: 0, label: 'Test catigory 0'},
        { catigoriesId: 1, label: 'Test catigory 1'},
        { catigoriesId: 2, label: 'Test catigory 2'},
      ]}
      isExpanded
    />
  ))
  .add('shows the search bar header with the expand function, when collapsed.', () => (
    <SearchSideBarHeader expandSideBar={action('expand')} />
  ))
  .add('shows the search bar header with the collapsed function, when expanded.', () => (
    <SearchSideBarHeader title="Some Title" collapseSideBar={action('collapse')} isExpanded />
  ));
