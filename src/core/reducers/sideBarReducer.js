/* @flow */
import { SIDEBAR_COLLAPSE } from '../actions/collapseSideBarAction';
import { SIDEBAR_EXPAND } from '../actions/expandSideBarAction';
import { SIDEBAR_REGISTER } from '../actions/registerSideBarAction';
import { SIDEBAR_UNREGISTER } from '../actions/unregisterSideBarAction';

export type SideBarState = {
  expandedWidth: number | string,
  isExpanded: bool,
};

export type State = { [key: string]: SideBarState };

/**
 * A reducer to control weather or not a component is expaned or collapsed.
 */
export const SIDEBAR_REDUCER_STATE = 'SIDEBAR_REDUCER_STATE';
export default function sideBarReducer(state: State = { }, action: Object): State {
  switch(action.type) {
    case SIDEBAR_REGISTER:
      if(!action.sideBarId) {
        throw new Error('Side Bar must be given to unregister');
      }
      if(typeof action.expandedWidth !== 'number' && typeof action.expandedWidth !== 'string') {
        throw new Error('Side Bar expandedWidth must be number or string');
      }

      return {
        ...state,
        [action.sideBarId]: {
          expandedWidth: action.expandedWidth,
          isExpanded: action.defaultExpanded? true: false,
        },
      };
    case SIDEBAR_UNREGISTER:
      if(!action.sideBarId)         throw new Error('Side Bar must be given to unregister');

      return {
        ...state,
        [action.sideBarId]: undefined,
      };
    case SIDEBAR_EXPAND:
    case SIDEBAR_COLLAPSE:
      if(!action.sideBarId)         throw new Error('Side Bar must be given to update');
      if(!state[action.sideBarId])  throw new Error('Side Bar must be registered to update');

      return {
        ...state,
        [action.sideBarId]: {
          ...state[action.sideBarId],
          isExpanded: action.type === SIDEBAR_EXPAND? true: false,
        },
      };
    default:
      return state;
  }
}
