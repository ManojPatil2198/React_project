import { useState } from "react";
 function Mulitiple() {
 const [count,setCount] = useState(5);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            {
                count==0? <h1>Count is 0</h1>:
                count==1? <h1>Count is 1</h1>:
                count==2? <h1>Count is 2</h1>:
                count==3? <h1>Count is 3</h1>:
                count==4? <h1>Count is 4</h1>:
                <h1> other count</h1> 
            }
        </div>
    )
 }
    export default Mulitiple;