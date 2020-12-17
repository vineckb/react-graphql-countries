import { useRef, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { loader } from 'graphql.macro'
import mapbox from 'mapbox-gl'
import { MapContainer } from './styles'

const query = loader('./query.graphql')

mapbox.accessToken = 'pk.eyJ1IjoidmluZWNrYiIsImEiOiJja2lzNWhtNXUwcHFnMnFwNDV5MHZsaDlxIn0.IOJkyDCrxaBUpwwGTUXpdg'

export default function NearestCountries({ country }) {
  const node = useRef(null)
  const map = useRef(null)
  const names = country.distanceToOtherCountries.map(item => item.countryName)
  const { data, loading } = useQuery(query, { variables: { names } })

  useEffect(() => {
    map.current = new mapbox.Map({
      container: node.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [country.location.longitude, country.location.latitude],
      zoom: 2
    })
  }, [country])

  useEffect(() => {
    if (loading) return
    country.distanceToOtherCountries.forEach(({ countryName, distanceInKm }) => {
      const item = data.Country.find(item => item.name === countryName)
      const popup = new mapbox.Popup({ offset: 25 }).setHTML(`
        <h3>${countryName}</h3>
        <p>Distance from ${country.name}: ${Math.ceil(distanceInKm)} km</p>
      `)
      new mapbox.Marker()
        .setLngLat([item.location.longitude, item.location.latitude])
        .setPopup(popup)
        .addTo(map.current)
    })
  }, [data, loading, map, country])

  return (
    <div>
      <h3>Top five nearest countries</h3>
      <MapContainer ref={node}></MapContainer>
    </div>
  )
}
