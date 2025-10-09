
function Wrapper({ children, color = 'blue' }) {
  return (
    <div style={{ color: color, border: '2px solid blue', width: "300px", margin: "10px" }}>
      {children}
    </div>
  );
}

export default Wrapper;
