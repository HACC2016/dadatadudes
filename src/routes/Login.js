import React, { Component } from 'react';
import {
  View
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';
import TextField from '../components/TextFields';
import Password from '../components/TextFieldPassword';
import Button from '../components/Button';

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
