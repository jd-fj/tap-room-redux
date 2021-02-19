import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

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





});