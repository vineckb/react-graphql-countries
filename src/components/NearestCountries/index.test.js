import { render, screen } from '@testing-library/react'
import Component from '.'

const data = [
  {
    "distanceInKm": 1333.0445603821204,
    "countryName": "Bolivia (Plurinational State of)"
  },
  {
    "distanceInKm": 1481.9677422904354,
    "countryName": "Paraguay"
  },
  {
    "distanceInKm": 1562.413522321208,
    "countryName": "Suriname"
  },
  {
    "distanceInKm": 1574.1741073802189,
    "countryName": "French Guiana"
  },
  {
    "distanceInKm": 1727.7054803482656,
    "countryName": "Guyana"
  }
]

test('should have map with distance between the 5 nearest countries', () => render(<Component item={data} />))
