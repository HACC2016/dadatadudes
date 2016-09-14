import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FormActions from '../actions/Form/index.js';
import SectionHeader from '../components/VISPDAT/SectionHeader.js';
import TextField from '../components/Login/TextFields.js';
import RadioButton from '../components/RadioButton.js';
import Checkbox from '../components/Checkbox.js';
import DropDown from '../components/DropDown.js';

const styles = Object.assign({}, StyleSheet.create({

  row: {
    flexDirection: 'row'
  },

  col1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20, marginRight: 20
  },

  col2: {
    flex: 2,
    flexDirection: 'column',
    marginLeft: 20, marginRight: 20
  },

  titleText: {
    fontSize: 15,
    fontWeight: 'bold'
  }

}));

class Vispdat extends Component {

  static propTypes = {
    submitForm: PropTypes.func,
    addFormField: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.onSubmit = this._onSubmit.bind(this);
    this.onChangeText = this._onChangeText.bind(this);
    this.persons = [
      { name: 'Boots' },
      { name: 'Alex' },
      { name: 'Kawika' },
      { name: 'Brock' }
    ];
  }

  _onChangeText(value) {
    this.props.addFormField({
      field: 'username',
      value
    });
  }

  _onSubmit() {
    this.props.submitForm('hello');
  }

  render() {
    return (
      <View>
        <SectionHeader sectionTitle="Basic Information" />
        <TextField
          onChangeText={this.onChangeText}
          question="Fist Name"
        />
        <TextField
          onChangeText={this.onChangeText}
          question="Nickname"
        />
        <TextField
          onChangeText={this.onChangeText}
          question="Last Name"
        />
        <TextField
          onChangeText={this.onChangeText}
          question="In what language do you feel best able to express yourself?"
        />
        <TextField
          onChangeText={this.onChangeText}
          question="Date of Birth"
        />
        <TextField
          onChangeText={this.onChangeText}
          question="Age"
        />
        <TextField
          onChangeText={this.onChangeText}
          question="Social Security Number"
        />
        <RadioButton
          radioTitle="Consent to participate"
        />
        <SectionHeader sectionTitle="History of Housing and Homelessness" />
        <Text style={styles.titleText}>Where do you sleep most frequently?</Text>
        <View style={styles.row}>
          <View style={styles.col2}>
            <Checkbox checkOption="Shelters" />
          </View>
          <View style={styles.col2}>
            <Checkbox checkOption="Transitional Housing" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col2}>
            <Checkbox checkOption="Safe Haven" />
          </View>
          <View style={styles.col2}>
            <Checkbox checkOption="Outdoors" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col2}>
            <Checkbox checkOption="Other (specify):" />
            <TextField
              onChangeText={this.onChangeText}
            />
          </View>
          <View style={styles.col2}>
            <Checkbox checkOption="Refused" />
          </View>
        </View>
        <DropDown
          dropDownTitle="How long has it been since you lived in permanent stable housing?"
          items={this.persons}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...FormActions
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Vispdat);
