import React from 'react';
import { storiesOf } from '@kadira/storybook';

import NavItem from '../../src/core/components/NavItem';

storiesOf('NavItem', module)
  .addDecorator((story) => (
    <div style={{ padding: 10, backgroundColor: '#468dc8' }}>
      {story()}
    </div>
  ))
  .add('shows the nav bar with a example label.', () => (
    <NavItem label={"Test Item"} />
  ));
