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
  if (!state.form.has('formFields')) {
    return {};
  }
  return state.form.get('formFields').toJS();
};

// Max amount of possible points: 1;
export const VispdatBasicScore = createSelector(
  [formInputsSelector],
  (formInputs) => {
    const { age } = formInputs;
    if (age > 60) {
      return 1;
    }
    return 0;
  }
);

// Max amount of possible points: 2;
export const VispdatHousingScore = createSelector(
  [formInputsSelector],
  (formInputs) => {
    const validSleepingFields = ['refused', 'outdoors', 'other'];
    const validHomelessDateFields = ['oneYearOrLonger', 'fourOrMoreTimes'];
    const {
      sleepsMostFrequentlyAt,
      timePassedSincePermanentHousing,
      timesHomelessInPastThreeYears
    } = formInputs;
    let score = 0;
    if (validSleepingFields.indexOf(sleepsMostFrequentlyAt) > -1) {
      score = score + 1;
    }
    if (
        validHomelessDateFields.indexOf(timePassedSincePermanentHousing) > -1 ||
        validHomelessDateFields.indexOf(timesHomelessInPastThreeYears) > -1
      ) {
      score = score + 1;
    }
    return score;
  }
);

// Max amount of possible points: 2;
export const VispdatRiskScore = createSelector(
  [formInputsSelector],
  (formInputs) => {
    const {
      timesReceivedErCareInSixMonths,
      timesAmbulanceRidesInSixMonths,
      timesHospitalizedAsInpatientInSixMonths,
      timesUsedCrisisServiceInSixMonths,
      timesPoliceTalksInSixMonths,
      timesJailedInSixMonths
    } = formInputs;
    let score = 0;
    if (timesReceivedErCareInSixMonths !== 'none' || timesReceivedErCareInSixMonths !== 'other') {
      score = 0.25;
    }
    if (timesReceivedErCareInSixMonths !== 'none' || timesReceivedErCareInSixMonths !== 'other') {
      score = 0.25;
    }
    if (timesReceivedErCareInSixMonths !== 'none' || timesReceivedErCareInSixMonths !== 'other') {
      score = 0.25;
    }
    if (timesReceivedErCareInSixMonths !== 'none' || timesReceivedErCareInSixMonths !== 'other') {
      score = 0.25;
    }
    if (timesReceivedErCareInSixMonths !== 'none' || timesReceivedErCareInSixMonths !== 'other') {
      score = 0.25;
    }
    if (timesReceivedErCareInSixMonths !== 'none' || timesReceivedErCareInSixMonths !== 'other') {
      score = 0.25;
    }
    // ... logic for risk scores.
    /**
     * Score one if risk of harm is answered "yes"
     * Score one if legal issues were answered "yes"
     * Score one if risk or exploitation were answered "yes"
     */
  }
);

// Max amount of possible points: 2;
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

// Max amount of possible points: 2;
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

