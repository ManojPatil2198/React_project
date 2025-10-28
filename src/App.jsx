//import ToDo from "./ToDo"; 
// import Toggle from "./Toggle";
 //import CheckBoxes from "./CheckBoxes";

 import { Navigate, Routes, Route } from "react-router";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import NavBar from "./NavBar";
import { PageNotFound } from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Detail from "./Details";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="detail" element={<Detail />} />
        </Route>

        {/* Redirect or 404 */}
        <Route path="/*" element={<Navigate to="/college" />} />
      </Routes>

      Basic Pages with React-Routing
    </>
  );
}

export default App;







































 // react router 7 example
// import { BrowserRouter, Routes, Route, Link } from "react-router";

// export default function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <nav>
//           <Link to="/">Home</Link> |{" "}
//           <Link to="/about">About</Link> |{" "}
//           <Link to="/contact">Contact</Link>
//         </nav>

//         <Routes>
//           <Route path="/" element={<h1>Home</h1>} />
//           <Route path="/about" element={<h1>About</h1>} />
//           <Route path="/contact" element={<h1>Contact</h1>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }




// Context Api example
// import { useState } from "react"
// import College from "./College"
// import { SubjectContext } from "./ContextData"

//  export default function App (){
//   const [subject,SetSubject]=useState('')


//  return (
//    <div style={{backgroundColor:"yellow",padding:10}}>
//    <SubjectContext.Provider value={subject}>
//     <select value={subject} onChange={(event)=>SetSubject(event.target.value)}>
//       <option value="">Select Subject</option>
//       <option value="History">History</option>
//       <option value="Maths">Maths</option>
//       <option value="English">English</option>
//     </select>
//     <h1>Context API</h1>
//     <button onClick={()=>SetSubject('')}>Clear Subject</button>

//    <College/>

//    </SubjectContext.Provider>  
// </div>
//  )

//  }





// import useToggle from "./useToggle"
//  Make custom hook

// export default function App() {
//   const [value, toggleValue] = useToggle(true);

//   const [data,setData] = useToggle(true);


// //console.log("val----",value);

//  return (
//     <div>
//       <button onClick={toggleValue}>Toggle Heading</button>
//       <button onClick={() => toggleValue(false)}>Hide Heading</button>
//       <button onClick={() => toggleValue(true)}>Show Heading</button>

//       {value ? <h1>Custom Hooks in React JS</h1> : null}
//       <hr/>
//        <button onClick={setData}>Toggle Heading</button>
//       <button onClick={() => setData(false)}>Hide Heading</button>
//       <button onClick={() => setData(true)}>Show Heading</button>

//       {data ? <h1>Second Heading</h1> : null}
//     </div>
//   );
// }


//import  { Fragment } from "react";

//Fragment example 
//  function App (){

//   return(
//   <>
//    <Data/>
//    <Data/>
//    <Data/>
//    <Data/>

//  </>
//   );
//  }

// export default App;

// function Data (){
//   return(
//    <div>
   
// <span>Hello <span/><b/>User</span>

//    </div>
//   )
// }



// function App (){

 //cuseId example

//   return (
//  <div>
//   <UserForm/>
//   <hr/>
//   <UserForm/>
//  </div>
//   )
//  }

//  export default App;


// function UserForm (){
//   const name = useId ()
//   const password = useId ()
//   const terms = useId ()
//   const skills = useId ()

//   return (
//  <div>
//   <form action="">
//     <label htmlFor={name}>Enter User Name</label>
//     <input id={name} type="text" placeholder="enter name"></input>
//     <br/><br/>
//     <label htmlFor={skills}>Enter User skills</label>
//     <input id={skills} type="text" placeholder="enter skills"></input>
//     <br/><br/>
//     <label htmlFor={password}>Enter User password</label>
//     <input id={password} type="text" placeholder="enter password"></input>
//     <br/><br/>

//     <input id={terms} type="checkbox" placeholder="enter skills"></input>
//     <label htmlFor={skills}>terms & condition</label>


//   </form>
//  </div>
//   )
//  }




// useActionState hook example 
//import { useActionState } from "react";


// function App (){
   
//     const  handleSubmit = async (previousData,formData)=>{
//       let name = formData.get('name');
//       let password = formData.get('password');

