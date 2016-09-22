import { actions } from '../../actions/Form';
import { Map } from 'immutable';
/**
 * Dynamically adds form fields to the redux store.
 * This will be necessary when we want to submit dynamic fields
 * to the server.
 */
const addFormField = (state, { field, value }) => {
  if (state.has('formFields')) {
    const formField = state.get('formFields').merge(Map({
      [ field ]: value
    }));
    return state.update('formFields', () => {
      return formField;
    });
  }
  return state.set('formFields', Map({ [ field ]: value }));
};

const loadSection = (state, { allSections, answerOptions, currentIndex, currentRoute }) => {
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
  console.log('data', data.toJS());
  return state;
};

export default function reducer(state = Map(), { data, type }) {
  switch (type) {
  case actions.ADD_FORM_FIELD:
    return addFormField(state, data);
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

