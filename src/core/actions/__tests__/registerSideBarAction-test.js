import registerSideBarAction, { SIDEBAR_REGISTER } from '../registerSideBarAction';

it('returns an action with the SIDEBAR_REGISTER for the type.', () => {
  const action = registerSideBarAction();

  expect(action.type).toEqual(SIDEBAR_REGISTER);
});

it('returns an action with the given sidebar.', () => {
  const TEST_SIDEBAR = 'TEST_SIDEBAR';
  const action = registerSideBarAction(TEST_SIDEBAR);

  expect(action.sideBarId).toEqual(TEST_SIDEBAR);
});

it('returns an action with the given width.', () => {
  const initialExpandedWidth = 200;
  const action = registerSideBarAction('TEST_SIDEBAR', initialExpandedWidth);

  expect(action.expandedWidth).toEqual(initialExpandedWidth);
});

it('returns an action with that will show the sidebar expaned by default.', () => {
  const defaultExpanded = true;
  const action = registerSideBarAction('TEST_SIDEBAR', 200, defaultExpanded);

  expect(action.defaultExpanded).toEqual(defaultExpanded);
});
