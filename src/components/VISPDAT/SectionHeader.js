import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

class SectionHeader extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

export default SectionHeader;
