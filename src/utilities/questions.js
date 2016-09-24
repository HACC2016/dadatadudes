import { fromJS } from 'immutable';

export const PointInTimeQuestions = fromJS({
  sectionTitle: 'Point In Time',
  prefaceText: '',
  questions: [
    { question: 'How many ADULTS are in your household?', type: 'dropdown', answers: 'number', field: 'familyMembersAdult' },
    { question: 'How many CHILDREN UNDER 18?', type: 'dropdown', answers: 'number', field: 'familyMembersChildren' },
    { question: 'Have you served in the U.S. Armed Forces?', type: 'dropdown', answers: 'general', field: 'veteran' },
    { quesiton: 'How long have you lived in Hawaii?', type: 'dropdown', answers: 'number', field: 'lengthOfStayInHawaii' },
    // { question: 'Why are you homeless?', type: 'input', field: 'reasonForHomelessness' },
    { question: 'How many times have you ever been homeless?', type: 'dropdown', answers: 'number', field: 'timesHomelessCount' },
    { question: 'How long have you been continuously homeless this time?', type: 'dropdown', answers: 'number', field: '' },
    { question: 'How many times have you been homeless in the past 3 years?', type: 'dropdown', answers: 'homelessDate', field: '' },
    { question: 'Were you on the street, beach, park, or in an emergency shelter each time?', type: 'dropdown', answers: 'homelessCount', field: '' },
    { question: 'Do you have a mental health disability that limits your ability to work or perform activities of daily living?', type: 'dropdown', answers: 'general', field: 'mentalHealthDisability' },
    { question: 'Do you have an alcohol or drug problem that limits your ability to work or perform activities of daily living?', type: 'dropdown', answers: 'general', field: 'alcoholDrugProblem' },
    { question: 'Select all Benefits that you are currently receiving:', type: 'dropdown', answers: 'benefits', field: 'benefits' },
    { question: 'Do you have a physical, developmental, or other disability that limits your ability to work or perform activities of daily living?', type: 'dropdown', answers: 'general', field: 'otherDisability' },
    { question: 'Do you have any of the following identification:', type: 'checkbox', answers: 'ids', field: 'driversLicenseNumber' },
    { question: 'Education level completed', type: 'dropdown', answers: 'education', field: 'educationLevel' },
    { question: 'Are you currently employed?', type: 'radio', answers: 'general', field: 'employementStatus' },
    { question: 'What is your current pay?', type: 'input', field: 'employementCurrentPay' }
    // { question: 'When were you last employed?' type: 'datePicker', field: 'employementLastEmployed' },
  ]
});

export const BasicQuestions = fromJS({
  sectionTitle: 'Basic Information',
  prefaceText: '',
  questions: [
    { question: 'First Name', type: 'input', field: 'firstName' },
    { question: 'Last Name', type: 'input', field: 'lastName' },
    { question: 'Nickname', type: 'input', field: 'nickName' },
    { question: 'Social Security Number', type: 'input', field: 'ssn' },
    { question: 'Gender', type: 'radio', answers: 'gender', field: 'gender' },
    // { type: 'datePicker', field: 'dateOfBirth' },
    { question: 'Age', type: 'input', field: 'age' },
    { question: 'What Race do you most identify with? (SELECT ONLY ONE)', type: 'radio', answers: 'ethnicity', field: 'ethnicity' },
    { question: 'In what language do you feel best able to exprees yourself?', type: 'input', field: 'languages' },
    { question: 'What district are you currently living in?', type: 'dropdown', answers: 'district', field: 'districtId' }
  ]
});

export const VispdatHousingHistory = fromJS({
  sectionTitle: 'History of Housing and Homelessness',
  prefaceText: '',
  questions: [
    { question: 'Where do you sleep most frequently', type: 'checkbox', answers: 'sleeping', field: 'sleepsMostFrequentlyAt' },
    { question: 'How long has it been since you lived in permanent stable housing?', type: 'dropdown', answers: 'homelessDate', field: 'timePassedSincePermanentHousing' },
    { question: 'In the last three years, how many times have you been homeless?', type: 'dropdown', answers: 'homelessCount', field: 'timesHomelessInPastThreeYears' }
  ]
});

