import { useState } from "react";
import { useEffect } from "react";
import React from 'react'

// useEffect hook allow us to perform side effect in our compnents 
// examples are - Fetching data from API
                // -Directly updating the DOM
                // - Timers like SetTimeOut and Setinterval  

function Second() {


    // useEffect(cb, d)    // in useEffect hook we have to provide 2 things 1- callback function which is most required 2- dependency which is optional

    const [Count, setCount] = useState(0)

//    useEffect(()=>{
//     setTimeout(()=>{   // set timeout execute the function by one time it increase the value after 2 sec
//                        // bcz in use effect we dont use any dependency thats why after every changing the count is run thats why it contineus increses 
//         setCount(Count => Count+1)
//     },2000)
//    })   // with out any dependency

// with dependency
useEffect(()=>{
    setTimeout(()=>{  // here the setimeout function run once
        setCount(Count => Count+1)
     
    },2000)
},[])  // here we write a dependency [] which render the function once

// },[count])   // here when the count is change then the useeffect function run  , here we can add more items with count  if these items are change then the useeffect is change

  return (
    <>
      <h1><ul>useEffect</ul></h1>
      <h2>I've rendered {Count} times!</h2>
    </>
  )
}

export default Second
