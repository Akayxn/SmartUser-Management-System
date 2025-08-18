import React from 'react'
import "./UserRow.css"

function UserRow(props) {
  return (
    <tr>
        <td>{props.user.id}</td>
        <td>{props.user.username}</td>
        <td>{props.user.email}</td>
        <td>{props.user.address}</td>
        <td>{props.user.phone}</td>
        <td className='buttons'>
            <button className="editBtn" onClick={()=>props.onEdit(props.user.id)}>Edit</button>
            <button className="deleteBtn" onClick={()=>props.onDelete(props.user.id)}>Delete</button> 
        </td>
    </tr>
  )
}

export default UserRow