export const VispdatRisksQuestions = fromJS({
  sectionTitle: 'Risks',
  prefaceText: 'In the past six months, how many times have you...',
  questions: [
    { question: 'Received health care at an emergency department / room?', type: 'dropdown', answers: 'number', field: 'timesReceivedErCareInSixMonths' },
    { question: 'Taken an ambulance to the hospital?', type: 'dropdown', answers: 'number', field: 'timesAmbulanceRidesInSixMonths' },
    { question: 'Been hospitalized as an inpatient?', type: 'dropdown', answers: 'number', field: 'timesHospitalizedAsInpatientInSixMonths' },
    { question: 'Used a crisis service, including sexual assault crisis, mental health crisis, family / intimate violence, distress centers and suicide prevention hotlines?', type: 'dropdown', answers: 'number', field: 'timesUsedCrisisServiceInSixMonths' },
    { question: 'Talked to police because you witnessed a crime, were the victim of a crime, or the alleged perpetrator of a crime or because the police told you that you must move along?', type: 'dropdown', answers: 'number', field: 'timesPoliceTalksInSixMonths' },
    { question: 'Stayed one or more nights in a holding cell, jail or prison, whether that was a short-term stay like the drunk tank, a longer stay for a more serous offense, or anything in between?', type: 'dropdown', answers: 'number', field: 'timesJailedInSixMonths' },
    { question: 'Have you been attacked or beaten up since you’ve become homeless?', type: 'dropdown', answers: 'general', field: 'timesAttackedSinceHomeless' },
    { question: 'Have you threatened to or tried to harm yourself or anyone else in the last year?', type: 'dropdown', answers: 'general', field: 'timesHarmedSelfOrOthersPastYear' },
    { question: 'Do you have any legal stuff going on right now that may result in you being locked up, having to pay fines, or that make it more difficult to rent a place to live?', type: 'dropdown', answers: 'general', field: 'hasImmediateLegalIssues' },
    { question: 'Does anybody force or trick you to do things that you do not want to do?', type: 'dropdown', answers: 'general', field: 'beingForcedUponToDoUnwantedThings' },
    { question: 'Do you ever do things that may be considered to be risky like exchange sex for money, run drugs for someone, have unprotected sex with someone you don’t know, share a needle, or anything like that?', type: 'dropdown', answers: 'general', field: 'beingExploitedForSexOrDrugs' }
  ]
});

export const VispdatSocializationQuestions = fromJS({
  sectionTitle: 'Socialization & Daily Functioning',
  prefaceText: '',
  questions: [
    { question: 'Is there any person, past landlord, business, bookie, dealer, or government group like the IRS that things you owe them money?', type: 'radio', answers: 'general', field: 'owesMoney' },
    { question: 'Do you get any money from the government, a pension, an inheritance, working under the table, a regular job, or anything like that?', type: 'radio', answers: 'general', field: 'hasIncome' },
    { question: 'Do you have planned activities, other than just surviving, that make you feel happy and fulfilled?', type: 'radio', answers: 'general', field: 'hasMeaningfulActivity' },
    { question: 'Are you currently able to take care of basic needs like bathing, changing clothes, using a restroom, getting food and clean water and other things like that?', type: 'radio', answers: 'general', field: 'hasBasicSelfCare' },
    { question: 'Is your current homelessness in any way caused by a relationship that broke down, an unhealthy or abusive relationship, or because family or friends caused you to become evicted?', type: 'radio', answers: 'general', field: 'homelessDueToRelationships' }
  ]
});

