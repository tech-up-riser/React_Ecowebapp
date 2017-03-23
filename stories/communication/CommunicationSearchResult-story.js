import React from 'react';
import { storiesOf } from '@kadira/storybook';

import CommunicationSearchResult from '../../src/communication/components/CommunicationSearchResult';

storiesOf('CommunicationSearchResult', module)
  .add('shows the title and the author in a search result.', () => (
    <CommunicationSearchResult title="Test Item" author="Test Author" date="14/Dec/2016 00:21 PM MST" />
  ))
  .add('shows the title and the author in a active search result.', () => (
    <CommunicationSearchResult title="Test Item" author="Test Author" date="14/Dec/2016 00:21 PM MST" status="active" />
  ))
  .add('shows the title and the author in a inactive search result.', () => (
    <CommunicationSearchResult title="Test Item" author="Test Author" date="14/Dec/2016 00:21 PM MST" status="in-active" />
  ));
