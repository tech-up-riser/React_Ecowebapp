import unregisterSideBarAction, { SIDEBAR_UNREGISTER } from '../unregisterSideBarAction';

it('returns an action with the SIDEBAR_UNREGISTER for the type.', () => {
  const action = unregisterSideBarAction();

  expect(action.type).toEqual(SIDEBAR_UNREGISTER);
});

it('returns an action with the given sidebar.', () => {
  const TEST_SIDEBAR = 'TEST_SIDEBAR';
  const action = unregisterSideBarAction(TEST_SIDEBAR);

  expect(action.sideBarId).toEqual(TEST_SIDEBAR);
});
