/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { Button, Menu, Icon } from 'semantic-ui-react';

type Props = {
  onSearchClick: () => void,
  children?: any,
};

/**
 * The search filters header bar.
 */
export default function SearchFiltersBar({ onSearchClick, children, ...otherProps }: Props): React.Element<*> {
  const styles = reactCSS({
    'default': {
      menu: {
        marginBottom: 0,
      },
    },
  });

  let preTextChildren = [];
  let textChild = null;
  let postTextChildren = [];
  React.Children.forEach(children, (child) => {
    if(textChild)                       postTextChildren.push(child);
    else if(typeof child === 'string')  textChild = child;
    else                                preTextChildren.push(child);
  });

  return (
    <Menu style={styles.menu} borderless {...otherProps}>
    {preTextChildren.map((child, index) =>
      <Menu.Item key={index}>
        {child}
      </Menu.Item>
    )}
      <Menu.Menu position="right">
        <Menu.Item>
          {textChild}
        </Menu.Item>
      {postTextChildren.map((child, index) =>
        <Menu.Item key={index}>
          {child}
        </Menu.Item>
      )}
        <Menu.Item>
          <Button color="blue" onClick={onSearchClick}>
            <Icon name="search" />
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
