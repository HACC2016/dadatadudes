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
import Button from '../components/Button.js';


class Login extends Component {

  render() {
    return (
      <View>
        <Text>Login</Text>
        <TextField />
        <View>
          <Password />
        </View>
        <Button />
      </View>
    );
  }
}
export default Login;
