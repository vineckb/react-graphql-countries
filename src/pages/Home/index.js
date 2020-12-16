import { useQuery } from '@apollo/client'
import Filter from '../../components/Filter'
import CountriesList from '../../components/CountriesList'
import { loader } from 'graphql.macro'

const query = loader('./query.graphql')

export default function HomePage() {
  const { loading, error, data, fetchMore } = useQuery(query, { variables: { offset: 0 } })

  if (loading) return <p>loading</p>

  if (error) {
    console.error(error.message)
    return <p>{error.message}</p>
  }

  if (!data) return ''

  return (
    <div>
      <Filter />

      <CountriesList
        items={data.Country}
        onLoadMore={() =>
          fetchMore({
            variables: {
              offset: data.Country.length
            },
            updateQuery: (prev, response) => {
              console.log(response)
              const fetchMoreResult = response.fetchMoreResult
              if (!fetchMoreResult) return prev

              return Object.assign({}, prev, {
                Country: [...prev.Country, ...fetchMoreResult.Country]
              })
            }
          })
        }
      />
    </div>
  )
}
