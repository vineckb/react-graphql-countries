import { ApolloClient, InMemoryCache } from '@apollo/client'

export default new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
  cache: new InMemoryCache()
})
