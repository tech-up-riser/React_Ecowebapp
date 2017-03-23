/* @flow */
import { SIDEBAR_REDUCER_STATE } from '../reducers/sideBarReducer';

import type { SideBarState } from '../reducers/sideBarReducer';

/**
 * Selects the isExpanded prop from the reducer state,
 */
export default function getIsExpanded(state: Object, sideBarId: string): SideBarState {
  const sidebarStates = state[SIDEBAR_REDUCER_STATE];
  if(!sidebarStates) throw new Error(`Missing required reducer: ${SIDEBAR_REDUCER_STATE}`);

  if(sidebarStates[sideBarId])  return sidebarStates[sideBarId];
  else                          return { isExpanded: false, expandedWidth: '100%' };
}
