function DisplayUser({ user }) {
  return (
    <div>
      <h3>Display User</h3>
      <p>User Name: {user ? user : "No user added yet"}</p>
    </div>
  );
}

export default DisplayUser;
