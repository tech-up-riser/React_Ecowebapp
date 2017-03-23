/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { Icon } from 'semantic-ui-react';

type Props = {
  title: string,
  catigories?: Array<{
    catigoriesId: string,
    label: string,
  }>,
  isExpanded?: bool,
  expandSideBar: () => void,
  collapseSideBar: () => void,
  children?: any,
};

/**
 * The sidebar header used by a SearchSideBar.
 */
export default function SearchSideBarHeader(props: Props): React.Element<*> {
  const { title, catigories, isExpanded, expandSideBar, collapseSideBar, ...otherProps } = props;

  const styles = reactCSS({
    'default': {
      wrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        height: 20,
      },
      title: {
        color: '#5e656a',
      },
    },
    'isExpanded': {
      wrapper: {
        justifyContent: 'space-between',
      },
    },
  }, { isExpanded });

  if(!isExpanded) {
    return (
      <div style={styles.wrapper} {...otherProps}>
        <Icon name="content" size="large" onClick={expandSideBar} />
      </div>
    );
  }

  return (
    <div style={styles.wrapper} {...otherProps}>
      <h3 style={styles.title}>
        {title}
      </h3>
    {catigories?
      <div>NYI: catigorie selector</div>:
      null
    }
      <Icon name="minus circle" size="large" color="grey" inverted onClick={collapseSideBar} />
    </div>
  );
}
