/* @flow */
import React from 'react';
import { Feed, Comment } from 'semantic-ui-react';
import reactCSS from 'reactcss';

import { Activity } from '../../core';

type Props = {
  activity?: Array<{
    author: string,
    date: string,
    label: string,
  }>,
};

/**
 * The component that displays the activity tab on the Communication Page,
 */
export default function CommunicationActivityTab({ activity, ...otherProps }: Props): React.Element<*> {

  const styles = reactCSS({
    'default': {
      activityWrapper: {
        paddingTop: 20,
      },
    },
  });

  return (
    <Comment.Group threaded  {...otherProps} style={styles.activityWrapper}>
    {activity? activity.map((activityData, index) =>
      <Activity {...activityData} key={index} isLast={(index + 1) ===(activity ? activity.length: 0)? 'true' : 'false'}/>
    ): null}
    </Comment.Group>
  );
}
