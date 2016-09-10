import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface('http://localhost:8080/graphql');

export default new ApolloClient({
  networkInterface
});
