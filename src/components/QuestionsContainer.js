import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Components
import { View } from 'react-native';
import Questions from './Questions';

class QuestionsContainer extends Component {
  static propTypes = {
    questions: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Questions
          collection={this.props.questions}
        />
      </View>
    );
  }

}

export default QuestionsContainer;
