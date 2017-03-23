/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { Feed, Icon, Label, Menu, Select, Segment, Dropdown } from 'semantic-ui-react';

type Props = {
  author: string,
  date: string,
  body: string,
  status?: 'active' | 'in-active',
  actionsTakens: Array<string>,
  children?: any,
};

/**
 * The component that displays a comment.
 */
export default function Comment(props: Props): React.Element<*> {
  const { author, date, body, status, actionsTakens, children, ...otherProps } = props;

  const styles = reactCSS({
    'default': {
      actionMenu: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      feedContainer: {
        position: 'relative',
      },
      content: {
        marginTop: -15,
      },
      feedIcon: {
        fontSize: 10,
        marginTop: 20,
        marginLeft: -20,
        position: 'absolute',
      },
      summary: {
        width: 200,
        display: 'table-cell',
        borderRight: '1px solid #d4d4d5',
        fontSize: 14,
      },
      status: {
        width: 100,
        display: 'table-cell',
      },
      select: {
        fontSize: 14,
        border: 'none',
        paddingLeft: 42,
      },
      selectIcon: {
        position: 'absolute',
        zIndex: '1001',
        fontSize: 14,
        paddingLeft: 18,
        paddingTop: 10,
      },
      fullWidth: {
        width: '100%',
      },
      dropdown: {
        float: 'right',
        fontSize: 20,
        paddingRight: 15,
        marginTop: -30,
      },
      blueText: {
        color: '#4183c4',
      },
      redText: {
        color: 'red',
      },
      actionsTaken: {
        display: 'block',
        fontSize: 14,
      },
      actionsBox: {
        border: '1px solid #d4d4d5',
        paddingLeft: 2,
        paddingRight: 2,
        fontSize: 14,
        marginLeft: 10,
      },
      logBook: {
        marginTop: 5,
      },
    },
  });

  return (
    <Feed.Event>
      <Feed.Label style={styles.feedContainer}>
        <img src='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
      {status === 'active'?
        <Icon name="circle" color="green" style={styles.feedIcon} />:
        null
      }
      {status === 'in-active'?
        <Icon name="circle" color="red" style={styles.feedIcon} />:
        null
      }
      </Feed.Label>
      <Feed.Content style={styles.content}>
        <Feed.Meta style={styles.fullWidth}>
          <div style={styles.summary}>
            <span style={styles.blueText}>{author}</span><br/>
            <span>{date}</span>
          </div>
          <div style={styles.status}>
            <Icon name="power" color={(status !=='active' && status !== 'in-active')? "grey": status == 'active'? "green": "red"} style={styles.selectIcon}/>
            <Select
              placeholder="Status"
              value={status? status : "none" }
              icon={null}
              style={styles.select}
              options={[
                { value: 'active', icon: { name: 'power', color: 'green'}, text: 'Active' },
                { value: 'in-active',icon: { name: 'power', color: 'red'}, text: 'In-Active' },
                { value: 'none', icon: { name: 'power', color: 'grey'}, text: 'None' },
              ]}
            />
          </div>
          <Dropdown pointing icon='angle down' style={styles.dropdown} className='link item top right'>
            <Dropdown.Menu>
              <Dropdown.Item style={styles.blueText}>Edit</Dropdown.Item>
              <Dropdown.Item style={styles.blueText}>Link</Dropdown.Item>
              <Dropdown.Item style={styles.blueText}>Share</Dropdown.Item>
              <Dropdown.Item style={styles.blueText}>Add to Logbooks</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item style={styles.redText}>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Feed.Meta>
        <Feed.Meta style={styles.actionsTaken}>
          <span>Actions Taken</span>
          {actionsTakens ? actionsTakens.map((actionstaken, index) =>
            <span style={styles.actionsBox} key={index}>{actionstaken}</span>
          ): null}
        </Feed.Meta>
        <Feed.Extra text>
          {body}
        </Feed.Extra>
        <Feed.Meta style={styles.logBook}>
          {children}
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  );
}
