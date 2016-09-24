// Need to attach current section to redux store.
import PureRenderMixin from 'react-addons-pure-render-mixin';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// Components
import {
  Text,
  ScrollView
} from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import Questions from '../components/Questions';
// Selectors
import { formInputsSelector, totalVispdatRiskScoreSelector } from '../selectors/Form';
// Questions
import { VispdatFollowUpQuestions } from '../utilities/questions';
import { processQuestions } from '../utilities/helpers';
import * as answerOptions from '../utilities/answerOptions.js';
// GraphQL
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const mutation = gql`
  mutation($input: AssessmentInputType!){
    AddAssessment(input: $input) {
      _id
      districtId
    }
  }
`;

class VispdatFollowUp extends Component {
  static propTypes = {
    fields: PropTypes.object,
    submit: PropTypes.func,
    vispdatRiskScore: PropTypes.number
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.renderPrefaceText = this._renderPrefaceText.bind(this);
    this.onPressHandler = this._onPressHandler.bind(this);
    this.state = {
      questions: VispdatFollowUpQuestions.get('questions').map((question) => {
        if (!question.has('answers')) {
          return question;
        }
        return question.set('answers', answerOptions[ question.get('answers') ]);
      })
    };
  }

  _renderPrefaceText() {
    if (VispdatFollowUpQuestions.prefaceText) {
      return (<Text>{VispdatFollowUpQuestions.get('prefaceText')}</Text>);
    }
    return null;
  }

  _onPressHandler() {
    console.log('this.props.fields', this.props.fields);
    this.props.submit(this.props.fields)
    .then((result) => {
      console.log('result', result);
    })
    .catch((error) => {
      console.log('error', error);
    });
  }

  render() {
    if (!this.state.questions) {
      return (
        <Text> Loading.. </Text>
      );
    }
    return (
      <ScrollView>
        <Header
          text={"Vispdat Housing History"}
        />
        <Header
          text={VispdatFollowUpQuestions.get('sectionTitle')}
        />
        <Questions
          questions={processQuestions(this.state.questions)}
        />
        <Text>
          Total Risk Score: {this.props.vispdatRiskScore}
        </Text>
        <Button
          onPress={this.onPressHandler}
          text={"Submit Form!"}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fields: formInputsSelector(state),
    vispdatRiskScore: totalVispdatRiskScoreSelector(state)
  };
};

VispdatFollowUp = graphql(mutation, {
  props: ({ mutate }) => ({
    submit: (fields) => mutate({
      variables: {
        input: {
          districtId: fields.districtId,
          generalDemographics: {
            age: fields.age,
            consentOfParticipation: fields.consentOfParticipation,
            dateOfBirth: fields.dateOfBirth,
            ethnicity: fields.ethnicity,
            firstName: fields.firstName,
            gender: fields.gender, // Needed to add
            languages: fields.languages,
            lastName: fields.lastName,
            mainLanguage: fields.mainLanguage,
            nickName: fields.nickName,
            ssn: fields.ssn
          },
          historyOfHousingAndHomelessness: {
            sleepsMostFrequentlyAt: fields.sleepsMostFrequentlyAt,
            timePassedSincePermanentHousing: fields.timePassedSincePermanentHousing,
            timesHomelessInPastThreeYears: fields.timesHomelessInPastThreeYears
          },
          risk: {
            timesReceivedErCareInSixMonths: fields.timesReceivedErCareInSixMonths,
            timesAmbulanceRidesInSixMonths: fields.timesAmbulanceRidesInSixMonths,
            timesHospitalizedAsInpatientInSixMonths: fields.timesHospitalizedAsInpatientInSixMonths,
            timesUsedCrisisServiceInSixMonths: fields.timesUsedCrisisServiceInSixMonths,
            timesPoliceTalksInSixMonths: fields.timesPoliceTalksInSixMonths,
            timesJailedInSixMonths: fields.timesJailedInSixMonths,
            timesAttackedSinceHomeless: fields.timesAttackedSinceHomeless,
            timesHarmedSelfOrOthersPastYear: fields.timesHarmedSelfOrOthersPastYear,
            hasImmediateLegalIssues: fields.hasImmediateLegalIssues,
            beingForcedUponToDoUnwantedThings: fields.beingForcedUponToDoUnwantedThings,
            beingExploitedForSexOrDrugs: fields.beingExploitedForSexOrDrugs
          },
          scores: {
            basicDemographicRiskScore: fields.basicDemographicRiskScore,
            noHousingScore: fields.noHousingScore,
            consectutiveHomelessnessScore: fields.consectutiveHomelessnessScore,
            riskOfHarmScore: fields.riskOfHarmScore,
            emergencyUseRiskScore: fields.emergencyUseRiskScore,
            legalIssuesScore: fields.legalIssuesScore,
            riskOfExploitationScore: fields.riskOfExploitationScore,
            moneyManagementScore: fields.moneyManagementScore,
            meaningfulDailyActivityScore: fields.meaningfulDailyActivityScore,
            selfCareScore: fields.selfCareScore,
            socialRelationshipsScore: fields.socialRelationshipsScore,
            physicalHealthScore: fields.physicalHealthScore,
            substanceAbuseScore: fields.substanceAbuseScore,
            mentalHealthScore: fields.mentalHealthScore,
            TriMobilityScore: fields.TriMobilityScore,
            medicationsScore: fields.medicationsScore,
            abuseAndTraumaScore: fields.abuseAndTraumaScore
          },
          socializingAndDailyFunctioning: {
            owesMoney: fields.owesMoney,
            hasIncome: fields.hasIncome,
            hasMeaningfulActivity: fields.hasMeaningfulActivity,
            hasBasicSelfCare: fields.hasBasicSelfCare,
            homelessDueToRelationships: fields.homelessDueToRelationships
          },
          wellness: {
            forcedFromHousingBecauseHealth: fields.forcedFromHousingBecauseHealth,
            chronicHealthIssues: fields.chronicHealthIssues,
            interestedInHivAidsProgram: fields.interestedInHivAidsProgram,
            limitingPhysicalDisabilities: fields.limitingPhysicalDisabilities,
            avoidsHelpWhenSick: fields.avoidsHelpWhenSick,
            currentlyPregnant: fields.currentlyPregnant,
            forcedFromHousingBecauseAlcoholOrDrugs: fields.forcedFromHousingBecauseAlcoholOrDrugs,
            maintainHousingDifficultyAlcoholDrugs: fields.maintainHousingDifficultyAlcoholDrugs,
            maintainHousingDifficultyMentalHealth: fields.maintainHousingDifficultyMentalHealth,
            maintainHousingDifficultyHeadInjury: fields.maintainHousingDifficultyHeadInjury,
            maintainHousingDifficultyLearningDisability: fields.maintainHousingDifficultyLearningDisability,
            limitingMentalDisabilities: fields.limitingMentalDisabilities,
            notTakingPrescribedMedications: fields.notTakingPrescribedMedications,
            sellingOrAbusingPrescribedMedications: fields.sellingOrAbusingPrescribedMedications,
            homelessnessCausedByAbuseOrTrauma: fields.homelessnessCausedByAbuseOrTrauma
          }
        }
      }
    })
  })
})(VispdatFollowUp);

export default connect(mapStateToProps)(VispdatFollowUp);
