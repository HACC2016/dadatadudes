import React, { Component, PropTypes } from 'react';
// Components
import { ListView, InteractionManager } from 'react-native';
import FormQuestion from './FormQuestion';

class Question extends Component {
  static propTypes = {
    questions: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: false
    };
    this.renderQuestions = this.renderQuestions.bind(this);
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.setState({
        dataSource: ds.cloneWithRows(this.props.questions)
      });
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

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        initialListSize={1}
        scrollRenderAhead={250}
        renderRow={this.renderQuestions}
      />
    );
  }

}

export default Question;
