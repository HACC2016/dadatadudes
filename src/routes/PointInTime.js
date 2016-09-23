// Need to attach current section to redux store.
import PureRenderMixin from 'react-addons-pure-render-mixin';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// Components
import {
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
  mutation{
    AddReport(input: { districtId: "96744", reportedAt: "04/09/2014" }){
      reportedAt
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
      console.log('result', result);
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
    submit: (input) => mutate({
      variables: {
        districtId: input.districtId,
        reportedAt: input.reportedAt
      }
    })
  })
})(PointInTime);

export default connect(mapStateToProps)(PointInTime);
