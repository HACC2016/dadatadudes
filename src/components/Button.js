import React, { Component, PropTypes } from 'react';
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

class Button extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

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
        {this.props.text}
        </Text>
      </MKButton>
    );
  }

}

export default Button;
