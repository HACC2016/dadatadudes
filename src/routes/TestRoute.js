import React, { Component, PropTypes } from 'react';
import {
  View
} from 'react-native';
import Header from '../components/Header';
import FormContainer from '../components/FormContainer';

class TestRoute extends Component {
  static propTypes = {
    routeName: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  _onClickHandler() {
    // dispatch redux actions.
    console.log('hello');
  }

  render() {
    return (
      <View>
        <Header
          name={this.props.routeName}
        />
        <FormContainer />
      </View>
    );
  }
}
export default TestRoute;
