import React, { Component, PropTypes } from 'react';
import FormQuestion from '../components/FormQuestion';
import {
  View,
  Text
} from 'react-native';

class Section extends Component {

  static propTypes = {
    addFormField: PropTypes.func,
    title: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.onChangeText = this._onChangeText.bind(this);
    this.renderQuestions = this._renderQuestions.bind(this);
  }

  _onChangeText(value) {
    this.props.addFormField({
      field: 'username',
      value
    });
  }

  _renderQustions() {
    return this.props.questions.map(({ question, type, answers }, key) => (
      <FormQuestion
        key={key}
        question={question}
        type={type}
        answers={answers}
      />
    ));
  }

  render() {
    return (
      <View>
        <Text> {this.props.title} </Text>
        {this.renderQuestions()}
      </View>
    );
  }
}

export default Section;
