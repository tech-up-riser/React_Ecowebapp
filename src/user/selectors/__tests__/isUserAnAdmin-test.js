import { USER_REDUCER_STATE } from '../../reducers/userReducer';
import isUserAnAdmin from '../isUserAnAdmin';

it('returns true when the user is an admin', () => {
  const state = { [USER_REDUCER_STATE]: { isAdmin: true } };
  const isExpanded = isUserAnAdmin(state);

  expect(isExpanded).toEqual(true);
});

it('returns when the user is not an admin', () => {
  const state = { [USER_REDUCER_STATE]: { isAdmin: false } };
  const isExpanded = isUserAnAdmin(state);

  expect(isExpanded).toEqual(false);
});

it('returns false if the user state is not given', () => {
  const isExpanded = isUserAnAdmin({});

  expect(isExpanded).toEqual(false);
});
