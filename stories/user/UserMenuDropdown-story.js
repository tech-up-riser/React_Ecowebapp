import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Icon } from 'semantic-ui-react';

import Placeholder from '../Placeholder';

import UserMenuDropdown from '../../src/user/components/UserMenuDropdown';

storiesOf('UserMenuDropdown', module)
  .addDecorator((story) => (
    <div style={{ height: 40, backgroundColor: '#468dc8', display: 'flex', justifyContent: 'flex-end' }}>
      {story()}
    </div>
  ))
  .add('shows the placeholder icon, plus a placeholder child when open.', () => (
    <UserMenuDropdown icon={<Placeholder width={50}>Icon</Placeholder>}>
      <Placeholder>Dropdown placeholder</Placeholder>
    </UserMenuDropdown>
  ))
  .add('shows the placeholder icon, plus placeholder children when open.', () => (
    <UserMenuDropdown icon={<Placeholder width={50}>Icon</Placeholder>}>
      <Placeholder>Dropdown placeholder 0</Placeholder>
      <Placeholder>Dropdown placeholder 1</Placeholder>
      <Placeholder>Dropdown placeholder 2</Placeholder>
    </UserMenuDropdown>
  ))
  .add('shows the example icon, plus a placeholder child when open.', () => (
    <UserMenuDropdown icon={<Icon name="info" size="large" inverted />}>
      <Placeholder>Dropdown placeholder</Placeholder>
    </UserMenuDropdown>
  ))
  .add('shows the example icon, plus placeholder children when open.', () => (
    <UserMenuDropdown icon={<Icon name="info" size="large" inverted />}>
      <Placeholder>Dropdown placeholder 0</Placeholder>
      <Placeholder>Dropdown placeholder 1</Placeholder>
      <Placeholder>Dropdown placeholder 2</Placeholder>
    </UserMenuDropdown>
  ));
