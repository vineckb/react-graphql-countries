import { Link } from 'react-router-dom'

export default function CountriesListItem({ item }) {
  return (
    <li>
      <Link to={`/country/${item.numericCode}`}>
        <img src={item.flag.svgFile} alt="" />
        <h3>{item.name}</h3>
        <p>{item.capital}</p>
      </Link>
    </li>
  )
}
