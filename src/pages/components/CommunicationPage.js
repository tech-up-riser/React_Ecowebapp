/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { Icon, Popup } from 'semantic-ui-react';

import { Communication, CommunicationNavBar, CommunicationSearchResult } from '../../communication';
import { FillRemaining, SearchSideBar, SideBarNavGroup, SideBarNavItem } from '../../core';

import type { Communication as CommunicationData } from '../../communication/reducers/communicationsReducer';

type Props = {
  results: Array<CommunicationData>,
  children?: any,
};

const COMMUNICATION_NAV_BAR = 'COMMUNICATION_NAV_BAR';
const COMMUNICATION_SEARCH_BAR = 'COMMUNICATION_SEARCH_BAR';

/**
 * Wrapper for the Communication Page, that contains the side bar and panel.
 */
export default function CommunicationPage({ results, children, ...otherProps }: Props): React.Element<*> {
  return (
    <FillRemaining direction="row" {...otherProps}>
      <FillRemaining direction="row">
        <CommunicationNavBar sideBarId={COMMUNICATION_NAV_BAR} initialExpandedWidth={200}>
          <SideBarNavGroup>
            <SideBarNavItem label="Customer Calls" icon={<Icon name="call" size="large" />} />
            <SideBarNavItem label="Daily Bulletins" icon={<Icon name="file text" size="large" />} />
            <SideBarNavItem label="Discussions" icon={<Icon name="discussions" size="large" />} />
            <SideBarNavItem label="Emergency Alerts" icon={<Icon name="exclamation triangle" size="large" />} />
          </SideBarNavGroup>
          <SideBarNavGroup>
            <SideBarNavItem label="System Manager" icon={<Icon name="setting" size="large" />} />
            <SideBarNavItem label="Archives" icon={<Icon name="archive" size="large" />} />
          </SideBarNavGroup>
        </CommunicationNavBar>
        <SearchSideBar sideBarId={COMMUNICATION_SEARCH_BAR} initialExpandedWidth={400} defaultExpanded>
        {results.map((result, index) =>
          <CommunicationSearchResult {...result} key={index} />
        )}
        </SearchSideBar>
      </FillRemaining>
      <Communication>
        {children}
      </Communication>
    </FillRemaining>
  );
}
