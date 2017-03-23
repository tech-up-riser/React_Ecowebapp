/* @flow */
import React from 'react';
import { List, Popup } from 'semantic-ui-react';
import reactCSS from 'reactcss';

type Props = {
  icon: any,
  isOpen?: bool,
  children?: any,
};

/**
 * A dropdown for the user menu.
 */
export default function UserMenuDropdown({ icon, children, isOpen, ...otherProps }: Props): React.Element<*> {
  const styles = reactCSS({
    'default': {
      icon: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      },
    },
  });

  return (
    <Popup
      trigger={<div style={styles.icon}>{icon}</div>}
      flowing
      hoverable
      {...otherProps}
    >
      <List divided relaxed>
      {React.Children.map(children, (child) =>
        <List.Item>
          {child}
        </List.Item>
      )}
      </List>
    </Popup>
  );
}
