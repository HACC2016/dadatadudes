import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import {
  MKTextField,
  MKColor,
  mdl,
} from 'react-native-material-kit';

const styles = Object.assign({}, StyleSheet.create({
  textfield: {
    height: 28,
    marginTop: 32
  },

  textfieldWithFloatingLabel: {
    height: 48,
    marginTop: 10
  }

}));

export default const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Username')
  .withStyle(styles.textfieldWithFloatingLabel)
  .withFloatingLabelFont({
    fontSize: 10,
    fontStyle: 'bold',
    fontWeight: '200',
  })
  .build();