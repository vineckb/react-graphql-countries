import { render, screen } from '@testing-library/react'
import Component from '.'

const data = {
  "numericCode": "076",
  "name": "Brazil",
  "flag": {
    "svgFile": "https://restcountries.eu/data/bra.svg"
  },
  "capital": "Brasília",
  "area": 8515767,
  "population": 206135893,
  "topLevelDomains": [
    {
      "name": ".br"
    }
  ]
}

test('should have wrapper element', () => render(<Component item={data} />))
test('should have name', () => render(<Component item={data} />))
test('should have flag', () => render(<Component item={data} />))
test('should have capital', () => render(<Component item={data} />))
test('should have area', () => render(<Component item={data} />))
test('should have population', () => render(<Component item={data} />))
test('should have top-level domains', () => render(<Component item={data} />))