//       await new Promise(res=>setTimeout(res,4000))
//       console.log("handleSubmit called",name,password);
//       if(name && password){
//         return{message:'Data Submitted',name,password}
//       }
//       else{
//        return {error:'Failed to Submit. Enter proper dataS',name,password}
//       }


//     }
//   const[data,action,pending,] = useActionState(handleSubmit,undefined);
//   console.log(data);
    
//   return(
//     <div>

//      <h1>useActionState Hook in react js</h1>

//     <form action={action}>
//     <input defaultValue={data?.name} type="text" placeholder="enter name" name="name"></input>      
//           <br/><br/>

//     <input defaultValue={data?.password} type="password" placeholder="enter password" name="password"></input>      
//       <br/><br/>
//       <button disabled ={pending}>Submit data</button> 
//       <br/>
      
//       </form>

//       {
//         data?.error && <span style={{color:'red'}}>{data?.error}</span>
//       }
//       {
//         data?.message && <span style={{color:'green'}}>{data?.message}</span>
//       }
  
//        <h3>Name : {data?.name}</h3>
//        <h3>Password : {data?.password}</h3>
//       </div>

//   );
// }


// export default App;



// updating array in state 

// function App (){

//   const [data,setData] = useState ([
//     'anil','sam','peter'
//   ])

//   const [dataDetails,setDataDetails] = useState([
//   {
//     name:'anil',age:'29'
//   },
//   {
//     name:'sam',age:'19'
//   },
//   {
//     name:'peter',age:'22'
//   },
//   ]);

//   const handleUser =(name)=>{
  
//     data[data.length-1] =name;
//     console.log(data);
//     setData([...data])

//   } 
  
//   const handleAge =(age)=>{
  
//     dataDetails[data.length-1].age =age;
//     console.log(dataDetails);
//     setDataDetails([...dataDetails])

//   }


//   return(
//     <div>

//      <h1>Updating Array in state</h1>
//      <input type="text" placeholder="enter last user name" 
//       onChange={(e)=>handleUser(e.target.value)}
//      />

//      {
//       data.map((item, index) => {
//   return <h3 key={index}>{item}</h3>;
    
//       })
//      }

//      <hr/> 
//      <input type="text" placeholder="enter last user age" 
//       onChange={(e)=>handleAge(e.target.value)}
//      />
//      {
//       dataDetails.map((item,index) =>{

//        return <h4 key={index}>{item.name},{item.age}</h4>
//       })
//      }

//       </div>


//   )
// }

//  export default App;




// updating objects in state

// export default function App() {
//   const [data, setData] = useState({
//     name: "Anil",
//     address: {
//       city: "Delhi",
//       country: "India",
//     },
//   });

//   const handleName = (val) => {
//     // ✅ Proper immutable update
//     setData({
//       ...data, // जुने values जतन करा
//       name: val, // फक्त name अपडेट करा
//     });
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h1>Updating Objects in State</h1>

//       <input
//         type="text"
//         placeholder="Update name"
//         value={data.name}
//         onChange={(event) => handleName(event.target.value)}
//       />

//       <h2>Name: {data.name}</h2>
//       <h2>City: {data.address.city}</h2>
//       <h2>Country: {data.address.country}</h2>
//     </div>
//   );
// }



// import { useState } from "react";
// import AddUser from "./AddUser";
// import DisplayUser from "./DisplayUser";

// // Lifting state up in React
// function App() {
//   const [user, setUser] = useState("");

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h2>Lifting State Up Example</h2>
//       <AddUser setUser={setUser} />
//       <DisplayUser user={user} />
//     </div>
//   );
// }

// export default App;



//  import { useState } from "react";
// //derived/drived state example
// function App() {
//   const [users, setUsers] = useState([]);
//   const [user, setUser] = useState("");

//   const handleAddUsers = () => {
//     if (user.trim() === "") return; // रिकामं value टाळा
//     setUsers([...users, user]);
//     setUser(""); // इनपुट रिकामं करा
//   };

//   const total = users.length;
//   const last = users[users.length - 1]; // ✅ योग्य पद्धत
//   const unique = [...new Set(users)].length; // ✅ duplicate काढण्यासाठी

