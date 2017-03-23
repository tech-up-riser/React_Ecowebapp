import React from 'react';
import renderer from 'react-test-renderer';

import SideBarNavHeader from '../SideBarNavHeader';

test('when expanded, it displays it the close icon.', () => {
  const component = renderer.create(
    <SideBarNavHeader isExpanded />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('when not expanded, it displays it the open icon.', () => {
  const component = renderer.create(
    <SideBarNavHeader />
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('when clicked, if expanded, it calls the collapse function.', () => {
  const collapseFn = jest.fn();
  const component = renderer.create(
    <SideBarNavHeader isExpanded collapseSideBar={collapseFn} />
  );
  const tree = component.toJSON();
  const [ icon ] = tree.children;
  const { onClick } = icon.props;

  onClick();
  expect(collapseFn).toHaveBeenCalledTimes(1);
});

test('when clicked, if not expanded, it calls the expand function.', () => {
  const expandFn = jest.fn();
  const component = renderer.create(
    <SideBarNavHeader expandSideBar={expandFn} />
  );
  const tree = component.toJSON();
  const [ icon ] = tree.children;
  const { onClick } = icon.props;

  onClick();
  expect(expandFn).toHaveBeenCalledTimes(1);
});
