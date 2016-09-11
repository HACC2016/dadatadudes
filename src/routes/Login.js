import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';
import TextField from '../components/Login/TextFields.js';
import Password from '../components/Login/TextFieldPassword.js';


class Login extends Component {

  render() {
    return (
      <View>
        <Text>Login</Text>
        <TextField />
        <Password />
      </View>
    );
  }
}
export default Login;
