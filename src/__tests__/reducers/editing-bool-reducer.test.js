import editingBoolReducer from '../../reducers/editing-bool-reducer';

describe("editingBoolReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(editingBoolReducer(false, { type: null })).toEqual(false);
  });

  // test('Should toggle form editing state to true', () => {
  //   expect(formVisibleReducer(false, { type: 'TOGGLE_FORM' })).toEqual(true);
  // });
});