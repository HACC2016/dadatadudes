import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import t from 'tcomb-form-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { addFormField } from '../actions/Form';
const Form = t.form.Form;

const styles = Object.assign({}, StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    margin: 5
  }
}));

const options = {
  fields: {
    sightingDate: {
      label: 'Select a date',
      mode: 'date'
    }
  }
};

const Person = t.struct({
  sightingDate: t.Date // a date field
});

class DateSelector extends Component {

  static propTypes = {
    addFormField: PropTypes.func,
    field: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.onChangeHandler = this._onChangeHandler.bind(this);
  }

  _onChangeHandler(value) {
    this.props.addFormField({
      field: this.props.field,
      value: value.sightingDate
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          onChange={this.onChangeHandler}
          type={Person}
          options={options}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addFormField
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(DateSelector);
