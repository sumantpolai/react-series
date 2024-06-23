import { useState } from 'react'

import './App.css'

function App() {
  
  let counter = 15

  const addValue = () =>{
    counter + 1
    console.log(counter);
  }

  return (
    <>
      <h1>React course with hites {counter}</h1>  {/*here we inject the variable */}
      <h2>Counter value</h2>
       <button
       onClick={addValue}  
       >add value</button>{" "}   {/* it take space b/w two button  */}
      <button>remove value</button>
      <p>footer: {counter}</p>
      
    </>
  )
}

export default App
