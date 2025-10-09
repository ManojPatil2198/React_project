//import ToDo from "./ToDo"; 
//import React, { useState } from "react";
// import Toggle from "./Toggle";
 //import CheckBoxes from "./CheckBoxes";

import { useRef } from "react"
// useRef hook  example
 function App(){

  const inputRef=useRef(null)
   const inputHandler=()=>{
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color='red'
    inputRef.current.placeholder='Enter password'
   }
   const ToggleHandler=()=>{
    inputRef.current.style.display='none'

   }
  return (
    <>
     <h2>useRef</h2>
     <butto onClick={ToggleHandler}>Toggle</butto>
     <input ref={inputRef} type="text" placeholder="Enter user name"></input>
     <button onClick={inputHandler}>Focus on Input field</button>
    </>
  )
 }
 
export default App;



















































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


































