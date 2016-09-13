import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet } from 'react-native';
import { MKCheckbox, MKColor } from 'react-native-material-kit';
import { Actions } from 'react-native-router-flux';

class Checkbox extends Component {

  static propTypes = {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MKCheckbox
        checked={true}
        fillColor={MKColor.Teal}
        borderOnColor={MKColor.Pink}
        borderOffColor={MKColor.Green}
        rippleColor={MKColor.Blue}
      />
    );
  }
}

export default Checkbox;
