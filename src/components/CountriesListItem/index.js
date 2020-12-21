import { Wrapper, Title, Capital, ImageWrapper, Image } from './styles'

export default function CountriesListItem({ item }) {
  return (
    <Wrapper to={`/country/${item.numericCode}`}>
      <ImageWrapper>
        <Image src={item.flag.svgFile} alt="" />
      </ImageWrapper>
      <Title>{item.name}</Title>
      <Capital>{item.capital}</Capital>
    </Wrapper>
  )
}