//   return (
//     <div style={{ textAlign: "center", marginTop: "30px" }}>
//       <h2>Total Users: {total}</h2>
//       <h2>Last User: {last ? last : "No users yet"}</h2>
//       <h2>Unique Users: {unique}</h2>

//       <input
//         type="text"
//         value={user}
//         onChange={(event) => setUser(event.target.value)}
//         placeholder="Add new user"
//       />
//       <button onClick={handleAddUsers}>Add User</button>

//       <div style={{ marginTop: "20px" }}>
//         {users.map((item, index) => (
//           <h4 key={index}>{item}</h4>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// pure components 
    

// function App (){

//  return (
//  <>
//   <h1>Keeping Components Pure</h1>   
//   <Cup guest ={1}/>
//   <Cup guest ={2}/>
//   <Cup guest ={3}/>


//   </>

//  )

// }
   
// const Cup=({guest})=>{
//    guest = guest +1;
//   return <h1>We have{guest} guest and we have to make {guest} cup of tea</h1>

// }

// export default App;



// import { useState, useTransition } from "react";

// // useTransition hook example
//  function App(){
//     const [pending,startTransition] =useTransition();
   
//   const handleButton = ()=>{

//  startTransition(async ()=>{
//     await new Promise(res=>setTimeout(res,2000))


// })
//   }


//   return (
//   <div> 

//    <h1>useTransition Hook in react js  19</h1>
//    {
//     pending?
//     <img style={{ width:"100px"}} src="https://tse1.mm.bing.net/th/id/OIP.qq-AunqZLgbVn4cKot4cvwHaHa?cb=12&pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3" alt=""  srcSet="" />:null
//    }

//    <button disabled={pending}onClick={handleButton}>Click</button>
   


//     </div>

//   );

//  }

//  export default App;


// import { useFormStatus } from "react-dom";


// // useFormStatus example
//  function App(){
  
//   const handleSubmit=async()=>{
//    await new Promise(res=>setTimeout(res,2000));
//     console.log("Submit");


//     function CustomerForm(){
//       const{pending}=useFormStatus();
//       console.log(pending);
//     }


//     return(
//       <div>
//        <input type="text" placeholder="Enter Name"></input>
//    <br/>
//    <br/>
  
//   <input type="text" placeholder="Enter Password"></input>
//    <br/>
//    <br/>     
//       <button disabled={pending}>{pending?'Submitting...': 'Submit'}</button>
//       </div>

//     )

//   }
//     return(
//   <div>
//    <h1>useFormStatus Hook in React js 19</h1>
//    <form action={handleSubmit}>
//     <CustomerForm/> 
    
//    </form>

//   </div>
//     )
//  }
 
//  export default App;




// import UserInput from "./UserInput"; 
//  // forward ref example


//  function App(){
//   const inputRef=useRef(null)

//   const updateInput=()=>{
//    inputRef.current.value=1000;
//    inputRef.current.focus();
//    inputRef.current.style.color='red';

//   }

//   return (
//     <>
//     <h1>Forward Ref</h1>
//     <UserInput ref={inputRef}/>
//     <button onClick={updateInput}>update Input field</button>    
//     </>
//   )

//  }

// export default App;



//  import User from "./User";
  //pass function in component as props

// function App(){

//  const displayName=(name)=>{
//   alert(name)
//  }

//    const getUser=()=>{
//     alert("get user function called")
//    }
//   return (
//     <>
//     <h1>Call Parent component from child component</h1>
//     <User displayName={displayName} name="anil" getUser={getUser}/>
//     <User displayName={displayName} name="manoj" getUser={getUser}/>
//     <User displayName={displayName} name="ramesh" getUser={getUser}/>
//     </>
//   )
// }
//  export default App;



// uncontrolled component
// function App() {
//   const userRef = useRef();
//   const passwordRef = useRef();

//   // Using normal DOM methods
//   const handleForm = (event) => {
//     event.preventDefault();
//     const user = document.querySelector("#user").value;
//     const password = document.querySelector("#password").value;

//     console.log("handleForm:", user, password);
//   };

//   // Using useRef
//   const handleFormRef = (event) => {
//     event.preventDefault();
//     const user = userRef.current.value;
//     const password = passwordRef.current.value;

//     console.log("handleFormRef:", user, password);
//   };

