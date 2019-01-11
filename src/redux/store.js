import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import reducers from './reducers'
const store = createStore(
  combineReducers({
    ...reducers,
    form: formReducer
  })
);
export default store