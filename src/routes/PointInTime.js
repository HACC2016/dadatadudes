// Need to attach current section to redux store.
import PureRenderMixin from 'react-addons-pure-render-mixin';
import React, { Component } from 'react';
// Components
import {
  ScrollView
} from 'react-native';
import Header from '../components/Header';
import Questions from '../components/Questions';
import Button from '../components/Button';
// Questions
import { PointInTimeQuestions } from '../utilities/questions';
import { processQuestions } from '../utilities/helpers';
import * as answerOptions from '../utilities/answerOptions.js';
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
    this.props.mutate()
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

PointInTime = graphql(mutation)(PointInTime);
export default PointInTime;
