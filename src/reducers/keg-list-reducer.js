export default (state = {}, action) => {
  const { name, brewery, abv, description, price, pints, id} = action;
  switch(action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id] : {
          name,
          brewery,
          abv,
          description,
          price,
          pints,
          id
        }
      });
      // case 'DELETE_KEG':
      //   let newState = {...state};
      //   delete newState[id];
      //   return newState;
      default:
        return state;
  }
};