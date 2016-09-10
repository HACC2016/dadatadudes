import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

class Refuse extends Component {

  render() {
    return (
      <TouchableHighlight onPress={Actions.home}>
        <View>
          <Text> MOM I NO LIKE! </Text>
        </View>
      </TouchableHighlight>
    );
  }
}
export default Refuse;
