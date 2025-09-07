import React, {useState} from "react";




// const CounterComponent  = () =>{
//   const [count , setCount] = useState(0);
//   const [value , setValue] = useState("Ankit");

//   return(
//       <div>
//         <p>Count Component - {count}</p>
//         <p>Name - {value}</p>
        
//         <button onClick={() => setValue("Amartya")}>change name</button>
//         <button onClick={() => setCount(count+1)}>increment</button>
//         <button onClick={() => setCount(count-1)}>decrement</button>
//         {/* <button onClick={() => setCount(45)}>increment</button> */}
//       </div>
//   )
  
// };

const CounterComponent  = () =>{
  const [count , setCount] = useState(0); 

  return(
      <div>
        <p>Count Component - {count}</p>
        <p>Number is {count%2===0 ?"even":"odd"}</p> 

        <button onClick={() => setCount(count+1)}>increment</button>
        <button onClick={() => setCount(count-1)}>decrement</button>
        {/* <button onClick={() => setCount(45)}>increment</button> */}
      </div>
  )
  
};

export default CounterComponent;