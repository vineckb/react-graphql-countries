import CountryDetails from '../../components/CountryDetails'
import NearestCountries from '../../components/NearestCountries'

const country = {
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

const nearestCountries = [
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

export default function CountryPage() {
  return (
    <div>
      <CountryDetails item={country} />

      <NearestCountries items={nearestCountries} />
    </div>
  )
}
