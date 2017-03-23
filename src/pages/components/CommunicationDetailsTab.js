/* @flow */
import React from 'react';
import reactCSS from 'reactcss';
import { Link } from 'react-router';
import { Button, Card, Icon, Popup, Divider, Grid, Dropdown, Menu } from 'semantic-ui-react';

import { FileListAndUploadArea } from '../../communication';
import { FillRemaining } from '../../core';

type Props = {
  description: string,
  attachments?: Array<{
    fileName: string,
    modifiedDate: string,
    size: string,
  }>,
};

/**
 * The component that displays the details tab on the Communication Page,
 */
export default function CommunicationDetailsTab({ description, attachments, ...otherProps }: Props): React.Element<*> {
  const styles = reactCSS({
    'default': {
      descriptionWrapper: {
        paddingBottom: 15,
        paddingTop: 20,
      },
      customerWrapper: {
        paddingLeft: 20,
        paddingBottom: 15,
        paddingTop: 15,
      },
      browse: {
        paddingLeft: 20,
        paddingBottom: 15,
        paddingTop: 15,
      },
      label: {
        fontSize: '15px',
      },
      icon: {
        fontSize: '20px',
      },
      bold: {
        fontWeight: 'bold',
      },
      description: {
        paddingTop: 15,
        paddingLeft: 10,
      },
      address: {
        paddingRight: 30,
      },
      grid: {
        paddingTop: 10,
      },
      problemLocation: {
        fontWeight: 'bold',
        paddingTop: 10,
      },
      dropdown: {
        float: 'right',
        fontSize: 20,
        paddingRight: 15,
      },
      minTop: {
        paddingTop: 10,
      },
      card: {
        width: 150,
      },
      cardIcon: {
        marginLeft: 25,
      },
      cardfile: {
        fontSize: 12,
        color: '#4183C4',
      },
      carddate: {
        fontSize: 11,
      },
    },
  });

  return (
    <FillRemaining direction="column">
      <div className="attachSection">
        <div style={styles.descriptionWrapper}>
          <Link to="#" >
            <Icon name="attach" style={styles.icon} />
            <span style={styles.label}>attachment</span>
          </Link>
          <p style={styles.description}>
            {description}
          </p>
        </div>
        <Divider fitted/>
      </div>
      <FillRemaining direction="column">
        <div className="customerSection">
          <div style={styles.customerWrapper}>
            <div>
              <span style={styles.bold}>Customer</span>
            </div>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column style={styles.grid}>
                  <span>Dominic M.Tarango</span> <br/>
                  <Link to="#" >
                    <Icon name="phone" style={styles.icon} />
                    <span style={styles.label}>828-231-5361</span>
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <span style={styles.bold} >Nature of Request:</span>
                  <span>Sewer backup now</span>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <div style={styles.minTop}>
              <span style={styles.address}>2004 McVaney Road. Asheville, NC 28801</span>
              <Icon bordered name="pencil" style={styles.label} />
            </div>
            <div style={styles.problemLocation}>
              <span>Problem Location</span>
            </div>
            <div style={styles.minTop}>
              <span style={styles.address}>3455 Flinderation Road, IL 60605</span>
              <Icon bordered name="pencil" style={styles.label} />
            </div>
          </div>
          <Divider fitted/>
        </div>
        <div style={styles.browse}>
          <div>
            <span style={styles.bold}>Attachments</span>
            <Dropdown pointing icon='angle down' style={styles.dropdown} className='link item top right'>
              <Dropdown.Menu>
                <Dropdown.Item>Sort By Name</Dropdown.Item>
                <Dropdown.Item>Sort By Date</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Ascending</Dropdown.Item>
                <Dropdown.Item>Descending</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Thumbnails</Dropdown.Item>
                <Dropdown.Item>List</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Download All</Dropdown.Item>
                <Dropdown.Item>Manage Attachments</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <FileListAndUploadArea>
          {attachments?
            <Card.Group>
            {attachments.map(({ fileName, size, modifiedDate }, index) =>
              <Card style={styles.card} key={index}>
                <Card.Content>
                  <Icon style={styles.cardIcon}name="file pdf outline" size="huge" />
                </Card.Content>
                <Card.Content>
                  <Card.Meta>
                    <span style={styles.cardfile}>{fileName}</span>
                  </Card.Meta>
                  <Card.Description style={styles.carddate}>
                    {modifiedDate} {size}
                  </Card.Description>
                </Card.Content>
              </Card>
            )}
            </Card.Group>:
            null
          }
          </FileListAndUploadArea>
        </div>
      </FillRemaining>
    </FillRemaining>
  );
}