//   return (
//     <>
//       <h1>Uncontrolled Component using document.querySelector()</h1>
//       <form onSubmit={handleForm}>
//         <input type="text" id="user" placeholder="Enter user name" />
//         <br />
//         <br />
//         <input type="password" id="password" placeholder="Enter user password" />
//         <br />
//         <br />
//         <button type="submit">Submit with querySelector</button>
//       </form>

//       <hr />

//       <h1>Uncontrolled Component using useRef()</h1>
//       <form onSubmit={handleFormRef}>
//         <input type="text" ref={userRef} placeholder="Enter user name" />
//         <br />
//         <br />
//         <input
//           type="password"
//           ref={passwordRef}
//           placeholder="Enter user password"
//         />
//         <br />
//         <br />
//         <button type="submit">Submit with useRef</button>
//       </form>
//     </>
//   );
// }

// export default App;



// useRef hook  example
 //function App(){

 // const inputRef=useRef(null)
//    const inputHandler=()=>{
//     console.log(inputRef);
//     inputRef.current.focus();
//     inputRef.current.style.color='red'
//     inputRef.current.placeholder='Enter password'
//    }
//    const ToggleHandler=()=>{
//     inputRef.current.style.display='none'

//    }
//   return (
//     <>
//      <h2>useRef</h2>
//      <butto onClick={ToggleHandler}>Toggle</butto>
//      <input ref={inputRef} type="text" placeholder="Enter user name"></input>
//      <button onClick={inputHandler}>Focus on Input field</button>
//     </>
//   )
//  }
 
// export default App;



// add bootstrap in react 
// bootstrap dow command- npm install react-bootstrap bootstrap
//  import { Button, Alert } from "react-bootstrap";

// function App() {
//   return (
//     <>
//       <h1>Add Bootstrap in React js </h1>

//       <Button onClick={() =>alert("Bootstrap Button")} variant="primary">OK</Button>

//       <Alert variant="success">
//         Hello, Bootstrap इंस्टॉल झाले!
//       </Alert>
//     </>
//   );
// }



// export default App;

//use styled components 
// ``- backticks are mostly use here
 //import styled from "styled-components";

  // two types of writing

  // const Heading=styled.h1`
  // color:red;
  // border:1px solid green;
  // border-radius:5px;
  // margin:20px;
  // padding:20px;
//   const Heading=styled.h1({
//   color:'red',
//   border:'1px solid green',
//   borderRadius:'5px',
//   margin:'20px',
//   padding:'20px'
  
//   })

//    const StyledBtn=styled.button`
//    color:blue;
//    width:130px;
//    height:40px;
//    margin:20px;
//    `
  

//   return(
//     <>
//      <h1>Styled Component with React js</h1>
//      <Heading>Hello 1</Heading>
//      <Heading>Hello 2</Heading>
//      <Heading>Hello 3</Heading>
//      <Heading>Hello 4</Heading>
//      <StyledBtn>Login</StyledBtn>
//      <StyledBtn>Signup</StyledBtn>
//      <StyledBtn>Back</StyledBtn>
//     </>
//   )
//  }


//external style css
//import './css/style.css'

//   return(
//     <>
//     <h1 className='heading'>External Style</h1>
//         <div className='container'>
//     <div className='user-card'>
//       <div>
//         <img className='img-style'src='https://www.w3schools.com/howto/img_avatar.png'></img>
//       </div>
//       <div className='text-wrap'>
//         <h4>MANOJ PATIL</h4>
//         <p>Software developer</p>
//       </div>
//     </div>
//     <div className='user-card'>
//       <div>
//         <img className='img-style'src='https://www.w3schools.com/howto/img_avatar.png'></img>
//       </div>
//       <div className='text-wrap'>
//         <h4>MANOJ PATIL</h4>
//         <p>Software developer</p>
//       </div>
//     </div>
//     </div>
//     </>
//   )
// } 

// export default App 



// dynamic and conditional inline style 
// function App(){
//   const [cardStyle,setCardStyle]= useState(
//   {
//     border:"1px solid #cccccc3b",
//     width:"200px",
//     boxShadow:"1px 2px 3px 0px #cccccc57",
//     margin:"10px"

//   }
// )

//  const[textColor,setTextColor]=useState('black');
//  const [grid,setGrid]=useState(true)

