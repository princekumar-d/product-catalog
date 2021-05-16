import { ApolloClient, InMemoryCache } from "@apollo/client";
import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const apiUrl = serverRuntimeConfig.apiUrl || publicRuntimeConfig.apiUrl;

const client = new ApolloClient({
    uri: `http://${apiUrl}/graphql`,
    cache: new InMemoryCache(),
});

export default client;