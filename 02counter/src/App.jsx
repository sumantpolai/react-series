import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15)   // here usestate is a type of method  and counter is a variable and setcounter is a function or method
  
  //let counter = 15

  const addValue = () =>{
   setCounter(counter + 1)        // here we call the setcounter method


  }
  const removeValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course with hites {counter}</h1>  {/*here we inject the variable */}
      <h2>Counter value</h2>
       <button
       onClick={addValue}     // after clicking addvalue it call the addvalue ehere we store a function and there is a setcounter is there who add 1 onclick
       >add value</button>{" "}   {/* it take space b/w two button  */}
      <button
      onClick={{removeValue}}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
      
    </>
  )
}

export default App
