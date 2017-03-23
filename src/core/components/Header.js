/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { Image } from 'semantic-ui-react';

import FillRemaining from './FillRemaining';

type Props = {
  logoImgSrc: string,
  children?: any,
};

/**
 * The header for the website.
 */
export default function Header({ logoImgSrc, children, ...otherProps }: Props): React.Element<*> {
  const styles = reactCSS({
    'default': {
      header: {
        height: 40,

        //TODO, move to theme
        backgroundColor: '#468dc8',
      },
      logo: {
        height: 40,
        padding: 2,
      },
      children: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 40,
      },
    },
  });

  return (
    <header style={styles.header} {...otherProps}>
      <FillRemaining direction="row">
        <Image style={styles.logo} src={logoImgSrc} size="tiny" />
        <div style={styles.children}>
          {children}
        </div>
      </FillRemaining>
    </header>
  );
}
