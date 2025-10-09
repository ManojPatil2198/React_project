// what is toggle?
// toggle means to switch between two states
// for example: light mode and dark mode
// to implement toggle we have to use state 
import { useState } from "react";

function Toggle() {
const [display,setDisplay] = useState(true);
return(
 <>
   <h1>Toogle in React js</h1>
    <button onClick={()=>setDisplay(!display)}>Toggle</button>
  {
    display ? <h1>manoj patil</h1>:null
  }
  
 </> 



)

}

export default Toggle;