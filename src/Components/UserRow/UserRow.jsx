import React from 'react'
import "./UserRow.css"

function UserRow(props) {
  return (
    <tr>
        <td>{props.user.id}</td>
        <td>{props.user.firstName + " " + props.user.lastName}</td>
        <td>{props.user.email}</td>
        <td>{props.user.address.country}</td>
        <td>{props.user.phone}</td>
        <td className='Action-buttons'>
            <button className="editBtn" onClick={()=>props.onEdit(props.user.id)}>Edit</button>
            <button className="deleteBtn" onClick={()=>props.onDelete(props.user.id)}>Delete</button> 
        </td>
    </tr>
  )
}

export default UserRow
