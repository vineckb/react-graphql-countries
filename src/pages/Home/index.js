import { useState } from 'react'
import { useQuery } from '@apollo/client'
import Filter from '../../components/Filter'
import CountriesList from '../../components/CountriesList'
import { loader } from 'graphql.macro'

const query = loader('./query.graphql')

export default function HomePage() {
  const [filter, setFilter] = useState('')
  const { loading, error, data, fetchMore } = useQuery(query, { variables: { filter } })

  return (
    <div>
      <Filter onKeyUp={e => setFilter(e.target.value)} />

      { loading && <p>loading</p>}
      { error && <p>{error.message}</p>}

      { data && <CountriesList
        items={data.Country}
        onLoadMore={() =>
          fetchMore({
            variables: {
              offset: data.Country.length
            },
            updateQuery: (prev, response) => {
              const fetchMoreResult = response.fetchMoreResult
              if (!fetchMoreResult) return prev

              return Object.assign({}, prev, {
                Country: [...prev.Country, ...fetchMoreResult.Country]
              })
            }
          })
        }
      />}
    </div>
  )
}
