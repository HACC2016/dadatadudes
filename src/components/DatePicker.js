import React, { Component, ProptTypes } from 'react';
import {
  TouchableHighlight,
} from 'react-native';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = Object.assign({}, StyleSheet.create({
  text: {
    color: 'black'
  }
}));

import DateModal from './DateModal.js';

class DatePicker extends Component {

  static propTypes = {
    text: ProptTypes.string
  }

  mixins: [PureRenderMixin];

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
