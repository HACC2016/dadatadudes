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

export const basicDemographicRiskScoreSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    const { age } = formInputs;
    if (age > 60) {
      return 1;
    }
    return 0;
  }
);

export const noHousingScoreSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    const validSleepingFields = ['refused', 'outdoors', 'other'];
    const {
      sleepsMostFrequentlyAt
    } = formInputs;
    let score = 0;
    if (validSleepingFields.indexOf(sleepsMostFrequentlyAt) > -1) {
      score = score + 1;
    }
    return score;
  }
);

export const consectutiveHomelessnessScoreSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    let score = 0;
    const validHomelessDateFields = ['oneYearOrLonger', 'fourOrMoreTimes'];
    const {
      timePassedSincePermanentHousing,
      timesHomelessInPastThreeYears
    } = formInputs;
    if (
        validHomelessDateFields.indexOf(timePassedSincePermanentHousing) > -1 ||
        validHomelessDateFields.indexOf(timesHomelessInPastThreeYears) > -1
      ) {
      score = score + 1;
    }
    return score;
  }
);

export const riskOfHarmScoreSelector = createSelector(
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
      if (timesReceivedErCareInSixMonths === 'oneToTwo') {
        score = 0.25;
      } else {
        score = 1;
      }
    }
    if (timesAmbulanceRidesInSixMonths !== 'none' || timesAmbulanceRidesInSixMonths !== 'other' && score !== 1) {
      if (timesReceivedErCareInSixMonths === 'oneToTwo') {
        score = 0.25;
      } else {
        score = 1;
      }
    }
    if (timesHospitalizedAsInpatientInSixMonths !== 'none' || timesHospitalizedAsInpatientInSixMonths !== 'other' && score !== 1) {
      if (timesReceivedErCareInSixMonths === 'oneToTwo') {
        score = 0.25;
      } else {
        score = 1;
      }
    }
    if (timesUsedCrisisServiceInSixMonths !== 'none' || timesUsedCrisisServiceInSixMonths !== 'other' && score !== 1) {
      if (timesReceivedErCareInSixMonths === 'oneToTwo') {
        score = 0.25;
      } else {
        score = 1;
      }     
    }
    if (timesPoliceTalksInSixMonths !== 'none' || timesPoliceTalksInSixMonths !== 'other' && score !== 1) {
      if (timesReceivedErCareInSixMonths === 'oneToTwo') {
        score = 0.25;
      } else {
        score = 1;
      }
    }
    if (timesJailedInSixMonths !== 'none' || timesJailedInSixMonths !== 'other' && score !== 1) {
      if (timesReceivedErCareInSixMonths === 'oneToTwo') {
        score = 0.25;
      } else {
        score = 1;
      }
    }
    // Rounds out any scores that didn't hit 0.
    return Math.floor(score);
  }
);

export const emergencyUseRiskScoreSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    let score = 0;
    const {
      timesHarmedSelfOrOthersPastYear
    } = formInputs;

    if (timesHarmedSelfOrOthersPastYear === 'yes') {
      score = score + 1;
    }

    return score;
  }
);

export const legalIssuesScoreSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    let score = 0;
    const {
      hasImmediateLegalIssues
    } = formInputs;

    if (hasImmediateLegalIssues === 'yes') {
      score = score + 1;
    }
    return score;
  }
);

export const riskOfExploitationScoreSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    let score = 0;
    const {
      beingForcedUponToDoUnwantedThings,
      beingExploitedForSexOrDrugs
    } = formInputs;
    if (beingForcedUponToDoUnwantedThings === 'yes' || beingExploitedForSexOrDrugs === 'yes') {
      score = score + 1;
    }
    return score;
  }
);

export const moneyManagementScoreSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    const {
      owesMoney,
      hasIncome
    } = formInputs;
    let score = 0;
    if (owesMoney === 'yes' || hasIncome === 'yes') {
      score = score + 1;
    }
    return score;
  }
);

export const meaningfulDailyActivityScoreSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    let score = 0;
    const {
      hasMeaningfulActivity
    } = formInputs;

    if (hasMeaningfulActivity === 'no') {
      score = score + 1;
    }
    return score;
  }
);

export const selfCareScoreSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    let score = 0;
    const {
      hasBasicSelfCare
    } = formInputs;
    if (hasBasicSelfCare === 'no') {
      score = score + 1;
    }
    return score;
  }
);

export const socialRelationshipsScoreSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    let score = 0;
    const {
      homelessDueToRelationships
    } = formInputs;
    if (homelessDueToRelationships === 'yes') {
      score = score + 1;
    }
    return score;
  }
);

