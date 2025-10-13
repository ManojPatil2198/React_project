 // after react 19 version

// import { forwardRef } from "react";

// const UserInput=(props,ref)=>{

//  return (
//     <div>
//         <input type="text" ref={ref}></input>
//     </div>
//  )

// }

// export default forwardRef(UserInput);


const UserInput=(props)=>{
    return(
        <div>
   <input type="text" ref={props.ref}></input> 
      </div>
    )
}

export default UserInput;