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
import { RefuseQuestions } from '../utilities/questions';
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

class Refuse extends Component {
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
      questions: RefuseQuestions.get('questions').map((question) => {
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
    if (RefuseQuestions.prefaceText) {
      return (<Text>{RefuseQuestions.get('prefaceText')}</Text>);
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
          text={RefuseQuestions.get('sectionTitle')}
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

Refuse = graphql(mutation, {
  props: ({ mutate }) => ({
    submit: (input) => mutate({
      variables: {
        districtId: input.districtId,
        reportedAt: input.reportedAt
      }
    })
  })
})(Refuse);

const mapStateToProps = (state) => {
  return {
    fields: formInputsSelector(state)
  };
};

export default connect(mapStateToProps)(Refuse);
