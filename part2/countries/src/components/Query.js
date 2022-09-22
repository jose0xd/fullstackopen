import Country from "./Country"

const Query = ({data}) => {
  if (data.length == 0) {
    return <p>No result</p>
  }
  if (data.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }
  if (data.length > 1) {
    return (
      <ul>
        {data.map(c => <li key={c.cca3}>{c.name.common}</li>)}
      </ul>
    )
  }
  return <Country country={data[0]}/>
}

export default Query