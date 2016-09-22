import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
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
        <ApolloProvider store={this.state.store} client={apollo}>
          <App />
        </ApolloProvider>
      );
    }
  }

  return Root;
};
