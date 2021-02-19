import * as actions from './../../actions';

describe('tap room actions', () => {
  expect(actions.deleteKeg(1)).toEqual({
    types: 'DELETE_KEG',
    id: 1
  });
});