import React, { useState } from 'react'

const Addition = props => {
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target
      
        setUser({ ...user, [name]: value })
      }
  return (
    <form
  onSubmit={event => {
    event.preventDefault()
    if (!user.name || !user.username) return

    props.addUser(user)
    setUser(initialFormState)
  }}
>
  <label>Titre du video</label>
  <input type="text" name="name" value={user.name} onChange={handleInputChange} />
  <label>Chanteur</label>
  <input type="text" name="username" value={user.username} onChange={handleInputChange} />
  <button>Ajouter Video</button>
</form>
  )
}

export default Addition