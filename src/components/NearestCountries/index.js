import { useQuery } from '@apollo/client'
import { loader } from 'graphql.macro'
import Map from '../Map'
import Marker from '../Map/Marker'

const query = loader('./query.graphql')

export default function NearestCountries({ country }) {
  let items = []
  const { data } = useQuery(query, {
    variables: {
      names: country.distanceToOtherCountries.map(item => item.countryName)
    }
  })

  if (data) {
    items = country.distanceToOtherCountries.map(({ distanceInKm, countryName }) => ({
      ...data.Country.find(item => item.name === countryName),
      distanceInKm
    }))
  }

  return (
    <div>
      <h3>Top five nearest countries</h3>
      { items.length && <Map center={[country.location.longitude, country.location.latitude]}>
        {items.map((item, index) =>
          <Marker key={index} position={[item.location.longitude, item.location.latitude]}>
            <h3>{item.name}</h3>
            <p>Distance from {country.name}: {Math.ceil(item.distanceInKm)} km</p>
          </Marker>
        )}
        <Marker color="green" position={[country.location.longitude, country.location.latitude]}>
          <h3>{country.name}</h3>
        </Marker>
      </Map>}
    </div>
  )
}
