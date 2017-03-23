import React from 'react';
import { storiesOf } from '@kadira/storybook';

import UserMenu from '../../src/user/components/UserMenu';

storiesOf('UserMenu', module)
  .addDecorator((story) => (
    <div style={{ height: 40, backgroundColor: '#468dc8', display: 'flex', justifyContent: 'flex-end' }}>
      {story()}
    </div>
  ))
  .add('shows the user menu.', () => (
    <UserMenu clientName="Test Client Name" clientId="123456" />
  ))
  .add('shows the user menu, in admin mode.', () => (
    <UserMenu clientName="Test Client Name" clientId="123456" isAdmin />
  ));
