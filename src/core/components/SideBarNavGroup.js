/* @flow */
import React from 'react';
import { Menu } from 'semantic-ui-react';

type Props = {
  isExpanded?: bool,
  children?: any,
}

/**
 * A group of <SideBarNavItem />s, for side bars used for navigation side bars.
 */
export default function SideBarNavGroup({ isExpanded, children, ...otherProps }: Props): React.Element<*> {
  return (
    <Menu.Menu {...otherProps}>
      {React.Children.map(children, (child) =>
        <Menu.Item>
          {React.cloneElement(child, { isExpanded })}
        </Menu.Item>
      )}
    </Menu.Menu>
  );
}
