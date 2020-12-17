import { ApolloClient, InMemoryCache } from '@apollo/client'
import { offsetLimitPagination } from '@apollo/client/utilities'

export default new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Country: offsetLimitPagination(["filter"])
        }
      }
    }
  })
})
