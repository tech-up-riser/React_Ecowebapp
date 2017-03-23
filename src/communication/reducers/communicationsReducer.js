/* @flow */
import { COMMUNICATION_REDUCER_LOAD } from '../actions/loadCommunicationsAction';
import { COMMUNICATION_REDUCER_SELECT } from '../actions/selectCommunicationAction';

export type Communication = {
  title: string,
  author: string,
  date: string,
  status?: 'active' | 'in-active',
  attachments?: Array<{
    id: number,
    fileName: string,
    size: string,
  }>,
  comments?: Array<{
    author: string,
    date: string,
    status?: 'active' | 'in-active',
    actionsTakens: Array<string>,
    linkedLogbooks: Array<string>,
    attachments?: Array<number>,
  }>,
  activity?: Array<{
    author: string,
    label: string,
    date: string,
  }>,
};

type State = {
  communications: Array<Communication>,
  selectedCommunication: ?Communication,
};

const initialState = {
  communications: [],
  selectedCommunication: null,
};

/**
 * The reducer that contains all the communication data for the site.
 */
export const COMMUNICATION_REDUCER_STATE = 'COMMUNICATION_REDUCER_STATE';
export default function communicationsReducer(state: State = initialState, action: Object) {
  switch (action.type) {
    case COMMUNICATION_REDUCER_LOAD:
      //TODO, replace hard-coded data with data from the api
      return {
        ...state,
        communications: [
          { title: 'Testing departments acess', author: 'User 0', date: '14/Dec/2016 00:21 PM MST', status: 'active' },
          { title: 'Test communication 1', author: 'User 1', date: '14/Dec/2016 01:21 PM MST' },
          { title: 'Test communication 2', author: 'User 2', date: '14/Dec/2016 01:21 PM MST', status: 'in-active' },
        ],
      };
    case COMMUNICATION_REDUCER_SELECT:
      //TODO, replace hard-coded data with data from the api
      return {
        ...state,
        selectedCommunication: {
          ...state.communications[action.index],
          attachments: [
            { id: 0, fileName: 'testAttachment0.pdf', modifiedDate: 'January 3, 2017', size: '67.0kb' },
            { id: 1, fileName: 'testAttachment1.pdf', modifiedDate: 'January 4, 2016', size: '67.1kb' },
            { id: 2, fileName: 'testAttachment2.pdf', modifiedDate: 'January 7, 2017', size: '67.2kb' },
          ],
          comments: [
            {
              author: 'Richard Simms',
              date: 'Today 5:45 am',
              body: 'Test comment 0',
              status: 'active',
              actionsTakens: ['Spoke to Resident', 'Jetted Sweer Line'],
              linkedLogbooks: [ 'logbook A' ],
            },
            {
              author: 'Randy S.Beard',
              date: '1/1/2016',
              body: 'Test comment 1',
              linkedLogbooks: [ 'logbook A', 'logbook B' ],
              attachments: [ 0 ],
            },
            {
              author: 'User 2',
              date: '2/2/2016',
              body: 'Test comment 2',
            },
            {
              author: 'User 3',
              date: '3/3/2016',
              body: 'Test comment 3',
              status: 'in-active',
              attachments: [ 1, 2 ],
            },
          ],
          activity: [
            { author: 'User 0', date: '14/Dec/2016 00:21 PM MST', label: 'commented on this post' },
            { author: 'User 1', date: '14/Dec/2016 01:21 PM MST', label: 'added two attachments' },
            { author: 'User 2', date: '14/Dec/2016 02:21 PM MST', label: 'change status to active' },
          ],
        },
      };
    default:
      return state;
  }
}
