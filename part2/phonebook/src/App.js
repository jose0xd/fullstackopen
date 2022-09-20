import { useState } from 'react'

const Numbers = ({persons}) => {
  //console.log(persons);
  return (
    <>
      {persons.map(p=> <p key={p.name}>{p.name}</p>)}
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

	const handleNameChange = (event) => (
		setNewName(event.target.value)
	)

  const addName = (event) => {
    event.preventDefault()
    if (!persons.some(e => e.name === newName)) {
      setPersons(persons.concat({name: newName}))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" onClick={addName}>
              add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons} />
    </div>
  )
}

export default App
