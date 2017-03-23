import { COMMUNICATION_REDUCER_STATE } from '../../reducers/communicationsReducer';
import getSelectedCommunication from '../getSelectedCommunication';

it('returns the selected communication from the communications reducers state.', () => {
  const communication = { title: 'Test communication' };
  const state = { [COMMUNICATION_REDUCER_STATE]: { selectedCommunication: communication } };
  const selectedCommunication = getSelectedCommunication(state);

  expect(selectedCommunication).toEqual(communication);
});

it('returns a empty strings for all required props, if the no communication has been selected', () => {
  const state = { [COMMUNICATION_REDUCER_STATE]: { selectedCommunication: null } };
  const selectedCommunication = getSelectedCommunication(state);

  expect(selectedCommunication.title).toEqual('');
  expect(selectedCommunication.author).toEqual('');
  expect(selectedCommunication.date).toEqual('');
});

it('throws an error if the reducer state is not given', () => {
  const selectedCommunicationFn = () => getSelectedCommunication({});

  expect(selectedCommunicationFn).toThrowErrorMatchingSnapshot();
});
