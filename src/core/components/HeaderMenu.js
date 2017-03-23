/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { Menu } from 'semantic-ui-react';

type Props = {
  children?: any,
};

/**
 * A menu for the header of the website.
 */
export default function HeaderMenu({ children, ...otherProps }: Props): React.Element<*> {
  const styles = reactCSS({
    'default': {
      menu: {
        height: '100%',
        marginTop: 0,
        marginBottom: 0,
      },
    },
  });

  return (
    <Menu inverted secondary style={styles.menu} {...otherProps}>
    {React.Children.map(children, (child) => child?
      <Menu.Item>
        {child}
      </Menu.Item>:
    null )}
    </Menu>
  );
}
