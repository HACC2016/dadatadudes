import React, { Component, PropTypes } from 'react';
// Components
import { View } from 'react-native';
import QuestionsContainer from './QuestionsContainer';
import Header from './Header';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Form extends Component {
  static propTypes = {
    prefaceText: PropTypes.string,
    questions: PropTypes.object,
    section: PropTypes.object,
    sectionTitle: PropTypes.string
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Header
          text={this.props.sectionTitle}
        />
        <QuestionsContainer />
      </View>
    );
  }
}

export default Form;
