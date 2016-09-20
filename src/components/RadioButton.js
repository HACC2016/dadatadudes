import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MKRadioButton, MKColor } from 'react-native-material-kit';

const styles = Object.assign({}, StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }

}));

class RadioButton extends Component {

  static propTypes = {
    group: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { text, group } = this.props;
    return (
      <View style={styles.container}>
        <MKRadioButton
          group={group}
          fillColor={MKColor.Teal}
          borderOnColor={MKColor.Pink}
          borderOffColor={MKColor.Green}
          rippleColor={MKColor.Blue}
        />
        <Text>{text}</Text>
      </View>
    );
  }
}

export default RadioButton;
