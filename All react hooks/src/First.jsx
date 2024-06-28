
import { useState } from 'react';
import './App.css'


//The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.

function App() {

  //   const [car, setCar] = useState({    // initialization
  //                                       // it return two values : The current state , A function that updates the state.  
    
  //    brand: "Ferrari",
  //    model: "Roma",
  //    year: "2024",
  //    color: "red"                                   
                                        
  //   });

  //   const changeColor = ()=>{  // here we change color by using js and js spreade operator 
  //     setCar((prev) => {
  //       return { ...prev, color:"blue"}
  //     })
  //   }
  // return (
  //  <>
  //  <h1>My {car.brand}</h1>
  //  <h2>It is a {car.color} {car.model} from {car.year}</h2>
  //  <button onClick={changeColor}>Blue</button>
  

  //  </>
  // )




  // another example
  const [count, setCount] = useState(0);

  const increaseCount= () =>{
    // setCount(count+1) // initial + 1
    // setCount(count+1)  // hwere also start with initial value it dont jump 0-2

    setCount(count => count+1);  // here it direct jum 0-2
    setCount(count => count+1);
  }

  return(
    <>
    <h1>Count:{count}</h1>
    <button onClick={increaseCount}>increase</button>
    </>
  )
}

export default App
