export default function CountryDetails({ item }) {
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.flag.svgFile} alt="" />
      <p><strong>Capital:</strong> {item.capital}</p>
      <p><strong>Area:</strong> {item.area}</p>
      <p><strong>Population:</strong> {item.population}</p>
      <p><strong>Top-level domains:</strong> {item.topLevelDomains.map(({ name }) => name).join(',')}</p>
    </div>
  )
}
