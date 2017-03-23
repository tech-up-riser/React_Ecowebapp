import { COMMUNICATION_REDUCER_STATE } from '../../reducers/communicationsReducer';
import getCommunications from '../getCommunications';

it('returns communications array from the communications reducers state.', () => {
  const communications = [ 0, 1, 2, 3 ];
  const state = { [COMMUNICATION_REDUCER_STATE]: { communications } };
  const selectedCommunications = getCommunications(state);

  expect(selectedCommunications).toEqual(communications);
});

it('returns an empty array if the reducer state is not given', () => {
  const selectedCommunications = getCommunications({});

  expect(selectedCommunications).toEqual([]);
});
