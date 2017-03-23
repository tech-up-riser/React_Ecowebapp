/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { SideBar, SideBarNavHeader } from '../../core';

type Props = {
  sideBarId: string,
  expandSideBar: () => void,
  collapseSideBar: () => void,
  children?: any,
};

/**
 * A navigation bar for the left side of the site.
 */
export default function CommunicationNavBar(props: Props): React.Element<*> {
  const { sideBarId, expandSideBar, collapseSideBar, children, ...otherProps } = props;

  const styles = reactCSS({
    'default': {
      sideBar: {
        backgroundColor: '#2b5f8c', //NOTE, from wireframe
        borderRadius: 0,
      },
    },
  });

  return (
    <SideBar
      style={styles.sideBar}
      sideBarId={sideBarId}
      header={<SideBarNavHeader expandSideBar={expandSideBar} collapseSideBar={collapseSideBar} />}
      inverted
      {...otherProps}
    >
      {children}
    </SideBar>
  );
}
