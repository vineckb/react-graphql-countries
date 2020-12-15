import Filter from '../../components/Filter'
import CountriesList from '../../components/CountriesList'

const data = [
  {
    "numericCode": "008",
    "name": "Albania",
    "capital": "Tirana",
    "flag": {
      "svgFile": "https://restcountries.eu/data/alb.svg"
    }
  },
  {
    "name": "Algeria",
    "numericCode": "012",
    "capital": "Algiers",
    "flag": {
      "svgFile": "https://restcountries.eu/data/dza.svg"
    }
  }
]

export default function HomePage() {
  return (
    <div>
      <Filter />

      <CountriesList items={data} />
    </div>
  )
}
