import React from 'react';
import { Button } from 'semantic-ui-react';
import { storiesOf } from '@kadira/storybook';

import Placeholder from '../Placeholder';

import HeaderMenu from '../../src/core/components/HeaderMenu';

storiesOf('HeaderMenu', module)
  .addDecorator((story) => (
    <div style={{ width: 40 }}>
      {story()}
    </div>
  ))
  .add('shows header menu with a placeholder child.', () => (
    <HeaderMenu>
      <Placeholder />
    </HeaderMenu>
  ))
  .add('shows header menu with placeholder children.', () => (
    <HeaderMenu>
      <Placeholder width={250}>Left Child</Placeholder>
      <Placeholder width={250}>Middle Child</Placeholder>
      <Placeholder width={250}>Right child</Placeholder>
    </HeaderMenu>
  ))
  .add('shows header menu with menu buttons.', () => (
    <HeaderMenu>
      <Button>Menu Item 0</Button>
      <Button>Menu Item 1</Button>
      <Button>Menu Item 2</Button>
    </HeaderMenu>
  ));
