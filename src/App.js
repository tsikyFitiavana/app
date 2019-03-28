import React, { useState } from 'react'
import Interface from './Vue/Interface/Interface'
import Addition from './Vue/Addition/Addition'
import Upload from './Vue/Upload/Upload'

const App = () => {
  const usersData = [
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <Upload/>
          <Addition addUser={addUser} />
        </div>
        <div className="flex-large">
          <Interface users={users} />
        </div>
      </div>
    </div>
  )
}

export default App