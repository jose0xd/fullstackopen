const Filter = ({newFilter, handler}) => (
  <>
    filter shown with <input value={newFilter} onChange={handler} />
  </>
)

export default Filter