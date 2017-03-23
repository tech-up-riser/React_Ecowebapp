/* @flow */
import React from 'react';
import { Link } from 'react-router';
import reactCSS from 'reactcss';
import { Menu, Icon, Select } from 'semantic-ui-react';

import { FillRemaining } from '../../core';

type Props = {
  status: 'active' | 'in-active' | 'none',
  tab: 'details' | 'comments' | 'activity',
};

/**
 * A component that displays the Communication
 */
export default function CommunicationTools({ status, tab, ...otherProps }: Props): React.Element<*> {
  const styles = reactCSS({
    'default': {
      wrapper: {
        position: 'relative',
      },
      tabMenu: {
        paddingLeft: 10,
      },
    },
  });

  return (
    <div style={styles.wrapper} {...otherProps}>
      <Menu secondary>
        <Menu.Item>
            <Icon name="commenting" />
            <span>Comment</span>
        </Menu.Item>
        <Menu.Item>
          <Icon name="tag" />
          <span>Logbook</span>
        </Menu.Item>
        <Menu.Item>
          <Icon name="share" />
          <span>Share</span>
        </Menu.Item>
        <Menu.Item>
          <Icon name="edit" />
          <span>Edit</span>
        </Menu.Item>
        <Menu.Item>
          <Icon name="trash outline" />
          <span>Delete</span>
        </Menu.Item>
      </Menu>
      <Menu tabular style={styles.tabMenu}>
        <Menu.Item active={tab === 'details'}>
          <Link to="/details">Details</Link>
        </Menu.Item>
        <Menu.Item active={tab === 'comments'}>
          <Link to="/comments">Comments</Link>
        </Menu.Item>
        <Menu.Item active={tab === 'activity'}>
          <Link to="/activity">Activity</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
