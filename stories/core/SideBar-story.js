import React from 'react';
import { Icon } from 'semantic-ui-react';
import { storiesOf } from '@kadira/storybook';

import Placeholder from '../Placeholder';

import SideBar from '../../src/core/components/SideBar';
import SideBarNavItem from '../../src/core/components/SideBarNavItem';

storiesOf('SideBar', module)
  .add('shows the side bar with a placeholder header and child.', () => (
    <SideBar header={<Placeholder>Header</Placeholder>} expandedWidth={300}>
      <Placeholder>Test Item</Placeholder>
    </SideBar>
  ))
  .add('shows the expanded side bar with a placeholder child.', () => (
    <SideBar header={<Placeholder>Header</Placeholder>} expandedWidth={300} isExpanded>
      <Placeholder>Expanded Test Item</Placeholder>
    </SideBar>
  ))
  .add('shows the expanded side bar even if hiddenWhenClosed is set.', () => (
    <SideBar header={<Placeholder>Header</Placeholder>} expandedWidth={300} isExpanded hiddenWhenClosed>
      <Placeholder>Test Item</Placeholder>
    </SideBar>
  ))
  .add('does not show anything if hiddenWhenClosed is set when closed.', () => (
    <SideBar header={<Placeholder>Header</Placeholder>} expandedWidth={300} hiddenWhenClosed>
      <Placeholder>Test Item</Placeholder>
    </SideBar>
  ))
  .add('shows the side bar with placeholder children.', () => (
    <SideBar header={<Placeholder>Header</Placeholder>} expandedWidth={300}>
      <Placeholder>Item 0</Placeholder>
      <Placeholder>Item 1</Placeholder>
      <Placeholder>Item 2</Placeholder>
    </SideBar>
  ))
  .add('shows the expanded side bar with placeholder children.', () => (
    <SideBar header={<Placeholder>Header</Placeholder>} isExpanded expandedWidth={300}>
      <Placeholder>Expanded Item 0</Placeholder>
      <Placeholder>Expanded Item 1</Placeholder>
      <Placeholder>Expanded Item 2</Placeholder>
    </SideBar>
  ))
  .add('shows the side bar with example SideBarNavItems.', () => (
    <SideBar header={<Placeholder>Header</Placeholder>} expandedWidth={300}>
      <SideBarNavItem icon={<Icon name="help circle" />} label="Item 0" />
      <SideBarNavItem icon={<Icon name="info circle" />} label="Item 1" />
      <SideBarNavItem icon={<Icon name="warning circle" />} label="Item 2" />
    </SideBar>
  ))
  .add('shows the expanded side bar with example SideBarNavItems.', () => (
    <SideBar  header={<Placeholder>Header</Placeholder>} isExpanded expandedWidth={300}>
      <SideBarNavItem icon={<Icon name="help circle" />} label="Item 0" />
      <SideBarNavItem icon={<Icon name="info circle" />} label="Item 1" />
      <SideBarNavItem icon={<Icon name="warning circle" />} label="Item 2" />
    </SideBar>
  ));
