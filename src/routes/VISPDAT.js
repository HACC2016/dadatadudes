import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

class Vispdat extends Component {

  render() {
    return (
      <TouchableHighlight onPress={Actions.home}>
        <View>
          <Text> ...like if someone has a boa constrictor on person, it would say that they are risky?  </Text>
        </View>
      </TouchableHighlight>
    );
  }
}
export default Vispdat;
