import ApolloClient, { createNetworkInterface } from 'apollo-client';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://rlk7p3dxd8.execute-api.us-west-1.amazonaws.com/production/graphql' }),
});

export default client;
