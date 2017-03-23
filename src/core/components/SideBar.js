/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { Menu, Icon } from 'semantic-ui-react';

type Props = {
  style?: Object,
  header: React.Element<*>,
  expandedWidth: number | string,
  isExpanded?: bool,
  hiddenWhenClosed?: bool,
  children?: any,
};

/**
 * A sidebar that fill up the height of the container.
 *
 * NOTE: The header and children will be passed the isExpanded prop given to <SideBar />.
 */
export default function SideBar(props: Props): React.Element<*> {
  const {
    style,
    header,
    expandedWidth,
    isExpanded,
    hiddenWhenClosed,
    children,
    ...otherProps,
  } = props;

  const styles = reactCSS({
    'default': {
      sideBar: {
        position: 'relative',
        height: '100%',
        width: undefined,
        ...style,
      },
    },
    'isExpanded': {
      sideBar: {
        width: expandedWidth,
      },
    },
    'isClosed': {
      sideBar: {
        display: hiddenWhenClosed? 'none': undefined,
      },
    },
  }, { isExpanded, isClosed: !isExpanded });

  return (
    <Menu style={styles.sideBar} icon={!isExpanded} vertical {...otherProps}>
      <Menu.Item>
        {React.cloneElement(header, { isExpanded: isExpanded? true: false })}
      </Menu.Item>
    {React.Children.map(children, (child) =>
      <Menu.Item>
        {React.cloneElement(child, { isExpanded: isExpanded? true: false })}
      </Menu.Item>
    )}
    </Menu>
  );
}
