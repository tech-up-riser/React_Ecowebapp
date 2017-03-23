import React from 'react';
import { storiesOf } from '@kadira/storybook';

import LogbookLabel from '../../src/logbook/components/LogbookLabel';

storiesOf('LogbookLabel', module)
  .add('shows the label for a logbook.', () => (
    <LogbookLabel>
      Test Logbook
    </LogbookLabel>
  ));
