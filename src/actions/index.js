export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const {name, brewery, abv, description, price, pints, id } = keg;
  return {
    type: 'ADD_KEG',
    name,
    brewery,
    abv,
    description,
    price,
    pints,
    id
  }
}