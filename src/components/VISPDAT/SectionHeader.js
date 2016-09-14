import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = Object.assign({}, StyleSheet.create({

  titleText: {
    fontSize: 25,
    fontWeight: 'bold'
  }

}));

class SectionHeader extends Component {

  static propTypes = {
    sectionTitle: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.titleText}>
        {this.props.sectionTitle}
        </Text>
      </View>
    );
  }
}

export default SectionHeader;
