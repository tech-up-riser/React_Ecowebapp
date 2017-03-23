/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { Input } from 'semantic-ui-react';

type Props = {

};

/**
 * The text input used to perform a string serach.
 */
export default function TextSearchInput({ ...otherProps }: Props): React.Element<*> {
  const styles = reactCSS({
    'default': {
      input: {
        width: '100%',
      },
    },
  });

  return (
    <div {...otherProps}>
      <Input style={styles.input} icon='search' placeholder='Search...' />
    </div>
  );
}
