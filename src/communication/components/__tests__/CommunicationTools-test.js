import React from 'react';
import renderer from 'react-test-renderer';

import CommunicationTools from '../CommunicationTools';

test('it displays the given tab as selected.', () => {
  const componentDetails = renderer.create(
    <CommunicationTools tab="details" />
  );
  const componentComments = renderer.create(
    <CommunicationTools tab="comments" />
  );
  const componentActivity = renderer.create(
    <CommunicationTools tab="activity" />
  );
  const treeDetails = componentDetails.toJSON();
  const treeComments = componentComments.toJSON();
  const treeActivity = componentActivity.toJSON();

  expect(treeDetails).toMatchSnapshot();
  expect(treeComments).toMatchSnapshot();
  expect(treeActivity).toMatchSnapshot();
});
