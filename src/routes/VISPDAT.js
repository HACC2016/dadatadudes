import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as FormActions from '../actions/Form';
import FormQuestion from '../components/FormQuestion';
import {
  ScrollView,
  Text
} from 'react-native';
import { vispdatQuestions } from '../utilities/questions';

class Vispdat extends Component {

  static propTypes = {
    addFormField: PropTypes.func,
    submitForm: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.onSubmit = this._onSubmit.bind(this);
    this.onChangeText = this._onChangeText.bind(this);
    this.renderQuestions = this._renderQuestions.bind(this);
  }

  _onChangeText(value) {
    this.props.addFormField({
      field: 'username',
      value
    });
  }

  _renderQuestions() {
    return vispdatQuestions.map(({ question, type, answers }, key) => (
      <FormQuestion
        key={key}
        question={question}
        type={type}
        answers={answers}
      />
    ));
  }

  _onSubmit() {
    this.props.submitForm('hello');
  }

  render() {
    if (!vispdatQuestions) {
      return (
        <ScrollView>
          <Text>Loading...</Text>
        </ScrollView>
      );
    }
    return (
      <ScrollView>
        {this.renderQuestions()}
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...FormActions
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Vispdat);
