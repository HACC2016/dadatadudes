import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// Components
import { View, Text } from 'react-native';
import Questions from './Questions';
import { processQuestions } from '../utilities/helpers';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class QuestionsContainer extends Component {
  static propTypes = {
    questions: PropTypes.object,
    prefaceText: PropTypes.string
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.renderPrefaceText = this._renderPrefaceText.bind(this);
  }

  _renderPrefaceText() {
    if (this.props.prefaceText) {
      return (<Text>{this.props.prefaceText}</Text>);
    }
    return null;
  }

  render() {
    return (
      <View>
        {this.renderPrefaceText()}
        <Questions
          questions={processQuestions(this.props.questions)}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(QuestionsContainer);
