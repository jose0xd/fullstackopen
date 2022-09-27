import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

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
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    if (!persons.some(e => e.name === newName)) {
      personService
        .create(personObject)
        .then(returnPerson => setPersons(persons.concat(returnPerson)))
    } else {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)) {
        const modPerson = {...personObject, id: persons.filter(p => p.name === newName)[0].id}
        updatePerson(modPerson)
        setPersons(persons.map(p => p.name !== newName ? p : modPerson))
      }
    }
    setNewName('')
    setNewNumber('')
  }

  const removePerson = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService.remove(id)
      setPersons(persons.filter(p => p.id !== id))
    }
  }

  const updatePerson = (personObject) => {
    personService.update(personObject.id, personObject)
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
      <Persons persons={filteredPersons} removePerson={removePerson} />
    </div>
  )
}

export default App
