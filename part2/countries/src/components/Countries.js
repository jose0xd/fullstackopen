import Country from "./Country"
import ListCountry from "./ListCountry"

const Countries = ({ countries}) => {
  if (countries.length === 0)
    return <p>No result</p>

  if (countries.length > 10)
    return <p>Too many matches, specify another filter</p>

  if (countries.length > 1)
    return countries.map(c => <ListCountry key={c.ccn3} country={c} />)

  return <Country country={countries[0]}/>
}

export default Countries