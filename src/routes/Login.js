import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';
import Button from '../components/Button';
import t from 'tcomb-form-native';
const Form = t.form.Form;

const styles = Object.assign({}, StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flexDirection: 'column',
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#d6d7',
    padding: 50,
    backgroundColor: '#ffffff'
  },
  row: {
    flexDirection: 'row'
  },
  col: {
    flexDirection: 'column'
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    paddingBottom: 30,
    fontSize: 90,
    fontWeight: '300'
  }
}));

const options = {
  fields: {
    name: {
      password: true,
      label: 'Password'
    }
  }
};

const Person = t.struct({
  email: t.String,
  name: t.String
});

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
      <View style={styles.base}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.text}>H.O.M.E.</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Form
            ref="form"
            type={Person}
            options={options}
          />
          <Button text="Login" onClick={Actions.home} />
        </View>
      </View>
    );
  }
}
export default Login;
