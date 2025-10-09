function ToDo(){
    function callFun(){
        alert("fucntion called")
    }
    return(
        <div>
            <h1>manoj patil</h1> 
      <img
        src="src/giphy.webp"
        alt="Loading..."
        class ="loading-gif"
      /> 
              <ul>
            <li>Learn React</li>
            <li>Learn JavaScript</li>
            <li>Learn HTML</li>
            <li>Learn CSS</li>
            <li>Learn Node</li>
              </ul>
           <button onclick={callFun}>Click Me</button>
        </div>

    )
}
export default ToDo;