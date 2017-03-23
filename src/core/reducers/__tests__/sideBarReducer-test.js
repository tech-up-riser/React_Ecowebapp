import collapseSideBarAction from '../../actions/collapseSideBarAction';
import expandSideBarAction from '../../actions/expandSideBarAction';
import registerSideBarAction from '../../actions/registerSideBarAction';
import unregisterSideBarAction from '../../actions/unregisterSideBarAction';
import sideBarReducer from '../sideBarReducer';

it('has no registered side bars in its inital state', () => {
  const initalState = sideBarReducer(undefined, {});

  expect(Object.keys(initalState).length).toEqual(0);
});

it('can register a new side bar with the given name, width (in its collapsed state) and default expanded state', () => {
  const TEST_SIDEBAR = 'TEST_SIDEBAR';
  const width = 200;
  const defaultExpanded = true;
  const updatedState = sideBarReducer({}, registerSideBarAction(TEST_SIDEBAR, width, defaultExpanded))

  expect(updatedState[TEST_SIDEBAR]).toBeDefined();

  const currSideBarState = updatedState[TEST_SIDEBAR];
  expect(currSideBarState.expandedWidth).toEqual(width);
  expect(currSideBarState.isExpanded).toEqual(defaultExpanded);
});

it('can unregister a previously registered side bar', () => {
  const TEST_SIDEBAR = 'TEST_SIDEBAR';
  const updatedState = sideBarReducer({}, unregisterSideBarAction(TEST_SIDEBAR))

  expect(updatedState[TEST_SIDEBAR]).toBeUndefined();
});

it('will throw an error when trying to unregister an unregistered side bar', () => {
  const TEST_SIDEBAR = 'TEST_SIDEBAR';
  const updatedState = sideBarReducer({}, unregisterSideBarAction(TEST_SIDEBAR))

  expect(updatedState[TEST_SIDEBAR]).toBeUndefined();
});

it('can expaned a registed side bar', () => {
  const TEST_SIDEBAR = 'TEST_SIDEBAR';
  const updatedState = sideBarReducer(
    { [TEST_SIDEBAR]: { isExpanded: false } },
    expandSideBarAction(TEST_SIDEBAR),
  );

  expect(updatedState[TEST_SIDEBAR].isExpanded).toBe(true);
});

it('will throw an error when trying to expaned a unregisted side bar', () => {
  const updatedStateFn = () => sideBarReducer({ }, expandSideBarAction('TEST_SIDEBAR'));

  expect(updatedStateFn).toThrowErrorMatchingSnapshot();
});

it('can collapse a registed side bar', () => {
  const TEST_SIDEBAR = 'TEST_SIDEBAR';
  const updatedState = sideBarReducer(
    { [TEST_SIDEBAR]: { isExpanded: false } },
    collapseSideBarAction(TEST_SIDEBAR),
  );

  expect(updatedState[TEST_SIDEBAR].isExpanded).toBe(false);
});

it('will throw an error when trying to collapse a unregisted side bar', () => {
  const updatedStateFn = () => sideBarReducer({ }, collapseSideBarAction('TEST_SIDEBAR'));

  expect(updatedStateFn).toThrowErrorMatchingSnapshot();
});
