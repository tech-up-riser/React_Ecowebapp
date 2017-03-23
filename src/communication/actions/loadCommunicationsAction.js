/* @flow */

/**
 * Loads the communications.
 *
 * NOTE:  This is ONLY for the demo. Load needs to be a saga once conecting to the server.
 *        (this is why there are no tests)
 */
export const COMMUNICATION_REDUCER_LOAD = 'COMMUNICATION_REDUCER_LOAD';
export default function loadCommunicationsAction(): * {
  return { type: COMMUNICATION_REDUCER_LOAD };
}
