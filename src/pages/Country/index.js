import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import CountryDetails from '../../components/CountryDetails'
import NearestCountries from '../../components/NearestCountries'
import { loader } from 'graphql.macro'

const query = loader('./query.graphql')

export default function CountryPage() {
  const { numericCode } = useParams()
  const { loading, error, data } = useQuery(query, { variables: { numericCode } })

  if (loading) return <p>loading</p>

  if (error) {
    console.error(error)
    return <p>{error}</p>
  }

  const country = data.Country[0]

  return (
    <div>
      <CountryDetails item={country} />

      <NearestCountries country={country} />
    </div>
  )
}