export const physicalHealthScoreSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    let score = 0;
    const {
      forcedFromHousingBecauseHealth,
      chronicHealthIssues,
      interestedInHivAidsProgram,
      limitingPhysicalDisabilities,
      avoidsHelpWhenSick,
      currentlyPregnant
    } = formInputs;
    if (
      forcedFromHousingBecauseHealth === 'yes' ||
      chronicHealthIssues === 'yes' ||
      interestedInHivAidsProgram === 'yes' ||
      limitingPhysicalDisabilities === 'yes' ||
      avoidsHelpWhenSick === 'yes' ||
      currentlyPregnant === 'yes'
    ) {
      score = score + 1;
    }
    return score;
  }
);

export const substanceAbuseScoreSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    let score = 0;
    const {
      forcedFromHousingBecauseAlcoholOrDrugs,
      maintainHousingDifficultyAlcoholDrugs
    } = formInputs;
    if (
      forcedFromHousingBecauseAlcoholOrDrugs === 'yes' ||
      maintainHousingDifficultyAlcoholDrugs === 'yes'
    ) {
      score = score + 1;
    }
    return score;
  }
);

export const mentalHealthScoreSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    let score = 0;
    const {
      maintainHousingDifficultyMentalHealth,
      maintainHousingDifficultyHeadInjury,
      maintainHousingDifficultyLearningDisability,
      limitingMentalDisabilities
    } = formInputs;
    if (
      maintainHousingDifficultyMentalHealth === 'yes' ||
      maintainHousingDifficultyHeadInjury === 'yes' ||
      maintainHousingDifficultyLearningDisability === 'yes' ||
      limitingMentalDisabilities === 'yes'
    ) {
      score = score + 1;
    }
    return score;
  }
);

export const TriMobilityScoreSelector = createSelector(
  [
    physicalHealthScoreSelector,
    substanceAbuseScoreSelector,
    mentalHealthScoreSelector
  ],
  (physical, substance, metal) => {
    if (!physical || !substance || !metal) {
      return 0;
    }
    return 1;
  }
);

export const medicationsScoreSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    const {
      notTakingPrescribedMedications,
      sellingOrAbusingPrescribedMedications
    } = formInputs;
    let score = 0;
    if (
      notTakingPrescribedMedications === 'yes' ||
      sellingOrAbusingPrescribedMedications === 'yes'
    ) {
      score = score + 1;
    }
    return score;
  }
);

export const abuseAndTraumaScoreSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    const {
      homelessnessCausedByAbuseOrTrauma
    } = formInputs;
    let score = 0;
    if (homelessnessCausedByAbuseOrTrauma === 'yes') {
      score = score + 1;
    }
    return score;
  }
);


// // Max amount of possible points: 1;
// export const VispdatBasicScore = createSelector(
//   [formInputsSelector],
//   (formInputs) => {
//     const { age } = formInputs;
//     if (age > 60) {
//       return 1;
//     }
//     return 0;
//   }
// );

// // Max amount of possible points: 2;
// export const VispdatHousingScore = createSelector(
//   [formInputsSelector],
//   (formInputs) => {
//     const validSleepingFields = ['refused', 'outdoors', 'other'];
//     const validHomelessDateFields = ['oneYearOrLonger', 'fourOrMoreTimes'];
//     const {
//       sleepsMostFrequentlyAt,
//       timePassedSincePermanentHousing,
//       timesHomelessInPastThreeYears
//     } = formInputs;
//     let score = 0;
//     if (validSleepingFields.indexOf(sleepsMostFrequentlyAt) > -1) {
//       score = score + 1;
//     }
//     if (
//         validHomelessDateFields.indexOf(timePassedSincePermanentHousing) > -1 ||
//         validHomelessDateFields.indexOf(timesHomelessInPastThreeYears) > -1
//       ) {
//       score = score + 1;
//     }
//     return score;
//   }
// );

