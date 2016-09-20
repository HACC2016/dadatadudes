import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-native-router-flux';
import App from './app.js';
import apollo from './store/apollo';
import configureStore from './store/configureStore';

export default () => {
  class Root extends Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        store: configureStore(),
        client: apollo
      };
    }
    render() {
      return (
        <Provider store={this.state.store} client={apollo}>
          <App />
        </Provider>
      );
    }
  }

  return Root;
};
