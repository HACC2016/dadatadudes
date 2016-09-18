import React, { Component, PropTypes } from 'react';
import FormQuestion from '../components/FormQuestion';
import {
  View,
  Text,
  ListView
} from 'react-native';
// Selectors
import {
  processQuestions
} from '../utilities/helpers';

class Section extends Component {

  static propTypes = {
    addFormField: PropTypes.func,
    items: PropTypes.object,
    title: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.onChangeText = this._onChangeText.bind(this);
    this.renderQuestions = this._renderQuestions.bind(this);
    this.renderPrefaceText = this._renderPrefaceText.bind(this);
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

  _renderPrefaceText() {
    const prefaceText = this.props.items.prefaceText;
    if (!prefaceText) {
      return null;
    }
    return <Text>{prefaceText}</Text>;
  }

  render() {
    const { title } = this.props;
    return (
      <View>
        <Text> {title} </Text>
        {this.renderPrefaceText()}
        <ListView
          initialListSize={1}
          dataSource={processQuestions(this.props.items.questions)}
          scrollRenderAhead={250}
          renderRow={this.renderQuestions}
        />
      </View>
    );
  }
}

export default Section;
