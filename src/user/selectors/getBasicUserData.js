/* @flow */
import { USER_REDUCER_STATE } from '../reducers/userReducer';

type BasicUserData = {
  clientName: string,
  clientId: string,
};

export default function getBasicUserData(state: Object): BasicUserData {
  const user = state[USER_REDUCER_STATE];
  if(!user) return { clientName: '', clientId: '' };

  const { clientName, clientId } = user;
  return { clientName, clientId };
}
