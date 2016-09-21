import React, { Component, PropTypes } from 'react';
// Components
import { View, StyleSheet, Text } from 'react-native';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';
import DropDown from './ModalPicker';
import TextField from './TextFields';
// Utils
import PureRenderMixin from 'react-addons-pure-render-mixin';

const RENDER_TYPES = {
  CHECKBOX: 'checkbox',
  DROPDOWN: 'dropdown',
  INPUT: 'input',
  RADIO: 'radio'
};

const styles = Object.assign({}, StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 10
  }

}));

class FormQuestion extends Component {
  static propTypes = {
    answers: PropTypes.array,
    children: PropTypes.node,
    question: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
    this.renderAnswerOptions = this._renderAnswerOptions.bind(this);
  }

  _renderAnswerOptions() {
    const { type } = this.props;
    switch (type) {
    case RENDER_TYPES.RADIO: {
      return <RadioGroup items={this.props.answers} />;
    }
    case RENDER_TYPES.DROPDOWN: {
      return <DropDown items={this.props.answers} />;
    }
    case RENDER_TYPES.INPUT: {
      return <TextField />;
    }
    case RENDER_TYPES.CHECKBOX: {
      return <CheckboxGroup items={this.props.answers} />;
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
