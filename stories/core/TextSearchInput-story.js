import React from 'react';
import { Feed } from 'semantic-ui-react';
import { storiesOf } from '@kadira/storybook';

import TextSearchInput from '../../src/core/components/TextSearchInput';

storiesOf('TextSearchInput', module)
  .add('shows the input with no text, showing its placeholder.', () => (
    <TextSearchInput  />
  ))
