import * as actions from './../../actions';

describe('tap room actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  it('addKeg should create TOGGLE_FORM action',  () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({
      name: 'Goose Neck Pilsner',
      brewery: 'Pillsbury Brewery',
      abv: 6.7,
      description: 'has a pill-y, light flavor, great for the whole family',
      price: 10,
      pints: 1,
      id: 1
    })).toEqual({
      type: 'ADD_KEG',
      name: 'Goose Neck Pilsner',
      brewery: 'Pillsbury Brewery',
      abv: 6.7,
      description: 'has a pill-y, light flavor, great for the whole family',
      price: 10,
      pints: 1,
      id: "0"
    });
  });
});