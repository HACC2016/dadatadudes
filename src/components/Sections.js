import React, { Component, PropTypes } from 'react';
import FormQuestion from '../components/FormQuestion';
import {
  View,
  Text,
  ListView,
  StyleSheet
} from 'react-native';
// Selectors
import {
  processQuestions
} from '../utilities/helpers';

const styles = Object.assign({}, StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row'
  },
  col: {
    flex: 2,
    flexDirection: 'column'
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: '300'
  },
  sectionHeader: {
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    margin: 10
  }

}));

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
      <View style={styles.container}>
        <View style={styles.col}>
          <View style={styles.sectionHeader}>
            <Text style={styles.text}> {title} </Text>
          </View>
          {this.renderPrefaceText()}
          <ListView
            initialListSize={1}
            dataSource={processQuestions(this.props.items.questions)}
            scrollRenderAhead={250}
            renderRow={this.renderQuestions}
          />
        </View>
      </View>
    );
  }
}

export default Section;
