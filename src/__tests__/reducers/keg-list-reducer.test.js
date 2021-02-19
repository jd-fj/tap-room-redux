import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  const currentState = {
      1: {name: 'Goose Neck Pilsner',
      brewery: 'Pillsbury Brewery',
      abv: 6.7,
      description: 'has a pill-y, light flavor, great for the whole family',
      price: 10,
      pints: 1,
      id: 1 },
      2: {name: 'Chucks Brown Ale',
      brewery: 'Hilltop',
      abv: 8,
      description: 'Chunky, dark, malty flaves',
      price: 15,
      pints: 127,
      id: 2 }
    }

  let action;
  const kegData = {
    name: 'Goose Neck Pilsner',
    brewery: 'Pillsbury Brewery',
    abv: 6.7,
    description: 'has a pill-y, light flavor, great for the whole family',
    price: 10,
    pints: 1,
    id: "0"
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brewery, abv, description, price, pints, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name,
      brewery,
      abv,
      description,
      price,
      pints,
      id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name,
        brewery,
        abv,
        description,
        price,
        pints,
        id
      }
    })
  })

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {name: 'Chucks Brown Ale',
      brewery: 'Hilltop',
      abv: 8,
      description: 'Chunky, dark, malty flaves',
      price: 15,
      pints: 127,
      id: 2 }
    });
  });




});