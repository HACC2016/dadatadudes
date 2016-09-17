import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as FormActions from '../actions/Form';
// Components
import FormQuestion from '../components/FormQuestion';
import {
  ScrollView,
  Text,
  ListView
} from 'react-native';
// Selectors
import {
  formInputsSelector,
  pointInTimeAnswersSelector
} from '../selectors';

class PointInTime extends Component {
  static propTypes = {
    addFormField: PropTypes.func,
    formFields: PropTypes.object,
    submitForm: PropTypes.func,
    pointInTimeAnswers: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.onChangeText = this._onChangeText.bind(this);
    this.renderQuestions = this._renderQuestions.bind(this);
    this.onPressHandler = this._onPressHandler.bind(this);
  }

  _onChangeText(value) {
    this.props.addFormField({
      field: 'username',
      value
    });
  }

  _renderQuestions({ question, type, answers }) {
    return (
      <FormQuestion
        question={question}
        type={type}
        answers={answers}
      />
    );
  }

  /**
   * Grabs all of the fields from the redux store and dispatches them to the database.
   */
  _onPressHandler() {
    const { formFields, submitForm } = this.props;
    submitForm(formFields);
  }

  render() {
    const { pointInTimeAnswers } = this.props;
    if (!pointInTimeAnswers) {
      return (
        <ScrollView>
          <Text>Loading...</Text>
        </ScrollView>
      );
    }
    return (
      <ListView
        initialListSize={pointInTimeAnswers.length}
        dataSource={pointInTimeAnswers}
        scrollRenderAhead={250}
        renderRow={this.renderQuestions}
      />
    );
  }
}

// Maps all of the Point In Time Answer options to the prop
const mapStateToProps = (state) => {
  return {
    formFields: formInputsSelector(state),
    pointInTimeAnswers: pointInTimeAnswersSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...FormActions
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PointInTime);
