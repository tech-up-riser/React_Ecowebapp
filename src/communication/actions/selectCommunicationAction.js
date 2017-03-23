/* @flow */

/**
 * Selects a communications.
 *
 * NOTE:  This is ONLY for the demo. Select will need to load extra data, so needs to be a saga once conecting
 *        to the server.
 *        (this is why there are no tests)
 */
export const COMMUNICATION_REDUCER_SELECT = 'COMMUNICATION_REDUCER_SELECT';
export default function selectCommunicationAction(index: number): * {
  return { type: COMMUNICATION_REDUCER_SELECT, index };
}
