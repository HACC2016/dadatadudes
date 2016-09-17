import { combineReducers } from 'redux';
import routes from './routes.js';
import formInputs from './Form/index.js';
import answerOptions from './AnswerOptions/index.js';
// ... other reducers

export default combineReducers({
  formInputs,
  answerOptions,
  routes
});
