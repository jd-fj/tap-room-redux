import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import editingBoolReducer from './editing-bool-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisible: formVisibleReducer,
  masterKegList: kegListReducer,
  editing: editingBoolReducer
});

export default rootReducer;