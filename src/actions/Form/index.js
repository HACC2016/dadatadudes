export const actions = {
  ADD_FORM_FIELD: 'ADD_FORM_FIELD',
  LOAD_FORM_ANSWERS: 'LOAD_FORM_ANSWERS',
  LOAD_SECTION: 'LOAD_SECTION',
  SET_CURRENT_INDEX: 'SET_CURRENT_INDEX',
  SUBMIT_FORM: 'SUBMIT_FORM'
};

export const addFormField = (data) => ({
  type: actions.ADD_FORM_FIELD,
  data
});

export const submitForm = (data) => ({
  type: actions.SUBMIT_FORM,
  data
});

export const loadFormAnswers = (data) => ({
  type: actions.loadAnswerOptions,
  data
});

export const setCurrentIndex = (data) => ({
  type: actions.SET_CURRENT_INDEX,
  data
});

export const loadSection = (data) => ({
  type: actions.LOAD_SECTION,
  data
});
