/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { Icon } from 'semantic-ui-react';

type Props = {
  children?: any,
};

/**
 * A file upload area.
 */
export default function FileListAndUploadArea({ children, ...otherProps}: Props): React.Element<*> {
  const styles = reactCSS({
    'default': {
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'auto',
        margin: 10,
        padding: 5,
        borderWidth: 2,
        borderRadius: 5,
        borderStyle: 'dashed',

        borderColor: '#D4D4D5', //NOTE, from theme
        color: '#D4D4D5',       //NOTE, from theme
      },
      instructions: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50,
      },
      browseLink: {
        marginLeft: 5,
      },
      attachments: {
        margin: 10,
        paddingTop: 20,
      },
    },
  });

  return (
    <div {...otherProps}>
      <div style={styles.wrapper}>
        <span style={styles.instructions}>
          <Icon name="cloud upload" size="large" />
          <span>Drop files here to upload, </span>
          <a style={styles.browseLink} href="#"> or browse</a>
        </span>
        <div style={styles.attachments}>
          {children}
        </div>
      </div>
    </div>
  );
}
