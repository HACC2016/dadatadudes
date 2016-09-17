import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as FormActions from '../actions/Form/index.js';
import FormQuestion from '../components/FormQuestion.js';
import {
  View,
  Text
} from 'react-native';
import { vispdatQuestions } from '../utilities/questions.js';

class Section extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.onChangeText = this._onChangeText.bind(this);
    this.rednerQuestions = this._renderQustions.bind(this);
  }

  _onChangeText(value) {
    this.props.addFormField({
      field: 'username',
      value
    });
  }

  _grabDakSectionLaddat() {}

  _renderQustions() {
    return this.propos.questions.map(({ question, type, answers }, key) => (
      <FormQuestion
        key={key}
        quesion={question}
        type={type}
        answers={answers}
      />
    ));
  }

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
        {this.rednerQuestions()}
      </View>
    );
  }
}

export default Section;
