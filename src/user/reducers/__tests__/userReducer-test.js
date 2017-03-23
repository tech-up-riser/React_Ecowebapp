import userReducer from '../userReducer';

it('has an empty clientName in its inital state', () => {
  const initalState = userReducer(undefined, {});

  expect(initalState.clientName).toBeDefined();
});

it('has an empty clientId in its inital state', () => {
  const initalState = userReducer(undefined, {});

  expect(initalState.clientId).toBeDefined();
});

it('is not an admin in its inital state', () => {
  const initalState = userReducer(undefined, {});

  expect(initalState.isAdmin).toEqual(false);
});

//NOTE, the login action is not testing becuse it should be replaced by multiple actions called by a saga
