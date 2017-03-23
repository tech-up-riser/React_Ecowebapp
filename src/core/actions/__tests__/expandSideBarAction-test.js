import expandSideBarAction, { SIDEBAR_EXPAND } from '../expandSideBarAction';

it('returns an action with the SIDEBAR_EXPAND for the type.', () => {
  const action = expandSideBarAction();

  expect(action.type).toEqual(SIDEBAR_EXPAND);
});

it('returns an action with the given sidebar.', () => {
  const TEST_SIDEBAR = 'TEST_SIDEBAR';
  const action = expandSideBarAction(TEST_SIDEBAR);

  expect(action.sideBarId).toEqual(TEST_SIDEBAR);
});
