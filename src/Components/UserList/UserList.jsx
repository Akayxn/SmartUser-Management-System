import React from "react";
import "./UserList.css";
import Searchbar from "../Searchbar/Searchbar";
import UserTable from "../UserTable/UserTable";



function UserList() {
  return (
    <div className="UserList">
      <h1>User List</h1>
      <div className="UserList-Items">
         <UserTable></UserTable>
      </div>
    </div>
  );
}

export default UserList;
