import { useEffect } from "react";

const Counter =({count,data}) =>{

 useEffect(()=>{
  console.log("mounting phase only")

 },[])

 useEffect(()=>{
  console.log("update phase only");
 },[count])

  return(
    <div>
      <h1>Counter Value{count}</h1>
      <h1>Data Value{data}</h1>
      <h1></h1>
    </div>
  )
}
  export default Counter;



















// const Counter = ({ count }) => {
//   useEffect(() => {
//     console.log("handleCounter called");
//   }, [count]); // runs whenever count changes

//   return (
//     <div>
//       <h1>Counter Value: {count}</h1>
//     </div>
//   );
// };

// export default Counter;

// useEffect(() =>{
//   //call every time
// })

// useEffect(()=>{
// //call only once
// },[])

// useEffect(()=>{
//   // call on changing single state
// },[state])

// useEffect (()=>{
//   // call on chaning both state
// },[state1,state2])

// useEffect(()=>{
//   //call on change props
// },[prop1,prop2])




// component life cylcle
//useEffect(()=>{
//this code will run on mount
// },[])

//useEffect(()=>{
//this code will run on update
// },[state or props])

//useEffect(()=>{

// return () =>{
//this code will run on unmount

//};
//},[])

//useEffect(()=>{
//this code will run on every life cycle event
// })


