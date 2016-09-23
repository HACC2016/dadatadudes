import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import t from 'tcomb-form-native';
const Form = t.form.Form;

const styles = Object.assign({}, StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    margin: 5
  }
}));

const options = {
  fields: {
    birthDate: {
      label: 'Select a date',
      mode: 'date'
    }
  }
};

const Person = t.struct({
  birthDate: t.Date // a date field
});

class DateSelector extends Component {

  static propTypes = {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={Person}
          options={options}
        />
      </View>
    );
  }
}

export default DateSelector;
