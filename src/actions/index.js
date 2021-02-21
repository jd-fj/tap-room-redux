import * as c from './ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

export const addKeg = (keg) => {
  const {name, brewery, abv, description, price, pints, id } = keg;
  return {
    type: c.ADD_KEG,
    name,
    brewery,
    abv,
    description,
    price,
    pints,
    id
  }
}

export const sellPint = (keg) => {
  const { pints } = keg;
  return {
    type: c.SELL_PINT,
    pints: keg.pints - 1
  }
}