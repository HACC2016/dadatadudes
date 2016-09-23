import { createSelector } from 'reselect';

const allSectionsByRouteSelector = (state) => {
  return state.form.get('allSections');
};

const answerOptionsSelector = (state) => {
  return state.form.get('answerOptions');
};

export const currentIndexSelector = (state) => {
  return state.form.get('currentIndex');
};

export const currentSectionSelector = createSelector(
  [allSectionsByRouteSelector, currentIndexSelector],
  (allSectionsTable, currentIndex) => {
    return allSectionsTable.getIn([currentIndex, 'section']);
  }
);

export const currentSectionTitleSelector = createSelector(
  [allSectionsByRouteSelector, currentIndexSelector],
  (allSectionsTable, currentIndex) => {
    return allSectionsTable.getIn([currentIndex, 'sectionTitle']);
  }
);

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
export const currentPrefaceTextSelector = createSelector(
  [currentSectionSelector],
  (currentSection) => {
    return currentSection.get('prefaceText');
  }
);

export const currentRouteSelector = (state) => {
  return state.form.get('currentRoute');
};

export const formInputsSelector = (state) => {
  return state.form.get('formFields');
};

export const pointInTimeMutationSelector = createSelector(
  [formInputsSelector],
  (formInputs) => {
    if (formInputs) {
      const inputs = formInputs.toJS();
      console.log('inputs', inputs);
      return inputs;
    }
    return null;
  }
);
