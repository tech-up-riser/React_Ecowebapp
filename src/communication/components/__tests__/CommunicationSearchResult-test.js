import React from 'react';
import renderer from 'react-test-renderer';

import CommunicationSearchResult from '../CommunicationSearchResult';

test('it displays the given title, author and date.', () => {
  const component = renderer.create(
    <CommunicationSearchResult title="Test title" author="Test author" date="01/02/2016" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it dosen\'t display the icon if no status is given.', () => {
  const component = renderer.create(
    <CommunicationSearchResult />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it display the green icon if status is "active" and grey if "inactive".', () => {
  const componentActive = renderer.create(
    <CommunicationSearchResult status="active" />
  );
  const componentInactive = renderer.create(
    <CommunicationSearchResult status="inactive" />
  );
  const treeActive = componentActive.toJSON();
  const treeInactive = componentInactive.toJSON();

  expect(treeInactive).toMatchSnapshot();
});
