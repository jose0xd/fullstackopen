const PersonForm = ({name, handleName, number, handleNumber, addPerson}) => (
  <form onSubmit={addPerson}>
    <div>
      name: <input value={name} onChange={handleName} required />
    </div>
    <div>
      number: <input value={number} onChange={handleNumber} required />
    </div>
    <div>
      <button>
          add
      </button>
    </div>
  </form>
)

export default PersonForm