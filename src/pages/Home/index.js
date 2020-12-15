import { useQuery } from '@apollo/client'
import Filter from '../../components/Filter'
import CountriesList from '../../components/CountriesList'
import { loader } from 'graphql.macro'

const query = loader('./query.graphql')

export default function HomePage() {
  const { loading, error, data } = useQuery(query)

  if (loading) return <p>loading</p>

  if (error) {
    console.error(error)
    return <p>{error}</p>
  }

  return (
    <div>
      <Filter />

      <CountriesList items={data} />
    </div>
  )
}
