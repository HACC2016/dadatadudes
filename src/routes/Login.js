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

  constructor(props) {
    super(props);
    this.onClickHandler = this._onClickHandler.bind(this);
  }

  _onClickHandler() {
    // dispatch redux actions.
    console.log('hello');
  }

  render() {
    return (
      <View>
        <Text>Login</Text>
        <TextField />
        <View>
          <Password />
        </View>
        <Button text="Login!" onClick={Actions.home} />
      </View>
    );
  }
}
export default Login;
