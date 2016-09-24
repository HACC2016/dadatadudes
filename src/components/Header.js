import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = Object.assign({}, StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: 'red',
    height: 5
  }
}));

class Header extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }

}

export default Header;
