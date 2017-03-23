import React from 'react';
import { Icon } from 'semantic-ui-react';
import { storiesOf } from '@kadira/storybook';

import SideBarNavItem from '../../src/core/components/SideBarNavItem';

storiesOf('SideBarNavItem', module)
  .add('shows icon when contracted, with the label in a semantic-ui Popup.', () => (
    <SideBarNavItem icon={<Icon name="info" />} label="Test label" />
  ))
  .add('shows the icon and label when expanded.', () => (
    <SideBarNavItem icon={<Icon name="info" />} label="Test label" isExpanded />
  ));
