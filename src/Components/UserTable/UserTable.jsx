import React, { useState, useEffect } from "react";
import "./UserTable.css";
import axios from "axios";
import UserRow from "../UserRow/UserRow";
import Searchbar from "../Searchbar/Searchbar";

function UserTable() {
  const [SearchText, setSearchText] = useState("");
  const [users, setUsers] = useState([]);
  const filteredUsers = users.filter(
    (user) =>
      (user.firstName + " " + user.lastName)
        .toLowerCase()
        .includes(SearchText.toLowerCase()) ||
      user.id.toString().includes(SearchText.toString()) ||
      user.email.toLowerCase().includes(SearchText.toLowerCase())
  );
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerpage = 5;
  const indexofLastUser = currentPage * usersPerpage;
  const indexofFirstUser = indexofLastUser - usersPerpage;
  const currentUsers = filteredUsers.slice(indexofFirstUser, indexofLastUser);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://dummyjson.com/users");
        console.log("ApI response ", response.data.users);
        setUsers(response.data.users);
        setLoading(false);
      } catch (error) {
        console.log("Error in ", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const totalPages = Math.ceil(filteredUsers.length / usersPerpage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleEdit = (userid) => {
    alert(`Editing the ${userid}`);
  };

  const handleDelete = (userid) => {
    alert(`Deleting the ${userid}`);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
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
          {currentUsers.length > 0 ? (
            currentUsers.map((user) => (
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

      <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default UserTable;
