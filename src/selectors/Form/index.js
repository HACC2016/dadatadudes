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

export const VispdatBasicScore = createSelector(
  [formInputsSelector],
  (formInputs) => {
    // ... logic for basic scores
    /**
     * Score one if person is over 60
     */
  }
);

export const VispdatHousingScore = createSelector(
  [formInputsSelector],
  (formInputs) => {
    // ... logic for housing scores.
    /**
     * Score one if anything other than “shelter, transitional housing, or safe haven”
     * If person has experienced 1 or more consecutive years of homelessness, and / or 4+ episodes of homelessness, then score 1
     */
  }
);

export const VispdatRiskScore = createSelector(
  [formInputsSelector],
  (formInputs) => {
    // ... logic for risk scores.
    /**
     * Score one if risk of harm is answered "yes"
     * Score one if legal issues were answered "yes"
     * Score one if risk or exploitation were answered "yes"
     */
  }
);

export const VispdatSocializationScore = createSelector(
  [formInputsSelector],
  (formInputs) => {
    /*
     * Score one if money management were answered "yes"
     * Score one if meaningful daily activity were answered "no"
     * Score one if self-care were answered "no"
     * Score one if social relationship were answered "yes"
     */
    // ... logic for socializiation scores.
  }
);

export const VispdatWellnessScore = createSelector(
  [formInputsSelector],
  (formInputs) => {
    // ... logic for wellness scores.
    /**
     * Score one if FEMALE & currently pregnent were answered "yes"
     * Score one if substance use were answered "yes"
     */
  }
);

export const totalVispdatRiskScoreSelector = createSelector(
  [
    VispdatBasicScore,
    VispdatHousingScore,
    VispdatRiskScore,
    VispdatSocializationScore,
    VispdatWellnessScore
  ],
  (basic = 0, housing = 0, risk = 0, socializiation = 0, wellness = 0) => {
    console.log('(basic + housing + risk + socializiation + wellness)', (basic + housing + risk + socializiation + wellness));
    return (basic + housing + risk + socializiation + wellness);
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

