/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { Button, Icon } from 'semantic-ui-react';

type Props = {
  label: string,
  active?: bool,
};

/**
 * Component that works as a drop down menu for the navigation bar.
 */
export default function NavItem({ label, active, ...otherProps }: Props): React.Element<*> {
  const styles = reactCSS({
    'default': {
      icon: {
        marginLeft: 15,
      },
    },
  });

  return (
    <Button color={active? 'blue': undefined} inverted={!active} active={active} {...otherProps}>
      {label}
      <Icon style={styles.icon} name='angle down' />
    </Button>
  );
}
