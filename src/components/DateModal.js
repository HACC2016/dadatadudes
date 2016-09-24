import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { addFormField } from '../actions/Form';
import {
  DatePickerAndroid,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

const styles = Object.assign({}, StyleSheet.create({
  text: {
    color: 'black'
  }
}));

class DatePicker extends Component {

  static propTypes = {
    addFormField: PropTypes.func,
    field: PropTypes.string,
    text: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.showPicker = this._showPicker.bind(this);

    this.state = {
      presetDate: new Date(2016, 1, 1),
      allDate: new Date(2020, 4, 5),
      simpleText: 'Select a date'
    };
  }

  _showPicker = async (stateKey, options) => {
    try {
      const newState = {};
      const { action, year, month, day } = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[ `${stateKey} Text` ] = 'dismiess';
      } else {
        const date = new Date(year, month, day);
        newState[ `${stateKey} Text` ] = date.toLocalDateString();
        newState[ `${stateKey} Date` ] = date;
        console.log('date', date);
        this.props.addFormField({
          field: this.props.field,
          value: date.toString()
        });
      }
      this.setState(newState);
    } catch ({ code, message }) {
      console.warn(`Error in example '${stateKey}' : `, message);
    }
  };

  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
        <TouchableWithoutFeedback
          onPress={this.showPicker({ date: this.state.simpleDate })}
        >
          <Text style={styles.text}>{this.state.simpleText}</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addFormField
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(DatePicker);
