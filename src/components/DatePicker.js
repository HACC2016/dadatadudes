import React, { Component, ProptTypes } from 'react';
import {
  TouchableHighlight,
} from 'react-native';
import DateModal from './DateModal.js';

class DatePicker extends Component {

  static propTypes = {
    text: ProptTypes.string
  }

  constructor(props) {
    super(props);
    this.componentMount = this._componentMount.bind(this);
  }

  _componentMount({ text }) {
    return (
      <DateModal text={text} />
    );
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.componentMount()}
      />
    );
  }
}

export default DatePicker;
