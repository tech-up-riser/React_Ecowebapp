/* @flow */
import React from 'react';
import { Link } from 'react-router';
import reactCSS from 'reactcss';
import { Select, Input, Button, Icon } from 'semantic-ui-react';

import { FillRemaining } from '../../core';
import CommunicationTools from './CommunicationTools';

type Props = {
  title: string,
  status: 'active' | 'in-active' | 'none',
  tab: 'details' | 'comments' | 'activity',
  children?: any,
};

/**
 * A component that displays the Communication
 */
export default function Communication({ title, status, tab, children, ...otherProps }: Props): React.Element<*> {
  const styles = reactCSS({
    'default': {
      wrapper: {
        width: '100%',
        height: '100%',
      },
      header: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        paddingTop: 15,
      },
      searchContainer: {
        paddingLeft: 20,
        paddingBottom: 20,
        display: 'inline-flex',
      },
      searchbox: {
        width: 400,
      },
      searchbutton: {
        marginLeft: 20,
        width: 100,
      },
      searchicon: {
        marginLeft: -50,
        paddingTop: 10,
        zIndex: 1001,
      },
      title: {
        width: '60%',
        paddingLeft: 18,
      },
      children: {
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20,
      },
      select: {
        float: 'right',
        marginRight: 15,
        marginTop: -35,
        backgroundColor: 'green',
        color: 'white',
      },
      bottomZero: {
        marginBottom: 0,
      },
    },
  });

  return (
    <section style={styles.wrapper} {...otherProps}>
      <FillRemaining direction="column">
        <header style={styles.header}>
          <div style={styles.searchContainer}>
            <Input icon='search' iconPosition='left' style={styles.searchbox} />
            <div style={styles.searchicon}>
              <a><Icon name="close" /></a>
              <a><Icon name="caret down" color='black' /></a>
            </div>
            <Button primary style={styles.searchbutton}>Search</Button>
          </div>
          <div>
            <div style={styles.title}>
              <h3 style={styles.bottomZero}>
                {title}
              </h3>
              <span>In <a>Operations</a> > <a>Daily Check-sheet</a> | Department Admionistration</span>
            </div>
            <Select
              style={styles.select}
              placeholder="Status"
              value={status}
              options={[
                { value: 'active',    text: 'Active' },
                { value: 'in-active', text: 'In-Active' },
                { value: 'none',      text: 'None' },
            ]}
            />
          </div>
          <CommunicationTools status={status} tab={tab} />
        </header>
        <div style={styles.children}>
          {children}
        </div>
      </FillRemaining>
    </section>
  );
}
