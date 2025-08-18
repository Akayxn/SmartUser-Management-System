import React, { useState } from "react";
import "./UserTable.css";
import UserRow from "../UserRow/UserRow";
import UserTableData from "./UserTableData";
import Searchbar from "../Searchbar/Searchbar";

function UserTable() {
  const [SearchText, setSearchText] = useState("");

  const filteredUsers = UserTableData.filter(
    (user) =>
      user.username.toLowerCase().includes(SearchText.toLowerCase()) ||
      user.id.toString().includes(SearchText.toString()) ||
      user.email.toLowerCase().includes(SearchText.toLowerCase())
  );

  const handleEdit = (userid) => {
    alert(`Editing the ${userid}`);
  };

  const handleDelete = (userid) => {
    alert(`Deleting the ${userid}`);
  };

  return (
    <div>
      <Searchbar
        SearchText={SearchText}
        onSearchChange={setSearchText}
      ></Searchbar>

      <table className="UserTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>User</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                Not found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