// // Max amount of possible points: 4;
// export const VispdatRiskScore = createSelector(
//   [formInputsSelector],
//   (formInputs) => {
//     const {
//       timesReceivedErCareInSixMonths,
//       timesAmbulanceRidesInSixMonths,
//       timesHospitalizedAsInpatientInSixMonths,
//       timesUsedCrisisServiceInSixMonths,
//       timesPoliceTalksInSixMonths,
//       timesJailedInSixMonths,
//       timesHarmedSelfOrOthersPastYear,
//       hasImmediateLegalIssues,
//       beingForcedUponToDoUnwantedThings,
//       beingExploitedForSexOrDrugs
//     } = formInputs;
//     let score = 0;
//     if (timesReceivedErCareInSixMonths !== 'none' || timesReceivedErCareInSixMonths !== 'other') {
//       if (timesReceivedErCareInSixMonths === 'oneToTwo') {
//         score = 0.25;
//       } else {
//         score = 1;
//       }
//     }
//     if (timesAmbulanceRidesInSixMonths !== 'none' || timesAmbulanceRidesInSixMonths !== 'other' && score !== 1) {
//       if (timesReceivedErCareInSixMonths === 'oneToTwo') {
//         score = 0.25;
//       } else {
//         score = 1;
//       }
//     }
//     if (timesHospitalizedAsInpatientInSixMonths !== 'none' || timesHospitalizedAsInpatientInSixMonths !== 'other' && score !== 1) {
//       if (timesReceivedErCareInSixMonths === 'oneToTwo') {
//         score = 0.25;
//       } else {
//         score = 1;
//       }
//     }
//     if (timesUsedCrisisServiceInSixMonths !== 'none' || timesUsedCrisisServiceInSixMonths !== 'other' && score !== 1) {
//       if (timesReceivedErCareInSixMonths === 'oneToTwo') {
//         score = 0.25;
//       } else {
//         score = 1;
//       }     
//     }
//     if (timesPoliceTalksInSixMonths !== 'none' || timesPoliceTalksInSixMonths !== 'other' && score !== 1) {
//       if (timesReceivedErCareInSixMonths === 'oneToTwo') {
//         score = 0.25;
//       } else {
//         score = 1;
//       }
//     }
//     if (timesJailedInSixMonths !== 'none' || timesJailedInSixMonths !== 'other' && score !== 1) {
//       if (timesReceivedErCareInSixMonths === 'oneToTwo') {
//         score = 0.25;
//       } else {
//         score = 1;
//       }
//     }
//     // Rounds out any scores that didn't hit 0.
//     score = Math.floor(score);
//     if (timesHarmedSelfOrOthersPastYear === 'yes') {
//       score = score + 1;
//     }
//     if (hasImmediateLegalIssues === 'yes') {
//       score = score + 1;
//     }
//     if (beingForcedUponToDoUnwantedThings === 'yes' || beingExploitedForSexOrDrugs === 'yes') {
//       score = score + 1;
//     }
//     return score;
//   }
// );

// // Max amount of possible points: 2;
// export const VispdatSocializationScore = createSelector(
//   [formInputsSelector],
//   (formInputs) => {
//     const {
//       owesMoney,
//       hasIncome,
//       hasMeaningfulActivity,
//       hasBasicSelfCare,
//       homelessDueToRelationships
//     } = formInputs;
//     let score = 0;
//     if (owesMoney === 'yes' || hasIncome === 'yes') {
//       score = score + 1;
//     }
//     if (hasMeaningfulActivity === 'no') {
//       score = score + 1;
//     }
//     if (hasBasicSelfCare === 'no') {
//       score = score + 1;
//     }
//     if (homelessDueToRelationships === 'yes') {
//       score = score + 1;
//     }

//     return score;
//   }
// );

// // Max amount of possible points: 2;
// export const VispdatWellnessScore = createSelector(
//   [formInputsSelector],
//   (formInputs) => {
//     const {
//       forcedFromHousingBecauseHealth,
//       chronicHealthIssues,
//       interestedInHivAidsProgram,
//       limitingPhysicalDisabilities,
//       avoidsHelpWhenSick,
//       currentlyPregnant,
//       forcedFromHousingBecauseAlcoholOrDrugs,
//       maintainHousingDifficultyAlcoholDrugs,
//       maintainHousingDifficultyMentalHealth,
//       maintainHousingDifficultyHeadInjury,
//       maintainHousingDifficultyLearningDisability,
//       limitingMentalDisabilities,
//       notTakingPrescribedMedications,
//       sellingOrAbusingPrescribedMedications,
//       homelessnessCausedByAbuseOrTrauma
//     } = formInputs;
//     let score = 0;
//     if (
//       forcedFromHousingBecauseHealth === 'yes' ||
//       chronicHealthIssues === 'yes' ||
//       interestedInHivAidsProgram === 'yes' ||
//       limitingPhysicalDisabilities === 'yes' ||
//       avoidsHelpWhenSick === 'yes' ||
//       currentlyPregnant === 'yes'
//     ) {
//       score = score + 1;
//     }

//     if (
//       forcedFromHousingBecauseAlcoholOrDrugs === 'yes' ||
//       maintainHousingDifficultyAlcoholDrugs === 'yes'
//     ) {
//       score = score + 1;
//     }

