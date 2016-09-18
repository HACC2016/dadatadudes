import { actions } from '../../actions/Form/index.js';

/**
 * Dynamically adds form fields to the redux store.
 * This will be necessary when we want to submit dynamic fields
 * to the server.
 */
const addFormField = (state, { field, value }) => {
  const newState = {
    ...state,
    [ field ]: value
  };
  return newState;
};

const loadFormAnswers = (state, { field, value }) => {
  return {
    ...state,
    [ field ]: value
  };
};

const submitForm = (state, data) => {
  console.log('Form inputs: ', data);
  return state;
};

export default function reducer(state = {}, { data, type }) {
  switch (type) {
  case actions.ADD_FORM_FIELD:
    return addFormField(state, data);
  case actions.LOAD_FORM_ANSWERS:
    return loadFormAnswers(state, data);
  case actions.SUBMIT_FORM:
    return submitForm(state, data);
  default:
    return state;
  }
}

