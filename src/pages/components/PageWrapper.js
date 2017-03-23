/* @flow */
import React from 'react';

import { FillRemaining, Header, Nav, NavItem } from '../../core';
import { NavItem as CommunicationNavItem, AddNavButton } from '../../communication';
import { UserMenu } from '../../user';

type Props = {
  logoImgSrc: string,
  children?: any,
};

//TODO, Move to ../../personnel, after more personnel code has been added
const connectPersonnel = (Component) => (props) => (
  <Component label="Personnel" onClick={() => console.log('NYI: dropdown')} {...props} />
);
const PersonnelNavItem = connectPersonnel(NavItem);

//TODO, Move to ../../logbook, after more logbook code has been added
const connectLogbook = (Component) => (props) => (
  <Component label="Logbook" onClick={() => console.log('NYI: dropdown')} {...props} />
);
const LogbookNavItem = connectLogbook(NavItem);

/**
 * Root Component for the site.
 */
export default function PageWrapper({ logoImgSrc, children, ...otherProps }: Props): React.Element<*> {
  return (
    <FillRemaining direction="column" {...otherProps}>
      <Header logoImgSrc={logoImgSrc}>
        <Nav>
          <CommunicationNavItem active />
          <PersonnelNavItem />
          <LogbookNavItem />
          <AddNavButton />
        </Nav>
        <UserMenu />
      </Header>
      {children}
    </FillRemaining>
  );
}
