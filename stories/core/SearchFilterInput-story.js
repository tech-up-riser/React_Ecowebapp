import React from 'react';
import { storiesOf } from '@kadira/storybook';

import SearchFilterInput from '../../src/core/components/SearchFilterInput';

storiesOf('SearchFilterInput', module)
  .add('shows a semantic-ui Select component.', () => (
    <SearchFilterInput
      placeholder="Test placeholder"
      options={[ { content: 'Item 0'}, { content: 'Item 1'}, { content: 'Item 2'} ]}
    />
  ));
