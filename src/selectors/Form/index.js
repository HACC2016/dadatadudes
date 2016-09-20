import { createSelector } from 'reselect';

const allSectionsByRouteSelector = (state) => {
  console.log('state', state);
  return state.form.get('allSections');
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

export const currentQuestionsSelector = createSelector(
  [currentSectionSelector],
  (currentSection) => {
    debugger;
    return currentSection.get('questions');
  }
);
export const currentPrefaceTextSelector = createSelector(
  [currentSectionSelector],
  (currentSection) => {
    debugger;
    return currentSection.get('prefaceText');
  }
);

export const currentRouteSelector = (state) => {
  return state.form.get('currentRoute');
};


export const formInputsSelector = (state) => state.form.formInputs;
