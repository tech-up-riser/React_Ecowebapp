/* @flow */

/**
 * Create an action that will register a new side bar to the sideBarReducer.
 */
export const SIDEBAR_REGISTER = 'SIDEBAR_REGISTER';
export default function registerSideBarAction(
  sideBarId: string,
  initialExpandedWidth: number | string,
  defaultExpanded?: bool
): * {
  return {
    type: SIDEBAR_REGISTER,
    sideBarId,
    expandedWidth: initialExpandedWidth,
    defaultExpanded,
  };
}
