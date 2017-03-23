/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { Feed, Icon, Comment } from 'semantic-ui-react';

type Props = {
  author: string,
  date: string,
  label: string,
  isLast: string,
};

/**
 * The component that displays a comment.
 */
export default function Activity(props: Props): React.Element<*> {

  const {
    author,
    date,
    label,
    isLast,
  } = props;

  const styles = reactCSS({
    'default': {
      feedContainer: {
        position: 'relative',
      },
      feedIcon: {
        fontSize: 10,
        marginTop: 20,
        marginLeft: -20,
        position: 'absolute',
      },
      commentGroup : {
        paddingTop: 0,
      },
    },
  });

  return (
    <Comment>
      <Feed>
        <Feed.Event>
          <Feed.Label style={styles.feedContainer}>
            <img src='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
            <Icon name="circle" color="green" style={styles.feedIcon} />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <div>{author}{label}</div>
              <Feed.Date>{date}</Feed.Date>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
      {isLast !== "true"? <Comment.Group style={styles.commentGroup}/>: null}
    </Comment>
  );
}
