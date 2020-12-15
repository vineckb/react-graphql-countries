import * as Styles from './styles'
import CountriesListItem from '../CountriesListItem'

export default function CountriesList({ items }) {
  return (
    <Styles.Wrapper>
      {items.map(item => <CountriesListItem item={item} key={item.numericCode} />)}
    </Styles.Wrapper>
  )
}
