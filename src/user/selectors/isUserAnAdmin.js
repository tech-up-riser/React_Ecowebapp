/* @flow */
import { USER_REDUCER_STATE } from '../reducers/userReducer';

export default function isUserAnAdmin(state: Object): bool {
  const user = state[USER_REDUCER_STATE];
  if(!user) return false;

  return user.isAdmin;
}
