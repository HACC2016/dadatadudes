// ***NEED TO FIGURE OUT HOW TO SWITCH ON AND OFF AFTER SELECTION***

import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MKRadioButton, MKColor } from 'react-native-material-kit';

const styles = Object.assign({}, StyleSheet.create({

  row: {
    flexDirection: 'row'
  },

  col: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 20, marginRight: 20
  },

  titleText: {
    fontSize: 15,
    fontWeight: 'bold'
  }

}));

class RadioOptions extends Component {

  static propTypes = {
    radioTitle: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.radioGroup = new MKRadioButton.Group();
  }

  render() {
    return (
      <View style={styles.row}>
        <Text style={styles.titleText}>
        {this.props.radioTitle}
        </Text>
        <View style={styles.col}>
          <MKRadioButton
            checked={true}
            group={this.radioGroup}
            fillColor={MKColor.Teal}
            borderOnColor={MKColor.Pink}
            borderOffColor={MKColor.Green}
            rippleColor={MKColor.Blue}
          />
          <Text>Yes</Text>
        </View>
        <View style={styles.col}>
          <MKRadioButton
            group={this.radioGroup}
            fillColor={MKColor.Teal}
            borderOnColor={MKColor.Pink}
            borderOffColor={MKColor.Green}
            rippleColor={MKColor.Blue}
          />
          <Text>No</Text>
        </View>
        <View style={styles.col}>
          <MKRadioButton
            group={this.radioGroup}
            fillColor={MKColor.Teal}
            borderOnColor={MKColor.Pink}
            borderOffColor={MKColor.Green}
            rippleColor={MKColor.Blue}
          />
          <Text>Refuse</Text>
        </View>
      </View>
    );
  }
}

export default RadioOptions;
