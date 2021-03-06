import { useEffect } from 'react'
import ReactDOMServer from 'react-dom/server'
import mapbox from 'mapbox-gl'

export default function MapMarker({ position, map, children, color }) {
  const popup = new mapbox.Popup({ offset: 25 }).setHTML(ReactDOMServer.renderToString(children))
  useEffect(() => {
    const marker = new mapbox.Marker({ color })
      .setLngLat(position)
      .setPopup(popup)
      .addTo(map)

    return () => marker.remove()
  })
  return null
}
