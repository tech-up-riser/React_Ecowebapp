/* @flow */
import UserMenu from './components/UserMenu';
import connectUserInfo from './containers/connectUserInfo';

import userReducer, { USER_REDUCER_STATE } from './reducers/userReducer';

const ConnectedUserMenu = connectUserInfo(UserMenu);

const reducers = {
  [USER_REDUCER_STATE]: userReducer,
};

export {
  ConnectedUserMenu as UserMenu,
  reducers,
};
