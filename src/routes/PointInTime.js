// Need to attach current section to redux store.
import PureRenderMixin from 'react-addons-pure-render-mixin';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// Components
import {
  Alert,
  ScrollView
} from 'react-native';
import Header from '../components/Header';
import Questions from '../components/Questions';
import Button from '../components/Button';
// Selectors
import { formInputsSelector } from '../selectors/Form';
// Questions
import { PointInTimeQuestions } from '../utilities/questions';
import { processQuestions } from '../utilities/helpers';
import * as answerOptions from '../utilities/answerOptions.js';
// GraphQL
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const mutation = gql`
  mutation($input: PersonInputType!){
    AddPerson(input: $input) {
      _id
      districtId
    }
  }
`;

class PointInTime extends Component {
  static propTypes = {
    fields: PropTypes.object,
    submit: PropTypes.func
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.renderPrefaceText = this._renderPrefaceText.bind(this);
    this.onPressHandler = this._onPressHandler.bind(this);
    this.state = {
      questions: PointInTimeQuestions.get('questions').map((question) => {
        if (!question.has('answers')) {
          return question;
        }
        return question.set('answers', answerOptions[ question.get('answers') ]);
      })
    };
  }

  _onPressHandler() {
    this.props.submit(this.props.fields)
    .then((result) => {
      Alert.alert('Form successfully submitted!', 'Your form has been successfully registered.');
      console.log('result', result);
      Actions.home();
    })
    .catch((error) => {
      console.log('error', error);
    });
  }


  _renderPrefaceText() {
    if (PointInTimeQuestions.prefaceText) {
      return (<Text>{PointInTimeQuestions.get('prefaceText')}</Text>);
    }
    return null;
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
          text={PointInTimeQuestions.get('sectionTitle')}
        />
        <Questions
          questions={processQuestions(this.state.questions)}
        />
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
    fields: formInputsSelector(state)
  };
};

PointInTime = graphql(mutation, {
  props: ({ mutate }) => ({
    submit: (fields) => mutate({
      variables: {
        input: {
          age: fields.age,
          assessmentIds: fields.assessmentIds,
          alcoholDrugProblem: fields.alcoholDrugProblem,
          benefitEbt: fields.benefitEbt,
          benefitSsi: fields.benefitSsi,
          benefitTanf: fields.benefitTanf,
          benefitUnemployment: fields.benefitUnemployment,
          benefitVeteran: fields.benefitVeteran,
          benefitWelfare: fields.benefitWelfare,
          dateCreated: fields.dateCreated,
          districtId: fields.districtId,
          driversLicenseNumber: fields.driversLicenseNumber,
          educationLevel: fields.educationLevel,
          employmentCurPay: fields.employmentCurPay,
          employmentLastEmployed: fields.employmentLastEmployed,
          employmentStatus: fields.employmentStatus,
          ethnicity: fields.ethnicity,
          familyMembersAdult: fields.familyMembersAdult,
          familyMembersChildren: fields.familyMembersChildren,
          firstName: fields.firstName,
          gender: fields.gender,
          geoLocation: fields.geoLocation,
          hawaiiStateId: fields.hawaiiStateId,
          lastHomelessDate: fields.lastHomelessDate,
          lastHomelessAreaLived: fields.lastHomelessAreaLived,
          lastName: fields.lastName,
          lengthOfStayHawaii: fields.lengthOfStayHawaii,
          mentalHealthDisability: fields.mentalHealthDisability,
          onTheStreets: fields.onTheStreets,
          otherDisability: fields.otherDisability,
          reportIds: fields.reportIds,
          reasonForHomelessness: fields.reasonForHomelessness,
          shelterName: fields.shelterName,
          shelterStatus: fields.shelterStatus,
          ssn: fields.ssn,
          timeHomelessCount: fields.timeHomelessCount
        }
      }
    })
  })
})(PointInTime);

export default connect(mapStateToProps)(PointInTime);
