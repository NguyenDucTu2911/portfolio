import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL
})

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});