const Country = ({country}) => (
  <>
    <h2>{country.name.common}</h2>
    <p>capital {country.capital}</p>
    <p>area {country.area}</p>
    <h3>languages:</h3>
    <ul>
      {Object.values(country.languages).map(l => <li key={l}>{l}</li>)}
    </ul>
    <img src={country.flags.png} width="250"></img>
  </>
)

export default Country