/* @flow */
import React from 'react';
import { Button } from 'semantic-ui-react';

type Props = {
  children?: any,
};

/**
 * Component that works as a button for the navigation bar.
 */
export default function NavButton({ children, ...otherProps }: Props): React.Element<*> {
  return (
    <Button color="blue" {...otherProps}>
      {children}
    </Button>
  );
}
