import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';
import FormQuestion from '../components/FormQuestion';
import {
  vispdatQuestionsSelector
} from '../selectors';
import {
  View,
  Text,
  ListView
} from 'react-native';

class Section extends Component {

  static propTypes = {
    addFormField: PropTypes.func,
    title: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired,
    prefaceText: PropTypes.string
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

  _renderQuestions() {
    return this.props.questions.map(({ question, type, answers }, key) => (
      <FormQuestion
        key={key}
        question={question}
        type={type}
        answers={answers}
      />
    ));
  }

  _renderPrefaceText() {
    const { prefaceText } = this.props;
    if (!prefaceText) {
      return null;
    }
    return <Text>{prefaceText}</Text>;
  }

  render() {
    return (
      <View>
        <Text> {this.props.title} </Text>
        {this.renderPrefaceText()}
        {this.renderQuestions()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vispdatQuestions: vispdatQuestionsSelector(state)
  };
};

export default connect(mapStateToProps)(Section);
