import { createSelector } from 'reselect';

const answerOptionsSelector = (state) => {
  return state.form.get('answerOptions');
};

const sectionQuestionsSelector = (state) => {
  if (state.form.has('questions')) {
    return state.form.get('questions');
  }
  return null;
};

export const currentQuestionsSelector = createSelector(
  [sectionQuestionsSelector, answerOptionsSelector],
  (currentSection, answerOptions) => {
    if (!currentSection) {
      return null;
    }
    return currentSection.map((question) => {
      if (!question.has('answers')) {
        return question;
      }
      return question.set('answers', answerOptions.get(question.get('answers')));
    });
  }
);

export const formInputsSelector = (state) => {
  return state.form.get('formFields');
};

export const basicFieldsSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    const {
      firstName,
      lastName,
      nickname,
      ssn,
      gender,
      age,
      ethnicity,
      languages,
      district
    } = formInputs.toJS();
    return {
      firstName,
      lastName,
      nickname,
      ssn,
      gender,
      age,
      ethnicity,
      languages,
      district
    };
  }
);

export const refuseFieldsSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    // const {
    //   // ...
    // } = formInputs.toJS();
    return {
      // ...
    };
  }
);

export const pointInTimeFieldsSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    // const {
    //   // ...
    // } = formInputs.toJS();
    return {
      // ...
    };
  }
);

export const vispdatFollowUpSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    // const {
    //   // ...
    // } = formInputs.toJS();
    return {
      // ...
    };
  }
);

export const vispdatHousingHistorySelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    // const {
    //   // ...
    // } = formInputs.toJS();
    return {
      // ...
    };
  }
);

export const vispdatRiskSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    // const {
    //   // ...
    // } = formInputs.toJS();
    return {
      // ...
    };
  }
);

export const vispdatSocializationSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    // const {
    //   // ...
    // } = formInputs.toJS();
    return {
      // ...
    };
  }
);

export const vispdatWellnessSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    // const {
    //   // ...
    // } = formInputs.toJS();
    return {
      // ...
    };
  }
);

