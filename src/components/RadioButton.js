import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet } from 'react-native';
import { MKRadioButton, MKColor } from 'react-native-material-kit';
import { Actions } from 'react-native-router-flux';

class RadioButton extends Component {

  static propTypes = {}

  constructor(props) {
    super(props);
    this.radioGroup = new MKRadioButton.Group();
  }

  render() {
    return (
      <MKRadioButton
        // checked={true}
        group={this.radioGroup}
        fillColor={MKColor.Teal}
        borderOnColor={MKColor.Pink}
        borderOffColor={MKColor.Green}
        rippleColor={MKColor.Blue}
      />
    );
  }
}

export default RadioButton;