//  const updateTheme=(bgColor,textColor)=>{
//   setCardStyle({...cardStyle,backgroundColor:bgColor})
//  }
//   return(
//     <>
//     <h1 style={{color:'red'}}>Dynamic and Conditional  Inline Style</h1>
//     <button onClick={()=>updateTheme('gray','green')}>Gray Theme</button>
//     <button onClick={()=>updateTheme('white','black')}>Default Theme</button>
//      <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>
//     <div style={{display:grid?'flex':'block',flexWrap:'wrap'}}>
//       <div style={cardStyle}>
//         <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar"></img>
//         <div style={{padding:'5px',color:textColor}}>
//           <h4>Anil Sidhu</h4>
//           <p>Software developer</p>

//         </div>
//       </div>
//       <div style={cardStyle}>
//         <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar"></img>
//         <div style={{padding:'5px',color:textColor}}>
//           <h4>Anil Sidhu</h4>
//           <p>Software developer</p>

//         </div>
//       </div>
//       <div style={cardStyle}>
//         <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar"></img>
//         <div style={{padding:'5px',color:textColor}}>
//           <h4>Anil Sidhu</h4>
//           <p>Software developer</p>

//         </div>
//       </div>
//       <div style={cardStyle}>
//         <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar"></img>
//         <div style={{padding:'5px',color:textColor}}>
//           <h4>Anil Sidhu</h4>
//           <p>Software developer</p>

//         </div>
//       </div>
//       <div style={cardStyle}>
//         <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar"></img>
//         <div style={{padding:'5px',color:textColor}}>
//           <h4>Anil Sidhu</h4>
//           <p>Software developer</p>

//         </div>
//       </div>
//       <div style={cardStyle}>
//         <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar"></img>
//         <div style={{padding:'5px',color:textColor}}>
//           <h4>Anil Sidhu</h4>
//           <p>Software developer</p>

//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default App;



// component life cylcle in react 


// import Counter from "./Counter";
// //  useEffect
// function App() {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState(0);
//   const [display,setDisplay]=useState(true);

//   return (
//     <div>
//       {
//         display? <Counter count={count} data={data}/>:null
//       }
//       <Counter count={count}  data={data}/>
//       <button onClick={() => setCount(count + 1)}>Counter</button>
//       <button onClick={() => setData( data+ 1)}>Data</button>
//       <button onClick={() => setDisplay(!display)}>Toggle</button>
//     </div>
//   );
// }

// export default App;



// what is useEffect in react js
//defination: The useEffect Hook allows you to perform side effects in your components.
//  Some examples of side effects are: fetching data, directly updating the DOM, and timers.
//synax: useEffect(()=>{ //code },[dependancy])

//  function  App(){
//   const [counter,setCounter] = useState(0);
//   const [data,setData] = useState(0);

//    useEffect(()=>{
//     counterFunction();
//    },[counter]);

//      function counterFunction(){
//       console.log("counterFunction",counter);
//      }
  


//   function callOnce(){
//     console.log("call once function");


//   }
//   callOnce();
//    return(
//     <div>
//       <h1>UseEffect in React Js</h1>
//       <button onClick={()=>setCounter(counter+1)}>Counter{counter}</button>
//       <button onClick={()=>setData(data+1)}>Data{data}</button>

//     </div>
//    )
// }

// export default App; 

// nested Loop in React Js
// function NestedLoop({ students }) {
//   return (
//     <div>
//       <h3>Students:</h3>
//       {students.map((student, index) => (
//         <div key={index} style={{ marginLeft: "20px" }}>
//           <p>Name: {student.name}</p>
//           <p>Age: {student.age}</p>
//           <p>Email: {student.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// function App() {
//   const CollegeData = [
//     {
//       name: "ABC College",
//       city: "Pune",
//       website: "www.abc.com",
//       student: [
//         { name: "manoj", age: 23, email: "manojpatil2198@.com" },
//         { name: "sunil", age: 24, email: "sunilpatil2198@.com" },
//         { name: "ram", age: 25, email: "rampatil2198@.com" },
//       ],
//     },
//     {
//       name: "XYZ College",
//       city: "Mumbai",
//       website: "www.xyz.com",
//       student: [
//         { name: "sam", age: 26, email: "sampatil2198@.com" },
//         { name: "tom", age: 27, email: "tompatil2198@.com" },
//         { name: "rahul", age: 28, email: "rahulpatil2198@.com" },
//       ],
//     },
//   ];

