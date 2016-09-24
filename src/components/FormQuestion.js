import React, { Component, PropTypes } from 'react';
// Components
import { View, StyleSheet, Text } from 'react-native';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';
import DropDown from './ModalPicker';
import TextField from './TextFields';
import DateSelector from './DateSelector';
// Utils
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Style from '../utilities/styles.js';

const RENDER_TYPES = {
  CHECKBOX: 'checkbox',
  DROPDOWN: 'dropdown',
  INPUT: 'input',
  RADIO: 'radio',
  DATE: 'date'
};


const styles = Object.assign({}, StyleSheet.create({
  container: {
    marginVertical: Style.MARGIN_VERTICAL
  },
  font: {
    fontSize: Style.FONT_SIZE
  }
}));

class FormQuestion extends Component {
  static propTypes = {
    answers: PropTypes.array,
    children: PropTypes.node,
    question: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    field: PropTypes.string,
    value: PropTypes.string
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.renderAnswerOptions = this._renderAnswerOptions.bind(this);
    this.renderQuestion = this._renderQuestion.bind(this);
  }

  _renderAnswerOptions() {
    const { type } = this.props;
    switch (type) {
    case RENDER_TYPES.RADIO: {
      return <RadioGroup items={this.props.answers} field={this.props.field} />;
    }
    case RENDER_TYPES.DROPDOWN: {
      return <DropDown items={this.props.answers} field={this.props.field} />;
    }
    case RENDER_TYPES.INPUT: {
      return <TextField field={this.props.field} question={this.props.question} />;
    }
    case RENDER_TYPES.DATE: {
      return <DateSelector field={this.props.field} />;
    }
    case RENDER_TYPES.CHECKBOX: {
      return <CheckboxGroup items={this.props.answers} field={this.props.field} />;
    }
    default:
      return '';
    }
  }

  _renderQuestion() {
    const { type, question } = this.props;
    if (type !== 'input') {
      return (
        <Text style={styles.font}>{question}</Text>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderQuestion()}
        {this.renderAnswerOptions()}
      </View>
    );
  }
}

export default FormQuestion;
