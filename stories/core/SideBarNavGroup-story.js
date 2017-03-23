import React from 'react';
import { Icon } from 'semantic-ui-react';
import { storiesOf } from '@kadira/storybook';

import Placeholder from '../Placeholder';

import SideBarNavGroup from '../../src/core/components/SideBarNavGroup';
import SideBarNavItem from '../../src/core/components/SideBarNavItem';

storiesOf('SideBarNavGroup', module)
  .add('shows the group with a placeholder child.', () => (
    <SideBarNavGroup>
      <Placeholder />
    </SideBarNavGroup>
  ))
  .add('shows the group with placeholder children.', () => (
    <SideBarNavGroup>
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </SideBarNavGroup>
  ))
  .add('shows the side bar with example SideBarNavItems.', () => (
    <SideBarNavGroup>
      <SideBarNavItem icon={<Icon name="help circle" />} label="Item 0" />
      <SideBarNavItem icon={<Icon name="info circle" />} label="Item 1" />
      <SideBarNavItem icon={<Icon name="warning circle" />} label="Item 2" />
    </SideBarNavGroup>
  ))
  .add('shows the expanded side bar with example SideBarNavItems.', () => (
    <SideBarNavGroup isExpanded>
      <SideBarNavItem icon={<Icon name="help circle" />} label="Item 0" />
      <SideBarNavItem icon={<Icon name="info circle" />} label="Item 1" />
      <SideBarNavItem icon={<Icon name="warning circle" />} label="Item 2" />
    </SideBarNavGroup>
  ));
