import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MKCheckbox, MKColor } from 'react-native-material-kit';

class Checkbox extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <MKCheckbox
          checked={true}
          fillColor={MKColor.Teal}
          borderOnColor={MKColor.Pink}
          borderOffColor={MKColor.Green}
          rippleColor={MKColor.Blue}
        />
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

export default Checkbox;
