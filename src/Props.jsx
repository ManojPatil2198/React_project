// what is props in react?
// props are used to pass data from one component to another component
// props are read only
// props are immutable
// props are used to pass data from parent to child component 
// it is like as a parameter in function 
//import  Props  from "./Props";

  
// function Props({ user }) {
//     return (
//         <div>
//              <hr/>
//             {/* <h2> Name:{name}</h2>
//             <h2>Age:{age}</h2>
//             <h2> email:{email}</h2> */}
//             {/* <Props/> */}
           
//         {/* with using object */}
//          <h2>Name:{user.name}</h2>
//          <h2>Age:{user.age}</h2>
//          <h2>Email:{user.email}</h2>


//         </div>
//     )
// }

// what is  default props in react?
// default props are used to set default value for props
// if we do not pass any value to props then it will take default value
// it is used to avoid undefined value
function Props({name="New Props"}) {
 return(
    <div>
        <h1>hello{name}</h1>
    </div> 
 )
} 
export default Props;