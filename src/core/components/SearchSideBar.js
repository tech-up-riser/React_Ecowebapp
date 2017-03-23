/* @flow */
import React from 'react';
import reactCSS from 'reactcss';

import SideBar from './SideBar';
import SearchSideBarHeader from './SearchSideBarHeader';

type Props = {
  title: string,
  catigories?: Array<{
    catigoriesId: string,
    label: string,
  }>,
  expandedWidth: number | string,
  isExpanded?: bool,
  hiddenWhenClosed?: bool,
  expandSideBar: () => void,
  collapseSideBar: () => void,
  children?: any,
};

/**
 * The text search filter and results.
 */
export default function SearchSideBar(props: Props): React.Element<*> {
  const {
    title,
    catigories,
    expandedWidth,
    isExpanded,
    hiddenWhenClosed,
    expandSideBar,
    collapseSideBar,
    children,
    ...otherProps,
  } = props;

  const styles = reactCSS({
    'default': {
      sideBar: {
        backgroundColor: '#f8f8f8',
      },
    },
  });

  return (
    <SideBar
      header={
        <SearchSideBarHeader
          title={title}
          catigories={catigories}
          expandSideBar={expandSideBar}
          collapseSideBar={collapseSideBar}
        />
      }
      expandedWidth={expandedWidth}
      isExpanded={isExpanded}
      hiddenWhenClosed={hiddenWhenClosed}
      style={styles.sideBar}
      {...otherProps}
    >
  {isExpanded?
    children:
    null
  }
    </SideBar>
  );
}
