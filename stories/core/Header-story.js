import React from 'react';
import { Button } from 'semantic-ui-react';
import { storiesOf } from '@kadira/storybook';

import Placeholder from '../Placeholder';

import Header from '../../src/core/components/Header';
import HeaderMenu from '../../src/core/components/HeaderMenu';

storiesOf('Header', module)
  .add('shows header bar with the given logo.', () => (
    <Header logoImgSrc="/images/logo-white.svg" />
  ))
  .add('shows the header with a placeholder child.', () => (
    <Header logoImgSrc="/images/logo-white.svg">
      <Placeholder />
    </Header>
  ))
  .add('shows the header with placeholder children.', () => (
    <Header logoImgSrc="/images/logo-white.svg">
      <Placeholder width={250}>Left Child</Placeholder>
      <Placeholder width={250}>Middle Child</Placeholder>
      <Placeholder width={250}>Right child</Placeholder>
    </Header>
  ))
  .add('shows the header bar with <HeaderMenu />s as a children.', () => (
    <Header logoImgSrc="/images/logo-white.svg">
      <HeaderMenu>
        <Button>Menu 0 Item 0</Button>
        <Button>Menu 0 Item 1</Button>
        <Button>Menu 0 Item 2</Button>
      </HeaderMenu>
      <HeaderMenu>
        <Button>Menu 1 Item 0</Button>
        <Button>Menu 1 Item 1</Button>
        <Button>Menu 1 Item 2</Button>
      </HeaderMenu>
    </Header>
  ));
