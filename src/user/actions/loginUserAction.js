/* @flow */

/**
 * Logs in the user.
 *
 * NOTE:  This is ONLY for the demo. Login needs to be a saga once conecting to the server.
 *        (this is why there are no tests)
 */
export const USER_REDUCER_LOGIN = 'USER_REDUCER_LOGIN';
export default function loginUserAction() {
  return { type: USER_REDUCER_LOGIN };
}
