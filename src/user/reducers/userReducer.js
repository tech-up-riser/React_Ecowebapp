/* @flow */
import { USER_REDUCER_LOGIN } from '../actions/loginUserAction';

type State = {
  clientName: ?string,
  clientId: ?string,
  isAdmin: bool,
};

const initialState = {
  clientName: null,
  clientId: null,
  isAdmin: false,
};

/**
 * A reducer to keep track of the data for the logged in user.
 */
export const USER_REDUCER_STATE = 'USER_REDUCER_STATE';
export default function userReducer(state: State = initialState, action: *): State {
  switch (action.type) {
    case USER_REDUCER_LOGIN:
      //TODO, replace hard-coded data with data from the api
      return {
        clientName: 'Client Name',
        clientId:'123456',
        isAdmin: true,
      };
    default:
      return state;
  }
}
