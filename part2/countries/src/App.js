import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter';
import Countries from './components/Countries';


const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => setCountries(res.data))
  }, [])

  // console.log(countries.map(c => console.log(c.name.common)))
  const filteredCountries = countries
    .filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()))

  const handleFilterChange = (event) => (
		setFilter(event.target.value)
  )

  return (
    <>
      <Filter filter={filter} handler={handleFilterChange} />
      <Countries countries={filteredCountries} /> 
    </>
  )
}

export default App;
