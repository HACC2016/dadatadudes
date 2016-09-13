import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text } from 'react-native';
import { MKButton, MKColor } from 'react-native-material-kit';
import { Actions } from 'react-native-router-flux';

const styles = Object.assign({}, StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
}));

const buttonType = {
  login: 'Login',
  form: 'Submit'
};

class Button extends Component {

  static propTypes = {}

  render() {
    return (
      <MKButton
        backgroundColor={MKColor.Pink}
        textStyle={styles.buttonText}
        onPress={Actions.home}
        rippleColor={MKColor.Blue}
      >
        <Text
          style={styles.buttonText}
        >
        {buttonType.login}
        </Text>
      </MKButton>
    );
  }

}

export default Button;
