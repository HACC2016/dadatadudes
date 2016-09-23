import React, { Component, PropTypes } from 'react';
// Components
import { ListView, StyleSheet } from 'react-native';
import FormQuestion from './FormQuestion';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = Object.assign({}, StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 70
  }
}));

class Question extends Component {
  static propTypes = {
    questions: PropTypes.object
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.renderQuestions = this._renderQuestions.bind(this);
  }

  _renderQuestions(item) {
    return (
      <FormQuestion
        question={item.question}
        type={item.type}
        answers={item.answers}
        value={item.value}
        field={item.field}
      />
    );
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.props.questions}
        initialListSize={this.props.questions.size}
        scrollRenderAhead={250}
        renderRow={this.renderQuestions}
      />
    );
  }

}

export default Question;
