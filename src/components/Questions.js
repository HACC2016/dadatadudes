import React, { Component, PropTypes } from 'react';
// Components
import { ListView } from 'react-native';
import FormQuestion from './FormQuestion';
import PureRenderMixin from 'react-addons-pure-render-mixin';

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
        dataSource={this.props.questions}
        initialListSize={this.props.questions.size}
        scrollRenderAhead={250}
        renderRow={this.renderQuestions}
      />
    );
  }

}

export default Question;
