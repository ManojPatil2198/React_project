//   import ClassComponent from "./ClassComponent"

import { Link,NavLink, Outlet } from "react-router";


// export default function College (){

//  return (
//    <div style={{backgroundColor:"pink",padding:10}}>
//    <h1>College Component</h1>
//    <ClassComponent/>

// </div>
//  )

//  }



export default function College() {
  return (
    <div className="college" style={{ textAlign: "center" }}>
      <h1>College Page</h1>
      <NavLink className="link" to="student">Student</NavLink>
      <NavLink className="link" to="department">Department</NavLink>
      <NavLink className="link" to="detail">College Details</NavLink>

      {/* Nested route content */}
      <Outlet />
    </div>
  );
}

