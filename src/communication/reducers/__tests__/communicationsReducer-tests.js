import communicationsReducer from '../communicationsReducer';

it('has an empty array of communications in its inital state', () => {
  const initalState = communicationsReducer(undefined, {});

  expect(initalState.communications).toEqual([]);
});

it('has an empty selectedCommunication in its inital state', () => {
  const initalState = communicationsReducer(undefined, {});

  expect(initalState.selectedCommunication).toBeDefined();
});

//NOTE, the actions are not testing becuse they should be replaced by multiple other actions called by a saga
