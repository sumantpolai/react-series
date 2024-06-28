import React, { useMemo, useState } from 'react'

// useMemo hook return memoized value. its like caching the value so that it does not need to be recalculated
// it only runs when one of his dependencies gets updated . this can improve the performance of the application 
// 

function Fourth() {
  const [number, setNumber] = useState(0)
  const [counter, setCounter] = useState(0)

  function cubeNum(num){
    console.log(`Calculation done!`);
    return Math.pow(num, 3)
   }
// after clicking counter button and dont written anything in the input field here in console shows calculation is done 
// bcz after clickig the button the counter value is changed then the component is re-rendered and the cubeNum fun is run thats why it print in console
// to over come this problem we use useMemo hook 
  // const result = cubeNum(number);

  // by using useMemo

  const result = useMemo(()=>  cubeNum(number),[number]);

  return (
   <>
   <h1><ul>useMemo hook</ul></h1>
   <input type='number' value={number} onChange={(e)=> {setNumber(e.target.value)}} />
   <h1>Cube of the number: {result} </h1>
   <button onClick={()=>{setCounter(counter+1)}}>counter++</button>  
   <h1>Counter:{counter}</h1>  
   </>
  )
}

export default Fourth
