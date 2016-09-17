export const actions = {
  LOAD_ANSWER_OPTIONS: 'LOAD_ANSWER_OPTIONS'
};

export const loadAnswerOptions = (data) => ({
  type: actions.LOAD_ANSWER_OPTIONS,
  data
});
