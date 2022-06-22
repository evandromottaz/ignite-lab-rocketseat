import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o01ass00ci01z75kcs0onh/master',
    cache: new InMemoryCache()
})