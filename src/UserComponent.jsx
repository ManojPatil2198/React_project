const UserComponent = ({ data }) => {
  return (
    <div>
      <h3>
        Name: <span style={{ color: "blue" }}>{data.name}</span>
      </h3>
      <h3>
        Age: <span style={{ color: "pink" }}>{data.age}</span>
      </h3>
      <h3>
        Email: <span style={{ color: "pink" }}>{data.email}</span>
      </h3>
      <h3>
        Id: <span style={{ color: "pink" }}>{data.id}</span>
      </h3>
    </div>
  );
};

export default UserComponent;
