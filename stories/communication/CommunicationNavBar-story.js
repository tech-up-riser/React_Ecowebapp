import React from 'react';
import { Provider } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { storiesOf, action } from '@kadira/storybook';
import configureStore from 'redux-mock-store';

import { SIDEBAR_REDUCER_STATE } from '../../src/core/reducers/sideBarReducer';

import Placeholder from '../Placeholder';

import CommunicationNavBar from '../../src/communication/components/CommunicationNavBar';
import SideBarNavGroup from '../../src/core/components/SideBarNavGroup';
import SideBarNavItem from '../../src/core/components/SideBarNavItem';

function makeMockStore() {
  const getNewStore = configureStore([]);

  return getNewStore({
    [SIDEBAR_REDUCER_STATE]: {},
  });
}

storiesOf('CommunicationNavBar', module)
  .addDecorator((story) => (
    <Provider store={makeMockStore()}>
      {story()}
    </Provider>
  ))
  .add('shows the nav bar with a placeholder child.', () => (
    <CommunicationNavBar>
      <Placeholder />
    </CommunicationNavBar>
  ))
  .add('shows the nav bar with placeholder children.', () => (
    <CommunicationNavBar>
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </CommunicationNavBar>
  ))
  .add('shows the nav bar header with the expand function, when collapsed.', () => (
    <CommunicationNavBar expandSideBar={action('expand')}>
      <Placeholder />
    </CommunicationNavBar>
  ))
  /* //TODO, how to test expaned
  .add('shows the nav bar header with the collapse function, when expanded.', () => (
    <CommunicationNavBar collapseSideBar={action('collapse')} isExpanded>
      <Placeholder />
    </CommunicationNavBar>
  ))*/
  .add('shows the nav bar with example SideBarNavGroups and SideBarNavItems.', () => (
    <CommunicationNavBar>
      <SideBarNavGroup>
        <SideBarNavItem icon={<Icon name="help circle" />} label="Item 0" />
        <SideBarNavItem icon={<Icon name="info circle" />} label="Item 1" />
      </SideBarNavGroup>
      <SideBarNavGroup>
        <SideBarNavItem icon={<Icon name="warning circle" />} label="Item 2" />
      </SideBarNavGroup>
    </CommunicationNavBar>
  ))
  /* //TODO, how to test expaned
  .add('shows the expanded nav side bar with example SideBarNavGroups and SideBarNavItems.', () => (
    <CommunicationNavBar isExpanded>
      <SideBarNavGroup>
        <SideBarNavItem icon={<Icon name="help circle" />} label="Item 0" />
        <SideBarNavItem icon={<Icon name="info circle" />} label="Item 1" />
      </SideBarNavGroup>
      <SideBarNavGroup>
        <SideBarNavItem icon={<Icon name="warning circle" />} label="Item 2" />
      </SideBarNavGroup>
    </CommunicationNavBar>
  ))*/;