export const VispdatWellnessQuestions = fromJS({
  sectionTitle: 'Wellness',
  prefaceText: '',
  questions: [
    { question: 'Have you ever had to leave an apartment, shelter program, or other place you were staying because of your physical health?', type: 'radio', answers: 'general', field: 'forcedFromHousingBecauseHealth' },
    { question: 'Do you have any chronic health issues with your liver, kidneys, stomach, lungs or heart?', type: 'radio', answers: 'general', field: 'chronicHealthIssues' },
    { question: 'If there was a space available in a program that specifically assists people that live with HIV or AIDS, would that be of interest to you?', type: 'radio', answers: 'general', field: 'interestedInHivAidsProgram' },
    { question: 'Do you have any physical disabilities that would limit the type of housing you could access, or would make it hard to live independently because you’d need help?', type: 'radio', answers: 'general', field: 'limitingPhysicalDisabilities' },
    { question: 'When you are sick or not feeling well, do you avoid getting help?', type: 'radio', answers: 'general', field: 'avoidsHelpWhenSick' },
    { question: 'FOR FEMALE RESPONDENTS ONLY: Are you currently pregnant?', type: 'radio', answers: 'general', field: 'currentlyPregnant' },
    { question: 'Has your drinking or drug use led you to being kicked out of an apartment or program where you were staying in the past?', type: 'radio', answers: 'general', field: 'forcedFromHousingBecauseAlcoholOrDrugs' },
    { question: 'Will drinking or drug use make it difficult for you to stay housed or afford your housing?', type: 'radio', answers: 'general', field: 'maintainHousingDifficultyAlcoholDrugs' },
    { question: 'A mental health issue or concern?', type: 'radio', answers: 'general', field: 'maintainHousingDifficultyMentalHealth' },
    { question: 'A past head injury?', type: 'radio', answers: 'general', field: 'maintainHousingDifficultyHeadInjury' },
    { question: 'A learning disability, developmental disability, or other impairment?', type: 'radio', answers: 'general', field: 'maintainHousingDifficultyLearningDisability' },
    { question: 'Do you have any mental health or brain issues that would make it hard for you to live independently because you’d need help?', type: 'radio', answers: 'general', field: 'limitingMentalDisabilities' },
    { question: 'Are there any medications that a doctor said you should be taking that, for whatever reason, you are not taking?', type: 'radio', answers: 'general', field: 'notTakingPrescribedMedications' },
    { question: 'Are there any medications like painkillers that you don’t take the way the doctor prescribed or where you sell the medication?', type: 'radio', answers: 'general', field: 'sellingOrAbusingPrescribedMedications' },
    { question: 'YES OR NO: Has your current period of homelessness been caused by an experience of emotional, physical, psychological, sexual, or other type of abuse, or by any other trauma you have experienced?', type: 'radio', answers: 'general', field: 'homelessnessCausedByAbuseOrTrauma' }
  ]
});

export const VispdatFollowUpQuestions = fromJS({
  sectionTitle: 'Follow-Up Questions',
  prefaceText: '',
  questions: [
    { question: 'On a regular day, where is it easiest to find you and what time of day is easiest to do so?', type: 'input', field: 'regularLocation' },
    { question: 'Is there a phone number and/or email where someone can safely get in touch with you or leave you a message?', type: 'input', field: 'phoneOrEmailContact' },
    { question: 'Ok, now I\'d like to take your picture so that it is easier to find you and confirm your identity in the future. May I do so?', type: 'radio', answers: 'general', field: 'takePicture' }
  ]
});

export const RefuseQuestions = fromJS({
  sectionTitle: 'Description of Person if they Refused to be Surveyed',
  prefaceText: '',
  questions: [
    // { question: 'Gender', type: 'radio', answers: 'gender', field: 'refuseGender' },
    // { question: 'Age Range', type: 'input', field: 'refuseAge' },
    // { question: 'What Race do you think this person might be?', type: 'radio', answers: 'ethnicity', field: 'refuseEthnicity' },
    { question: 'What district are they current living in?', type: 'dropdown', answers: 'district', field: 'districtId' },
    { question: 'When did you see this person?', type: 'date', field: 'reportedAt' }
  ]
});
