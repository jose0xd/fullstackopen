const Filter = ({filter, handler}) => (
  <>
    find countries <input value={filter} onChange={handler} />
  </>
)

export default Filter