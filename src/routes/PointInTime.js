import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as FormActions from '../actions/Form/index.js';
// Components
import FormQuestion from '../components/FormQuestion.js';
import Button from '../components/Button.js';
import {
  ScrollView,
  Text,
  Image,
  View
} from 'react-native';
// Selectors
import {
  pointInTimeFieldsSelector
} from '../selectors/PointInTime/index.js';
// Utilities
import { questions } from '../utilities/questions.js';

class PointInTime extends Component {

  static propTypes = {
    addFormField: PropTypes.func,
    submitForm: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.onSubmit = this._onSubmit.bind(this);
    this.onChangeText = this._onChangeText.bind(this);
    this.renderQuestions = this._renderQuestions.bind(this);
    this.submitDatasheet = this._submitDatasheet.bind(this);
  }

  _onChangeText(value) {
    this.props.addFormField({
      field: 'username',
      value
    });
  }

  _renderQuestions() {
    return questions.map(({ question, type, answers }, key) => (
      <FormQuestion
        key={key}
        question={question}
        type={type}
        answers={answers}
      >
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'http://placekitten.com/250/250' }}
        />
      </FormQuestion>
    ));
  }

  _submitDatasheet() {
  }

  render() {
    if (!questions) {
      return (
        <ScrollView>
          <Text>Loading...</Text>
        </ScrollView>
      );
    }
    return (
      <ScrollView>
        {this.renderQuestions()}
        <Button onClickHandler={this.submitDatasheet} text={"Submit"} />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formFields: pointInTimeFieldsSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...FormActions
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PointInTime);
