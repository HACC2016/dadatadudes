import { combineReducers } from 'redux';
import routes from './routes.js';
import formInputs from './Form/index.js';
// ... other reducers

export default combineReducers({
  routes,
  formInputs
});
