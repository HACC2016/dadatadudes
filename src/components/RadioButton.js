// ***NEED TO FIGURE OUT HOW TO SWITCH ON AND OFF AFTER SELECTION***

import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { MKRadioButton, MKColor } from 'react-native-material-kit';

class RadioOptions extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.radioGroup = new MKRadioButton.Group();
  }

  render() {
    return (
      <View>
        <MKRadioButton
          checked={true}
          group={this.radioGroup}
          fillColor={MKColor.Teal}
          borderOnColor={MKColor.Pink}
          borderOffColor={MKColor.Green}
          rippleColor={MKColor.Blue}
        />
        <Text>Yes</Text>
        <MKRadioButton
          group={this.radioGroup}
          fillColor={MKColor.Teal}
          borderOnColor={MKColor.Pink}
          borderOffColor={MKColor.Green}
          rippleColor={MKColor.Blue}
        />
        <Text>No</Text>
        <MKRadioButton
          group={this.radioGroup}
          fillColor={MKColor.Teal}
          borderOnColor={MKColor.Pink}
          borderOffColor={MKColor.Green}
          rippleColor={MKColor.Blue}
        />
        <Text>Refuse</Text>
      </View>
    );
  }
}

export default RadioOptions;
