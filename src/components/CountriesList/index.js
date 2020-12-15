import CountriesListItem from '../CountriesListItem'

export default function CountriesList({ items }) {
  return (
    <ul>
      {items.map(item => <CountriesListItem item={item} key={item.numericCode} />)}
    </ul>
  )
}
