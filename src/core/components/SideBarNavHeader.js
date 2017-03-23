/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { Icon } from 'semantic-ui-react';

type Props = {
  isExpanded?: bool,
  expandSideBar?: () => void,
  collapseSideBar?: () => void,
};

/**
 * A header that can displayed in expanded or collapsed formate, for side bars used for navigation.
 */
export default function SideBarNavHeader(props: Props): React.Element<*> {
  const { isExpanded, expandSideBar, collapseSideBar, ...otherProps } = props;

  const styles = reactCSS({
    'default': {
      wrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        height: 20,
      },
    },
  });

  return (
    <div style={styles.wrapper} {...otherProps}>
    {isExpanded?
      <Icon name="minus circle" onClick={collapseSideBar} />:
      <Icon name="content" size="large" onClick={expandSideBar} />
    }
    </div>
  );
}
