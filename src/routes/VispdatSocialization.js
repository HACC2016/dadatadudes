// Need to attach current section to redux store.
import PureRenderMixin from 'react-addons-pure-render-mixin';
import React, { Component } from 'react';
// Components
import {
  Text,
  ScrollView
} from 'react-native';
import Header from '../components/Header';
import Questions from '../components/Questions';
// Questions
import { VispdatSocializationQuestions } from '../utilities/questions';
import { processQuestions } from '../utilities/helpers';
import * as answerOptions from '../utilities/answerOptions.js';

class VispdatSocialization extends Component {
  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.renderPrefaceText = this._renderPrefaceText.bind(this);
    this.state = {
      questions: VispdatSocializationQuestions.get('questions').map((question) => {
        if (!question.has('answers')) {
          return question;
        }
        return question.set('answers', answerOptions[ question.get('answers') ]);
      })
    };
  }

  _renderPrefaceText() {
    if (VispdatSocializationQuestions.prefaceText) {
      return (<Text>{VispdatSocializationQuestions.get('prefaceText')}</Text>);
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
          text={VispdatSocializationQuestions.get('sectionTitle')}
        />
        <Questions
          questions={processQuestions(this.state.questions)}
        />
      </ScrollView>
    );
  }
}

export default VispdatSocialization;