//     if (
//       maintainHousingDifficultyMentalHealth === 'yes' ||
//       maintainHousingDifficultyHeadInjury === 'yes' ||
//       maintainHousingDifficultyLearningDisability === 'yes' ||
//       limitingMentalDisabilities === 'yes'
//     ) {
//       score = score + 1;
//     }

//     const scoreForTRIMorbidity = (score === 3) ? 1 : 0;

//     if (
//       notTakingPrescribedMedications === 'yes' ||
//       sellingOrAbusingPrescribedMedications === 'yes'
//     ) {
//       score = score + 1;
//     }

//     if (homelessnessCausedByAbuseOrTrauma === 'yes') {
//       score = score + 1;
//     }

//     return score + scoreForTRIMorbidity;
//   }
// );

export const allVispdatRiskScoresSelector = createSelector(
  [
    basicDemographicRiskScoreSelector,
    noHousingScoreSelector,
    consectutiveHomelessnessScoreSelector,
    riskOfHarmScoreSelector,
    emergencyUseRiskScoreSelector,
    legalIssuesScoreSelector,
    riskOfExploitationScoreSelector,
    moneyManagementScoreSelector,
    meaningfulDailyActivityScoreSelector,
    selfCareScoreSelector,
    socialRelationshipsScoreSelector,
    physicalHealthScoreSelector,
    substanceAbuseScoreSelector,
    mentalHealthScoreSelector,
    TriMobilityScoreSelector,
    medicationsScoreSelector,
    abuseAndTraumaScoreSelector
  ],
  (
    basicDemographicRiskScore = 0,
    noHousingScore = 0,
    consectutiveHomelessnessScore = 0,
    riskOfHarmScore = 0,
    emergencyUseRiskScore = 0,
    legalIssuesScore = 0,
    riskOfExploitationScore = 0,
    moneyManagementScore = 0,
    meaningfulDailyActivityScore = 0,
    selfCareScore = 0,
    socialRelationshipsScore = 0,
    physicalHealthScore = 0,
    substanceAbuseScore = 0,
    mentalHealthScore = 0,
    TriMobilityScore = 0,
    medicationsScore = 0,
    abuseAndTraumaScore = 0
  ) => {
    return {
      basicDemographicRiskScore,
      noHousingScore,
      consectutiveHomelessnessScore,
      riskOfHarmScore,
      emergencyUseRiskScore,
      legalIssuesScore,
      riskOfExploitationScore,
      moneyManagementScore,
      meaningfulDailyActivityScore,
      selfCareScore,
      socialRelationshipsScore,
      physicalHealthScore,
      substanceAbuseScore,
      mentalHealthScore,
      TriMobilityScore,
      medicationsScore,
      abuseAndTraumaScore
    };
  }
);

export const totalVispdatRiskScoreSelector = createSelector(
  [
    basicDemographicRiskScoreSelector,
    noHousingScoreSelector,
    consectutiveHomelessnessScoreSelector,
    riskOfHarmScoreSelector,
    emergencyUseRiskScoreSelector,
    legalIssuesScoreSelector,
    riskOfExploitationScoreSelector,
    moneyManagementScoreSelector,
    meaningfulDailyActivityScoreSelector,
    selfCareScoreSelector,
    socialRelationshipsScoreSelector,
    physicalHealthScoreSelector,
    substanceAbuseScoreSelector,
    mentalHealthScoreSelector,
    TriMobilityScoreSelector,
    medicationsScoreSelector,
    abuseAndTraumaScoreSelector
  ],
  (
    basicDemographicRiskScore = 0,
    noHousingScore = 0,
    consectutiveHomelessnessScore = 0,
    riskOfHarmScore = 0,
    emergencyUseRiskScore = 0,
    legalIssuesScore = 0,
    riskOfExploitationScore = 0,
    moneyManagementScore = 0,
    meaningfulDailyActivityScore = 0,
    selfCareScore = 0,
    socialRelationshipsScore = 0,
    physicalHealthScore = 0,
    substanceAbuseScore = 0,
    mentalHealthScore = 0,
    TriMobilityScore = 0,
    medicationsScore = 0,
    abuseAndTraumaScore = 0
  ) => {
    return  (basicDemographicRiskScore + noHousingScore + consectutiveHomelessnessScore + riskOfHarmScore + emergencyUseRiskScore + legalIssuesScore + riskOfExploitationScore + moneyManagementScore + meaningfulDailyActivityScore + selfCareScore + socialRelationshipsScore + physicalHealthScore + substanceAbuseScore + mentalHealthScore + TriMobilityScore + medicationsScore + abuseAndTraumaScore)
  }
);
