import React from "react";

const users = [
  { id: 1, name: "Bhargavi", email: "bhargavi@example.com", role: "USER" },
  { id: 2, name: "Aadhya Sharma", email: "aadhya.sharma@example.com", role: "USER" },
  { id: 3, name: "Lalitha Benerji", email: "Lalitha@example.com", role: "ADMIN" },
  { id: 4, name: "Sneha Patel", email: "sneha.patel@example.com", role: "USER" },
  { id: 5, name: "Karan Singh", email: "karan.singh@example.com", role: "USER" },
  { id: 6, name: "Divya Rao", email: "divya.rao@example.com", role: "ADMIN" },
  { id: 7, name: "Test User", email: "testuser9876@example.com", role: "USER" },
  { id: 8, name: "John Doe", email: "John@example.com", role: "USER" },
  { id: 9, name: "Wednesday Adams", email: "Adams@example.com", role: "USER" },
];

const ManageUsersPage = ({ setPage }) => {
  const handleEdit = (user) => {
    alert(`Edit user: ${user.name}`);
  };

  const handleDelete = (user) => {
    if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
      alert(`${user.name} deleted (simulation)`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage Users</h2>
      <button
        onClick={() => setPage("admin-dashboard")}
        style={{
          marginBottom: "20px",
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Back to Dashboard
      </button>

      <table
        border="1"
        cellPadding="8"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleEdit(user)} style={{ marginRight: "8px" }}>Edit</button>
                <button onClick={() => handleDelete(user)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsersPage;
