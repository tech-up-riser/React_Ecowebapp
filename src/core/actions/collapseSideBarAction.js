/* @flow */

/**
 * The action that collapse a side bar.
 */
export const SIDEBAR_COLLAPSE = 'SIDEBAR_COLLAPSE';
export default function collapseSideBarAction(sideBarId: string): * {
  return { type: SIDEBAR_COLLAPSE, sideBarId };
}
