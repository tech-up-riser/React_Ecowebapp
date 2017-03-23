import React from 'react';
import renderer from 'react-test-renderer';

import UserMenuDropdown from '../UserMenuDropdown';

test('it displays the given icon.', () => {
  const component = renderer.create(
    <UserMenuDropdown icon={<div>Test Icon</div>} />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

//NOTE, unable to perform this test because semantic-ui-react will not allow Popup to start open (???)
test.skip('it only displays the dropdown if isOpen is set.', () => {
  const closedDropdownComponent = renderer.create(
    <UserMenuDropdown>
      THIS SHOULD NOT BE DISPLAYED
    </UserMenuDropdown>
  );
  const openDropdownComponent = renderer.create(
    <UserMenuDropdown open>
      This should be displayed.
    </UserMenuDropdown>
  );

  const closedDropdownTree = closedDropdownComponent.toJSON();
  const openDropdownTree = openDropdownComponent.toJSON();

  expect(closedDropdownTree).toMatchSnapshot();
  expect(openDropdownTree).toMatchSnapshot();
});
