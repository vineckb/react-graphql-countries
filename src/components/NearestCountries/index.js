import { useRef, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { loader } from 'graphql.macro'
import mapbox from 'mapbox-gl'
import { MapContainer } from './styles'

const query = loader('./query.graphql')

mapbox.accessToken = 'pk.eyJ1IjoidmluZWNrYiIsImEiOiJja2lzNWhtNXUwcHFnMnFwNDV5MHZsaDlxIn0.IOJkyDCrxaBUpwwGTUXpdg'

export default function NearestCountries({ country }) {
  const node = useRef(null)
  const names = country.distanceToOtherCountries.map(item => item.countryName)
  const { data } = useQuery(query, { variables: { names } })

  useEffect(() => {
    const map = new mapbox.Map({
      container: node.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [country.location.longitude, country.location.latitude],
      zoom: 2
    })

    if (!data) return

    country.distanceToOtherCountries.forEach(({ countryName }) => {
      const item = data.Country.find(item => item.name === countryName)

      new mapbox.Marker()
        .setLngLat([item.location.longitude, item.location.latitude])
        .addTo(map)
    })
  }, [country, data])

  return (
    <div>
      <h3>Top five nearest countries</h3>
      <MapContainer ref={node}></MapContainer>
    </div>
  )
}
