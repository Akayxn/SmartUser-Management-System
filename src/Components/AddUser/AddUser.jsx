import React from 'react'
import "./AddUser.css"
import UserForm from '../UserForm/UserForm'

function AddUser() {
  return (
    <div className="AddUser">
      <h1>Add User</h1>
      <div className="AddUser-Items">
          <UserForm></UserForm>
      </div>

    </div>
  )
}

export default AddUser
