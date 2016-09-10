import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Navigator
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

class Login extends Component {

  render() {
    return (
      <TouchableHighlight onPress={Actions.home}>
        <View>
          <Text> E komo mai my sistah </Text>
        </View>
      </TouchableHighlight>
    );
  }
}
export default Login;
