import * as c from './../actions/ActionTypes'; 

export default (state = {}, action) => {
  const { name, brewery, abv, description, price, pints, id} = action;
  switch(action.type) {
    case c.ADD_KEG:
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
      case c.DELETE_KEG:
        let newState = {...state};
        delete newState[id];
        return newState;
      case c.SELL_PINT:
        let sellPint = {...state[id].pints - 1};
        return sellPint;
      default:
        return state;
  }
};

//communicating intended actions to the store, concerning the keg list