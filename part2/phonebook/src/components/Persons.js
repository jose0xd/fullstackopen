const Persons = ({persons, removePerson}) => {

  return (
  <>
    { persons.map(p =>
      <p key={p.id}>
        {p.name} {p.number}
        <button onClick={() => removePerson(p.id, p.name)}>delete</button>
      </p>) }
  </> )
}

export default Persons