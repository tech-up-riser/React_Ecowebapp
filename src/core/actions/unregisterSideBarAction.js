/* @flow */

/**
 * Create an action that will register a new side bar to the sideBarReducer.
 */
export const SIDEBAR_UNREGISTER = 'SIDEBAR_UNREGISTER';
export default function unregisterSideBarAction(sideBarId: string): * {
  return {
    type: SIDEBAR_UNREGISTER,
    sideBarId,
  };
}
