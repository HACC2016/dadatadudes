// Need to attach current section to redux store.
import PureRenderMixin from 'react-addons-pure-render-mixin';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// Components
import {
  Alert,
  Text,
  ScrollView,
  StyleSheet,
  View
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
import Style from '../utilities/styles';
// GraphQL
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const styles = Object.assign({}, StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  riskScore: {
    fontWeight: 'bold',
    fontSize: Style.RISK_BUTTON_FONT_SIZE
  }
}));

const mutation = gql`
  mutation($input: ReportInput!){
    AddReport(input: $input) {
      _id
      districtId
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
    console.log('this.props.fields', this.props.fields);
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
        <View style={styles.container}>
          <Button
            onPress={this.onPressHandler}
            text={"Submit Form!"}
          />
        </View>
      </ScrollView>
    );
  }
}

Refuse = graphql(mutation, {
  props: ({ mutate }) => ({
    submit: (fields) => mutate({
      variables: {
        input: {
          districtId: fields.districtId,
          reportedAt: fields.reportedAt
        }
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
