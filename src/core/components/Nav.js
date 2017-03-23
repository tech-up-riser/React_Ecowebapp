/* @flow */
import React from 'react';
import reactCSS from 'reactcss';

import { HeaderMenu } from '../../core';

type Props = {
  children?: any,
};

/**
 * The header for the website.
 */
export default function Nav({ children, ...otherProps }: Props): React.Element<*> {
  const styles = reactCSS({
    'default': {
      nav: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 700,
        height: '100%',
      },
    },
  });

  return (
    <nav style={styles.nav} {...otherProps}>
      <HeaderMenu>
        {children}
      </HeaderMenu>
    </nav>
  );
}
