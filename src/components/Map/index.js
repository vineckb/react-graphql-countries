import React, { useState, useRef, useEffect } from 'react'
import mapbox from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Container } from './styles'

mapbox.accessToken = 'pk.eyJ1IjoidmluZWNrYiIsImEiOiJja2lzNWhtNXUwcHFnMnFwNDV5MHZsaDlxIn0.IOJkyDCrxaBUpwwGTUXpdg'

export default function Map({ center, children }) {
  const node = useRef(null)
  const map = useRef(null)
  useEffect(() => {
    map.current = new mapbox.Map({
      container: node.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: 2
    })
    return () => map.current.remove()
  }, [center, node])

  const [elements, setElements] = useState([])
  useEffect(() => {
    setElements(React.Children
      .toArray(children)
      .map(element => React.cloneElement(element, { map: map.current })))
  }, [children])

  return (
    <div>
      <Container ref={node}>
        {map && elements}
      </Container>
    </div>
  )
}
