import collapseSideBarAction, { SIDEBAR_COLLAPSE } from '../collapseSideBarAction';

it('returns an action with the SIDEBAR_COLLAPSE for the type.', () => {
  const action = collapseSideBarAction();

  expect(action.type).toEqual(SIDEBAR_COLLAPSE);
});

it('returns an action with the given sidebar.', () => {
  const TEST_SIDEBAR = 'TEST_SIDEBAR';
  const action = collapseSideBarAction(TEST_SIDEBAR);

  expect(action.sideBarId).toEqual(TEST_SIDEBAR);
});
