import React, { Component, PropTypes } from 'react';
// Components
import { View, Text } from 'react-native';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup.js';
import DropDown from './DropDown';
import TextField from './Login/TextFields.js';
// import SectionHeader from './SectionHeader.js';
// Utils
import * as options from '../utilities/answerOptions.js';

const RENDER_TYPES = {
  CHECKBOX: 'checkbox',
  DROPDOWN: 'dropdown',
  INPUT: 'input',
  RADIO: 'radio',
  TITLE: 'sectionTitle'
};

class FormQuestion extends Component {

  static propTypes = {
    question: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    answers: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.renderAnswerOptions = this._renderAnswerOptions.bind(this);
    this.getAnswersCollection = this._getAnswersCollection.bind(this);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    this.getAnswersCollection();
  }

  shouldComponentUpdate(nextProps) {
    console.log('FORM QUESTION next props', nextProps);
    return false;
  }

  _getAnswersCollection() {
    const { answers } = this.props;
    return this.setState({
      items: options[ answers ]
    });
  }

  _renderAnswerOptions() {
    const { type } = this.props;
    switch (type) {
    case RENDER_TYPES.RADIO: {
      return <RadioGroup items={this.state.items} />;
    }
    case RENDER_TYPES.DROPDOWN: {
      return <DropDown items={this.state.items} />;
    }
    case RENDER_TYPES.INPUT: {
      return <TextField />;
    }
    case RENDER_TYPES.CHECKBOX: {
      return <CheckboxGroup items={this.state.items} />;
    }
    default:
      return '';
    }
  }

  render() {
    return (
      <View>
        <Text> {this.props.question} </Text>
        {this.renderAnswerOptions()}
      </View>
    );
  }
}

export default FormQuestion;
