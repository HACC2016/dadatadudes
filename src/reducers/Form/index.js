import { actions } from '../../actions/Form/index.js';

/**
 * Dynamically adds form fields to the redux store.
 * This will be necessary when we want to submit dynamic fields
 * to the server.
 */
const addFormField = (state, data) => {
  console.log('state', state);
  const { field, value } = data;
  const newState = {
    ...state,
    [ field ]: value
  };
  /**
   * Helps with Logging
   * Instantites newState to a vriable
   * so we can log the item before changing state.
   */
  console.log('newState', newState);
  return newState;
};

const submitForm = (state, data) => {
  console.log('Form inputs: ', data);
  return state;
};

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
  case actions.ADD_FORM_FIELD:
    return addFormField(state, action.data);
  case actions.SUBMIT_FORM:
    return submitForm(state, action.data);
  default:
    return state;
  }
}

