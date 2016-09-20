import { combineReducers } from 'redux';
import routes from './routes';
import form from './Form';
// ... other reducers

export default combineReducers({
  form,
  routes
});
