import { combineReducers } from 'redux';
import routes from './routes.js';
import form from './Form/index.js';
// ... other reducers

export default combineReducers({
  form,
  routes
});
