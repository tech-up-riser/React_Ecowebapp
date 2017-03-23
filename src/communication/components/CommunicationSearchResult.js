/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { Icon } from 'semantic-ui-react';

export type Props = {
  title: string,
  author: string,
  date: string,
  status?: 'active' | 'in-active',
  isExpanded?: bool,
};

export default function CommunicationSearchResult(props: Props): React.Element<*> {
  const { title, author, date, status, isExpanded, ...otherProps } = props;
  const styles = reactCSS({
    'default': {
      wrapper: {
        display: 'flex',
        height: 65,
      },
      icon: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: 15,
        marginRight: 20,
      },
      info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      },
      title: {
        fontWeight: 'bold',

        //TODO, move to theme
        color: '#468dc8',
      },
      date: {
        //TODO, move to theme
        color: '#468dc8',
      },
      author: {
        //TODO, move to theme
        color: '#6da94f',
      },
    }
  });

  return (
    <div style={styles.wrapper} {...otherProps}>
      <div style={styles.icon}>
      {status === 'active'?
        <Icon name="circle" color="green" />:
        null
      }
      {status === 'in-active'?
        <Icon name="circle thin" color="grey" />:
        null
      }
      </div>
      <div style={styles.info}>
        <span style={styles.title}>{title}</span>
        <span style={styles.date}>{date}</span>
        <span style={styles.author}>{author}</span>
      </div>
    </div>
  );
}
