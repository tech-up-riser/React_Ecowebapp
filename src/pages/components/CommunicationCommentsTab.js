/* @flow */
import React from 'react';
import { Feed, Icon, Label } from 'semantic-ui-react';
import reactCSS from 'reactcss';

import { LogbookLabel, LogbookLabelGroup } from '../../logbook';
import { Comment } from '../../core';

type Props = {
  //TODO, changes this to a list of comment ids, and connect each comment to the redux state
  comments?: Array<{
    author: string,
    date: string,
    body: string,
    status?: 'active' | 'in-active',
    actionsTakens: Array<string>,
    linkedLogbooks?: Array<string>,
    attachments?: Array<{
      //TODO, get info for attachment previews
    }>,
  }>,
};

/**
 * The component that displays the comments tab on the Communication Page,
 */
export default function CommunicationCommentsTab({ comments, ...otherProps }: Props): React.Element<*> {

  const styles = reactCSS({
    'default': {
      commentsWrapper: {
        paddingTop: 20,
      },
    },
  });

  return (
    <Feed {...otherProps} style={styles.commentsWrapper}>
    {comments? comments.map(({ linkedLogbooks, attachments, ...comment }, index) =>
      <Comment {...comment} key={index}>
      {attachments?
        <span>
        {attachments.length === 1?
          'Attachment':
          `${attachments.length} Attachments`
        }
        {attachments.map(({}, index) =>
          <Icon name="file" key={index} />
        )}
        </span>:
        null
      }
      {linkedLogbooks?
        <LogbookLabelGroup>
        {linkedLogbooks.map((linkedLogbook, index) =>
          <LogbookLabel key={index}>{linkedLogbook}</LogbookLabel>
        )}
        </LogbookLabelGroup>:
        null
      }
      </Comment>
    ): null}
    </Feed>
  );
}
