import React from 'react';
import renderer from 'react-test-renderer';

import CommunicationDetailsTab from '../CommunicationDetailsTab';

test('it displays description for the given communication.', () => {
  const component = renderer.create(
    <CommunicationDetailsTab description="Test description" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it displays the given attachments in the drop area.', () => {
  const component = renderer.create(
    <CommunicationDetailsTab
      attachments={[
        { fileName: 'TestFile0.pdf', modifiedDate: 'January 3, 2017', size: '67.0 KB' },
        { fileName: 'TestFile1.pdf', modifiedDate: 'January 4, 2017', size: '67.1 KB' },
        { fileName: 'TestFile2.pdf', modifiedDate: 'January 5, 2017', size: '67.2 KB' },
      ]}
    />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it displays an empty drop area if no attachments are given.', () => {
  const component = renderer.create(
    <CommunicationDetailsTab />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
