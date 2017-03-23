/* @flow */
import { COMMUNICATION_REDUCER_STATE } from '../reducers/communicationsReducer';

import type { Communication } from '../reducers/communicationsReducer';

/**
 * Gets the selected communicaitons from the communicationsReducer's state.
 */
export default function getSelectedCommunication(state: Object): ?Communication {
  const communicationState = state[COMMUNICATION_REDUCER_STATE];
  if(!communicationState)     throw new Error(`Missing required reducer: ${COMMUNICATION_REDUCER_STATE}`);

  // Check if data has been loaded yet
  const { selectedCommunication, attachments } = communicationState;
  if(!selectedCommunication)  return { title: '', author: '', date: '' };
  if(!attachments)            return selectedCommunication;

  // Replace attachments ids for the attachments data
  const { attachments: attachmentIds, ...communicaitonData } = selectedCommunication;
  return {
    ...communicaitonData,
    attachments: attachmentIds? attachmentIds.map((attachmentId) => {
      for(let i=0; i<attachments.length; i++) {
        const currAttachment = attachments[i];

        if(currAttachment.id === attachmentId) return currAttachment;
      }
      throw new Error(`Invalid attachment id: ${attachmentId}`);
    }): undefined,
  };
}
