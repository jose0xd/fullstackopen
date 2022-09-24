import {useState} from 'react'
import Country from './Country'

const ListCountry = ({country}) => {
  const [render, setRender] = useState(false)

  return (
      <div>
        <p>
          {country.name.common}
          <button onClick={() => setRender(!render)} >
            {render ? 'hide' : 'show'}
          </button>
        </p>
        {render && <Country country={country} />}
      </div>
    )
}

export default ListCountry