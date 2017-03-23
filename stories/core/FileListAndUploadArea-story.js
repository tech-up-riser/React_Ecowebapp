import React from 'react';
import { Card } from 'semantic-ui-react';

import Placeholder from '../Placeholder';

import { storiesOf } from '@kadira/storybook';

import FileListAndUploadArea from '../../src/core/components/FileListAndUploadArea';

storiesOf('FileListAndUploadArea', module)
  .add('shows the file upload area.', () => (
    <FileListAndUploadArea />
  ))
  .add('shows the file upload area, with a placeholder child.', () => (
    <FileListAndUploadArea>
      <Placeholder height={100} />
    </FileListAndUploadArea>
  ))
  .add('shows the file upload area, with attachments.', () => (
    <FileListAndUploadArea>
      <Card.Group>{/* //TODO, create attachment component */}
        <Card>NYI: File 0</Card>
        <Card>NYI: File 1</Card>
        <Card>NYI: File 2</Card>
      </Card.Group>
    </FileListAndUploadArea>
  ));
