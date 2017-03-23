import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Placeholder from '../Placeholder';

import NavButton from '../../src/core/components/NavButton';

storiesOf('NavButton', module)
  .addDecorator((story) => (
    <div style={{ padding: 10, backgroundColor: '#468dc8' }}>
      {story()}
    </div>
  ))
  .add('shows the nav bar with a placeholder child.', () => (
    <NavButton>
      <Placeholder />
    </NavButton>
  ))
  .add('shows the nav bar with placeholder children.', () => (
    <NavButton>
      <Placeholder width={250}>Item 0</Placeholder>
      <Placeholder width={250}>Item 1</Placeholder>
      <Placeholder width={250}>Item 2</Placeholder>
    </NavButton>
  ))
  .add('shows the nav bar with a texted child.', () => (
    <NavButton>
      Test Button
    </NavButton>
  ));