//   return (
//     <div>
//       <h1>Nested Loop in React Js</h1>
//       {CollegeData.map((college) => (
//         <div
//           key={college.name}
//           style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
//         >
//           <h2>College Name: {college.name}</h2>
//           <p>City: {college.city}</p>
//           <p>Website: {college.website}</p>
//           <NestedLoop students={college.student} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


// Digital Clock in React Js
//  import Clock from "./Clock";
// function App(){
//   const [color,setColor] = useState("red");
//   return (
//     <div>
//       <h1>Digital Clock in React is React Js</h1>
//       <select onChange={(e) => setColor(e.target.value)}>
//         <option value={"red"}>Red</option>
//         <option value={"orange"}>Orange</option>
//         <option value={"green"}>Green</option>
//         <option value={"blue"}>Blue</option>
//       </select>
//       <Clock color={color} />
//     </div>
//   )
// }

// export default App;



// import UserComponent from "./UserComponent";

// function App() {
//   const userData = [
//     { 
//       name: 'manoj',
//       age: '23',
//       email: 'manojpatil2198@.com',
//       id: 1,
//     },
//     {
//       name: 'sunil',
//       age: '24',
//       email: 'sunilpatil2198@.com',
//       id: 2,
//     },
//     {
//       name: 'ram',
//       age: '25',
//       email: 'rampatil2198@.com', // fixed typo
//       id: 3,
//     },
//     {
//       name: 'sam',
//       age: '26',
//       email: 'sampatil2198@.com',
//       id: 4,
//     },
//   ];

//   return (
//     <div>
//       <h1>Reuse Component in loop</h1>
//       {userData.map((user) => (
//         <UserComponent key={user.id} data={user} />
//       ))}
//     </div>
//   );
// }

// export default App;


// const userData=[
//     {
//     name:'manoj',
//     age:'23',
//     email:'manojpatil2198@.com',
//     id:1,
//   },
//   {
//     name:'sunil',
//     age:'24',
//     email:'sunilpatil2198@.com',
//     id:2
//   },
//   {
//     name:'ram',
//     age:'25',
//     eamil:'rampatil2198@.com',
//     id:3
//   },
//   {
//     name:'sam',
//     age:'26',
//     email:'sampatil2198@.com',
//     id:4
//   },
//     {
//     name:'tom',
//     age:'27',
//     email:'tompatil2198@.com',
//     id:5
//     },

//   ]
//   return( 

    // what is array in react js using map method
   
//     <div>
//     <h1>loop in jsx with Map function</h1>
    
//      <table border="1">
//       <thead>
//         <tr>
//           <td>Id</td>
//           <td>Name</td>
//           <td>Age</td>
//           <td>Email</td>
//         </tr>
//       </thead>
//       <tbody>
//         {
//           userData.map((user)=>(
//              <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.age}</td>
//               <td>{user.email}</td> 
//             </tr>
//           ))
//         }
//       </tbody>
//      </table>


//     <h1>Dummy data</h1>
//    <table border="1">
//     <thead>
//       <tr>
//         <td>Id</td>
//         <td>Name</td>
//         <td>Age</td>
//         <td>Email</td>
//         </tr>
//     </thead>
//     <tbody>
//          <tr>
//         <td>1</td>
//         <td>manoj</td>
//         <td>23</td>
//         <td>manojpatil2198@.com</td>
//         </tr>
//          <tr>
//         <td>1</td>
//         <td>manoj</td>
//         <td>23</td>
//         <td>manojpatil2198@.com</td>
//         </tr>
//          <tr>
//         <td>1</td>
//         <td>manoj</td>
//         <td>23</td>
//         <td>manojpatil2198@.com</td>
//         </tr>
//          <tr>
//         <td>1</td>
//         <td>manoj</td>
//         <td>23</td>
//         <td>manojpatil2198@.com</td>
//         </tr>
//          <tr>
//         <td>1</td>
//         <td>manoj</td>
//         <td>23</td>
//         <td>manojpatil2198@.com</td>
//         </tr>
//       </tbody>
//    </table>
//     </div>

//   )
//   }


//  export default App ; 


































