export const actions = {
  SUBMIT_FORM: 'SUBMIT_FORM'
};

export const submitForm = (data) => ({
  type: actions.SUBMIT_FORM,
  data
});
