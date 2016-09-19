import React, { Component, PropTypes } from 'react';
// Components
import { View, StyleSheet, Text, InteractionManager } from 'react-native';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup.js';
import DropDown from './ModalPicker.js';
import TextField from './Login/TextFields.js';
// Utils
import * as options from '../utilities/answerOptions.js';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const RENDER_TYPES = {
  CHECKBOX: 'checkbox',
  DROPDOWN: 'dropdown',
  INPUT: 'input',
  RADIO: 'radio'
};

const styles = Object.assign({}, StyleSheet.create({
  container: {
  }
}));

class FormQuestion extends Component {
  static propTypes = {
    answers: PropTypes.string,
    children: PropTypes.node,
    question: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.renderAnswerOptions = this._renderAnswerOptions.bind(this);
    this.state = {
      items: options[ this.props.answers ]
    };
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
      <View style={styles.container}>
        <Text> {this.props.question} </Text>
        {this.renderAnswerOptions()}
      </View>
    );
  }
}

export default FormQuestion;
