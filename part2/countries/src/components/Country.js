import axios from "axios"
import { useState, useEffect } from "react"

const Country = ({country}) => {
  const [weather, setWeather] = useState({})
  
  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?` +
        `q=${country.name.common}&appid=${api_key}&units=metric`)
      .then(res => setWeather(res.data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return <>
    <h2>{country.name.common}</h2>
    <p>capital {country.capital}</p>
    <p>area {country.area}</p>
    <h4>languages:</h4>
    <ul>
      {Object.values(country.languages).map(l => <li key={l}>{l}</li>)}
    </ul>
    <img src={country.flags.png} alt={`Banderita de ${country.name.common}`} width="250" />
    <h3>Weather in {country.capital}</h3>
    <p>temperature {weather.hasOwnProperty('main') ? weather.main.temp : 'Getting data...'} Celsius</p>
    {weather.hasOwnProperty('weather') &&
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weather icon' />
    }
    <p>wind {weather.hasOwnProperty('wind') ? weather.wind.speed : 'Getting data...'} m/s</p>
  </>
}

export default Country