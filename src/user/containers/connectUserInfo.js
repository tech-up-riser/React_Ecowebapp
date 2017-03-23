/* @flow */
import { connect } from 'react-redux';
import { compose, lifecycle, mapProps } from 'recompose';

import loginUserAction from '../actions/loginUserAction';
import getBasicUserData from '../selectors/getBasicUserData';
import isUserAnAdmin from '../selectors/isUserAnAdmin';

import type { Dispatch } from 'redux';

/**
 * Connect nessary data to the outer Page component.
 */
export default compose(
  connect(
    (state) => ({
      ...getBasicUserData(state),
      isAdmin: isUserAnAdmin(state),
    }),
    (dispatch: Dispatch<*>) => ({
      performLogin() {
        dispatch(loginUserAction());
      },
      performLogout() {
        console.log('NYI: Logout');
      },
    }),
  ),
  lifecycle({
    componentDidMount() {
      //NOTE, this loads static user data, needs to be changed with server data
      const { performLogin } = this.props;
      performLogin();
    },
  }),
  mapProps(({ performLogin, ...otherProps }) => otherProps),
);
