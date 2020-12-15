import * as Styles from './styles'

export default function CountriesListItem({ item }) {
  return (
    <Styles.Wrapper to={`/country/${item.numericCode}`}>
      <Styles.ImageWrapper>
        <Styles.Image src={item.flag.svgFile} alt="" />
      </Styles.ImageWrapper>
      <Styles.Title>{item.name}</Styles.Title>
      <Styles.Capital>{item.capital}</Styles.Capital>
    </Styles.Wrapper>
  )
}
