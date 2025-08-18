import React from 'react'
import "./Searchbar.css"

function Searchbar(props) {
  return (
    <div className="Searchbar">
        <input type="text" 
        placeholder='Search users by name, id , ...'
        className='search-input'
        onChange={(e)=>{props.onSearchChange(e.target.value)}}
        />


    </div>
  )
}

export default Searchbar
