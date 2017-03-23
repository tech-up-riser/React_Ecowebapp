import React from 'react';
import renderer from 'react-test-renderer';

import UserMenu from '../UserMenu';

test('it displays the client name and id.', () => {
  const component = renderer.create(
    <UserMenu clientName="Client Name" clientId="123456" />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('it only displays the Admin dropdown if isAdmin is set.', () => {
  const noAdminComponent = renderer.create(
    <UserMenu />
  );
  const adminComponent = renderer.create(
    <UserMenu isAdmin />
  );

  const noAdminTree = noAdminComponent.toJSON();
  const adminTree = adminComponent.toJSON();

  expect(noAdminTree).toMatchSnapshot();
  expect(adminTree).toMatchSnapshot();
});
