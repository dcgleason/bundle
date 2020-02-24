import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
    uri: 'https://bundle-messages.herokuapp.com/v1/graphql',
    fetch
});