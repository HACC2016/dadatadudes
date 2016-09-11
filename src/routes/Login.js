import React, { Component, PropTypes } from 'react';
import {
  Animated
  View,
  Text,
  Image,
  Navigator
} from 'react-native';
import TextField
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
