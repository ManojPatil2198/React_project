// function User(){
//     return<h1>User Component</h1>;

// }

// export default User;
//pass function in component as props

function User({displayName,name,getUser}) {
   

   return(
    <div>
        <button onClick={()=>displayName(name)}>Display Name</button>
        <button onClick={()=>getUser()}>getUser </button>
    </div>
   )
}

export default User;