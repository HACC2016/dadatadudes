import { actions } from '../../actions/Form/index.js';
import { Map } from 'immutable';
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

const loadSection = (state, data) => {
  const {
    allSections,
    answerOptions,
    currentIndex,
    currentRoute
  } = data;
  return state.merge({
    allSections,
    answerOptions,
    currentIndex,
    currentRoute
  });
};

const setCurrentIndex = (state, data) => {
  return state.merge(Map({
    currentIndex: data
  }));
};

const submitForm = (state, data) => {
  console.log('Form inputs: ', data);
  return state;
};

export default function reducer(state = Map(), { data, type }) {
  switch (type) {
  case actions.ADD_FORM_FIELD:
    return addFormField(state, data);
  case actions.LOAD_FORM_ANSWERS:
    return loadFormAnswers(state, data);
  case actions.LOAD_SECTION:
    return loadSection(state, data);
  case actions.SET_CURRENT_INDEX:
    return setCurrentIndex(state, data);
  case actions.SUBMIT_FORM:
    return submitForm(state, data);
  default:
    return state;
  }
}

