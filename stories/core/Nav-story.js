import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Placeholder from '../Placeholder';

import Nav from '../../src/core/components/Nav';
import NavButton from '../../src/core/components/NavButton';
import NavItem from '../../src/core/components/NavItem';

storiesOf('Nav', module)
  .addDecorator((story) => (
    <div style={{ height: 40, backgroundColor: '#468dc8' }}>
      {story()}
    </div>
  ))
  .add('shows the nav bar with a placeholder child.', () => (
    <Nav>
      <Placeholder />
    </Nav>
  ))
  .add('shows the nav bar with placeholder children.', () => (
    <Nav>
      <Placeholder width={250}>Item 0</Placeholder>
      <Placeholder width={250}>Item 1</Placeholder>
      <Placeholder width={250}>Item 2</Placeholder>
    </Nav>
  ))
  .add('shows the nav bar with example NavButton children.', () => (
    <Nav>
      <NavButton>Button 0</NavButton>
      <NavButton>Button 1</NavButton>
      <NavButton>Button 2</NavButton>
    </Nav>
  ))
  .add('shows the nav bar with example NavItem children.', () => (
    <Nav>
      <NavItem label="Item 0" />
      <NavItem label="Item 1" />
      <NavItem label="Item 2" />
    </Nav>
  ));
