import { USER_REDUCER_STATE } from '../../reducers/userReducer';
import getBasicUserData from '../getBasicUserData';

it('returns clientName from the user reducers state.', () => {
  const clientName = 'testClientName';
  const state = { [USER_REDUCER_STATE]: { clientName } };
  const selectedState = getBasicUserData(state);

  expect(selectedState.clientName).toEqual(clientName);
});

it('returns clientName from the user reducers state.', () => {
  const clientId = 'testClientId';
  const state = { [USER_REDUCER_STATE]: { clientId } };
  const selectedState = getBasicUserData(state);

  expect(selectedState.clientId).toEqual(clientId);
});

it('returns empty strings if the user state is not given', () => {
  const selectedState = getBasicUserData({});

  expect(selectedState.clientName).toEqual('');
  expect(selectedState.clientId).toEqual('');
});
