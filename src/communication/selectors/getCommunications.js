/* @flow */
import { COMMUNICATION_REDUCER_STATE } from '../reducers/communicationsReducer';

import type Communication from '../reducers/communicationsReducer';

/**
 * Gets the communicaitons from the communicationsReducer's state.
 */
export default function getCommunications(state: Object): Array<Communication> {
  const communicationState = state[COMMUNICATION_REDUCER_STATE];
  if(!communicationState) return [];

  return communicationState.communications;
}
