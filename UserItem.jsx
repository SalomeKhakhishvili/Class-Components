import React from 'react'

const UserItem = ({id, name, action}) => {
  return (
    <div>
         <div className="user-item">
              <p> ID: {id}</p>
              <p> NAME: {name}</p>

              <button onClick={() => action (id)}>Remove</button>
            </div>
    </div>
  )
}

export default UserItem