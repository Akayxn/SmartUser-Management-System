import React from 'react'
import "./Activity.css"

function Activity(props) {
  return (
   <div className="Activity">

        <div className="profileIcon">
          <img src={props.profileImg} alt="" /></div>
        <div className="Activity-log">
          <p className='username'>{props.username} <span>{props.action}</span> </p>
          <p className='time'>{props.time}</p>
        </div>

   </div>
  )
}

export default Activity
