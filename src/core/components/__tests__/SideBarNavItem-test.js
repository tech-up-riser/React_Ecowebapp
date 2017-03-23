import React from 'react';
import renderer from 'react-test-renderer';

import SideBarNavItem from '../SideBarNavItem';

test('when expanded, it displays its label next to its text.', () => {
  const component = renderer.create(
    <SideBarNavItem isExpanded label="Test Label" icon={<i className="test-icon" />} />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('when not expanded, it just displays an icon and puts the label in a popup.', () => {
  const component = renderer.create(
    <SideBarNavItem label="Test Label" icon={<i className="test-icon" />} />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
