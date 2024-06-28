import React, { useCallback, useState } from 'react'
import Header from './components/Header';


// useCallback hook don't create multiple instance of function when re-render happens
// useMemo and useCallback both are similar ,main diff. is useMemo return memoized value and useCallback hook freturn memoized function

function Five() {
    const [count, setCount] = useState(0);
    // const newFn = ()=>{}  // here we create a new function and then we passing this fun. as a props in header
   const newFn = useCallback(()=>{},[])  // whenever useCallback created function  first time and it will cache that function in the memory when ever re-render is happens it use that cached function . so, the function will be same thatswhy the header is not re-render

  return (
    <>
      <h1><ul>useCallback hook</ul></h1>
      <Header newFn={newFn}/>   {/*here when we re-render the components then new instance of the newFn is created  and then we provide that function to header components as a props so, here every time we passing a new fun. whwn tha props is changing thats why header is re-rendering again to solve this we use useCallback hook*/}
      <h1>{count}</h1>
      <button onClick={()=>setCount(prev=>prev+1)}>Click here</button>  {/* after we changing here in console shows header rendering when we dont change the header to fix this we use memo method which is present in react package */}
    </>
  )
}

export default Five
