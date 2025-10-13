 

function AddUser({ setUser }) {  // ✅ props destructuring
  return (
    <div>
      <h3>Add User</h3>
      <input
        type="text"
        onChange={(event) => setUser(event.target.value)}
        placeholder="Enter user name"
      />
      <hr />
    </div>
  );
}

export default AddUser;
