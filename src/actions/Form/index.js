export const actions = {
  ADD_FORM_FIELD: 'ADD_FORM_FIELD',
  LOAD_FORM_ANSWERS: 'LOAD_FORM_ANSWERS',
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
