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
  formInputsSelector
} from '../selectors';
import {
  PointInTimeQuestions
} from '../utilities/questions';
import {
  processQuestions
} from '../utilities/helpers';

class PointInTime extends Component {
  static propTypes = {
    addFormField: PropTypes.func,
    formFields: PropTypes.object,
    submitForm: PropTypes.func,
    prefaceText: PropTypes.string,
    answers: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.onPressHandler = this._onPressHandler.bind(this);
    this.renderQuestions = this._renderQuestions.bind(this);
    this.renderPrefaceText = this._renderPrefaceText.bind(this);
  }
  /**
   * Grabs all of the fields from the redux store and dispatches them to the database.
   */
  _onPressHandler() {
    const { formFields, submitForm } = this.props;
    submitForm(formFields);
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

  _renderPrefaceText() {
    const { prefaceText } = PointInTimeQuestions;
    if (!prefaceText) {
      return null;
    }
    return <Text>{prefaceText}</Text>;
  }

  render() {
    if (!PointInTimeQuestions) {
      return (
        <ScrollView>
          <Text>Loading...</Text>
        </ScrollView>
      );
    }
    return (
      <ScrollView>
        {this.renderPrefaceText()}
        <ListView
          initialListSize={1}
          dataSource={processQuestions(PointInTimeQuestions.questions)}
          scrollRenderAhead={250}
          renderRow={this.renderQuestions}
        />
      </ScrollView>
    );
  }
}

// Maps all of the Point In Time Answer options to the prop
const mapStateToProps = (state) => {
  return {
    formFields: formInputsSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...FormActions
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PointInTime);
