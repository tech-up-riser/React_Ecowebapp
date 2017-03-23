import React from 'react';
import { Icon } from 'semantic-ui-react';
import { storiesOf } from '@kadira/storybook';

import SideBarNavHeader from '../../src/core/components/SideBarNavHeader';

storiesOf('SideBarNavHeader', module)
  .add('shows the open side bar icon when collapsed.', () => (
    <SideBarNavHeader />
  ))
  .add('shows the close side bar icon when expanded.', () => (
    <SideBarNavHeader isExpanded />
  ));
