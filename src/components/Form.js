import React, { Component, PropTypes } from 'react';
// Components
import { View } from 'react-native';
import QuestionsContainer from './QuestionsContainer';
// import FormNavigation from './FormNavigation';
import Header from './Header';

class Form extends Component {
  static propTypes = {
    questions: PropTypes.array,
    section: PropTypes.string
  };

  constructor(props) {
    super(props);
  }
        // <FormNavigation />

  render() {
    return (
      <View>
        <Header
          name={this.props.section}
        />
        <QuestionsContainer
          questions={this.props.questions}
        />
      </View>
    );
  }
}

export default Form;
