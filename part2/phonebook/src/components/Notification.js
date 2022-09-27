const Notification = ({ message }) => {
  const notificationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    padding: 10,
    marginBotton: 10
  }

  if (message === null) {
    return null
  }

  if (/^Error:/.test(message)) {
    return (
      <p style={{...notificationStyle, color: 'red'}}>
        {message.replace('Error:', '')}
      </p>
    )
  }

  return (
    <p style={notificationStyle}>
      {message}
    </p>
  )
}

export default Notification