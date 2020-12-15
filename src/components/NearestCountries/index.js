export default function NearestCountries({ items }) {
  return (
    <div>
      <h3>Top five nearest countries</h3>
      <ul>
        {items.map((item, index) => <li key={index}>{item.countryName} - {item.distanceInKm}</li>)}
      </ul>
    </div>
  )
}
