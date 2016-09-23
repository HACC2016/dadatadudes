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
import { formInputsSelector } from '../selectors/Form';
// Questions
import { VispdatFollowUpQuestions } from '../utilities/questions';
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

class VispdatFollowUp extends Component {
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

VispdatFollowUp = graphql(mutation, {
  props: ({ mutate }) => ({
    submit: (input) => mutate({
      variables: {
        districtId: input.districtId,
        reportedAt: input.reportedAt
      }
    })
  })
})(VispdatFollowUp);

export default connect(mapStateToProps)(VispdatFollowUp);
