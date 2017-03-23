/* @flow */

/**
 * The action that will expand the side bar.
 */
export const SIDEBAR_EXPAND = 'SIDEBAR_EXPAND';
export default function expandSideBarAction(sideBarId: string): * {
  return { type: SIDEBAR_EXPAND, sideBarId };
}
