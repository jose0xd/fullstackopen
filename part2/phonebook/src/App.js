import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const filteredPersons = persons
    .filter(p => p.name.toLowerCase().includes(newFilter.toLowerCase()))

	const handleNameChange = (event) => (
		setNewName(event.target.value)
	)

	const handleNumberChange = (event) => (
		setNewNumber(event.target.value)
  )

	const handleFilterChange = (event) => (
		setNewFilter(event.target.value)
  )

  const addPerson = (event) => {
    event.preventDefault()
    if (!persons.some(e => e.name === newName)) {
      const newId = persons.length + 1
      setPersons(persons.concat({name: newName, number: newNumber, id: newId}))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter newFilter={newFilter} handler={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        name={newName} handleName={handleNameChange} number={newNumber}
        handleNumber={handleNumberChange} addPerson={addPerson} />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App
