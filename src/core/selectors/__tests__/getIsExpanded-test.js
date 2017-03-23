import { SIDEBAR_REDUCER_STATE } from '../../reducers/sideBarReducer';
import getIsExpanded from '../getIsExpanded';

it('adds default isExpanded / expandedWidth values when the current sidebar has not been registed', () => {
  const TEST_SIDEBAR = 'TEST_SIDEBAR';
  const sideBarState = getIsExpanded({ [SIDEBAR_REDUCER_STATE]: { } }, TEST_SIDEBAR);

  expect(sideBarState.isExpanded).toBe(false);
  expect(sideBarState.expandedWidth).toEqual('100%');
});

it('get the isExpanded / expandedWidth values from the state', () => {
  const TEST_SIDEBAR = 'TEST_SIDEBAR';
  const isExpanded = true;
  const width = 200;
  const state = { [TEST_SIDEBAR]: { isExpanded, expandedWidth: width } };
  const sideBarState = getIsExpanded({ [SIDEBAR_REDUCER_STATE]: state }, TEST_SIDEBAR);

  expect(sideBarState.isExpanded).toEqual(isExpanded);
  expect(sideBarState.expandedWidth).toEqual(width);
});

it('throws an error if the reducer is not in the state', () => {
  const callWithOutReducer = () => getIsExpanded({ }, '');

  expect(callWithOutReducer).toThrowErrorMatchingSnapshot();
});
