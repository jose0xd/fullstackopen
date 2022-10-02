import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)

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

  async function addPerson(event) {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    // actual persons in the server // FIX: two call to api
    let actualPersons = []
    await personService
      .getAll()
      .then(serverPersons => {
        actualPersons = serverPersons
      })

    if (!actualPersons.some(e => e.name === newName)) {
      personService
        .create(personObject)
        .then(returnPerson => setPersons(actualPersons.concat(returnPerson)))
        .then(() => {
          setMessage(`Added ${personObject.name}`)
          setTimeout(() => setMessage(null), 5000)
        })
        .catch((err) => {
          setMessage(`Error:${err}`)
          setTimeout(() => setMessage(null), 5000)
        })
    } else {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)) {
        const modPerson = {...personObject, id: actualPersons.filter(p => p.name === newName)[0].id}
        updatePerson(modPerson)
      }
    }
    setNewName('')
    setNewNumber('')
  }

  const removePerson = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService.remove(id)
        .then(() => {
          setMessage(`${name} was removed`)
          setTimeout(() => setMessage(null), 5000)
        })
        .catch(() => {
          setMessage(`Error:Information of ${name} has already been removed from server`)
          setTimeout(() => setMessage(null), 5000)
        })
      setPersons(persons.filter(p => p.id !== id))
    }
  }

  const updatePerson = (personObject) => {
    personService.update(personObject.id, personObject)
      .then((updatePersons) => {
        setMessage(`${personObject.name}'s number was modified`)
        setTimeout(() => setMessage(null), 5000)
        setPersons(updatePersons)
      })
      .catch(() => {
        setMessage(`Error:Information of ${personObject.name} has already been removed from server`)
        setTimeout(() => setMessage(null, 5000))
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Notification message={message} />
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
