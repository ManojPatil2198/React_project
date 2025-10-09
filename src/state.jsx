//what is state in react js?
// staate is  a container to store data  like variable
// this is mutable and dynamic
// we have to import it when we want to use it 
// it re-renders component automatically so that data can visible on ui

// what is hook?
// hooks are special feature for functional component
// hooks late you use different react feature like state and lifecycle method
// hooks always start with use word
import { useState } from "react";

function State() {
 const [fruit,setFruit]=useState("mango");
 const handleFruit =()=>{
  setFruit("banana")
 }

  return(
    <div>
      <h1>state in react js</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change fruit name</button>
      </div> 
      )
      }

export default State;