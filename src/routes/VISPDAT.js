import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FormActions from '../actions/Form/index.js';
import SectionHeader from '../components/VISPDAT/SectionHeader.js';
import TextFields from '../components/Login/TextFields.js';
import RadioButton from '../components/RadioButton.js';

class Vispdat extends Component {

  static propTypes = {
    submitForm: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit() {
    this.props.submitForm('hello');
  }

  render() {
    return (
      <View>
        <SectionHeader text="Basic Information" />
        <TextFields
          question="Fist Name"
        />
        <TextFields
          question="Nickname"
        />
        <TextFields
          question="Last Name"
        />
        <TextFields
          question="In what language do you feel best able to express yourself?"
        />
        <TextFields
          question="Date of Birth"
        />
        <TextFields
          question="Age"
        />
        <TextFields
          question="Social Security Number"
        />
        <RadioButton
          radioTitle="Consent to participate"
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
