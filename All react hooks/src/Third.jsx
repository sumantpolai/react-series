import React, { useEffect, useRef, useState } from 'react'


// useRef is a react hook that allow us to create mutable variables, which will not re-render the component 
// it is also use for accessing DOM element 

function Third() {

//     // first example

//     const [value, setValue] = useState(0)

//     // const [Count, setCount] = useState(0)  // here count increase when prev value change 
//     // useEffect(()=>{
//     //     setCount(prev => prev+1)
//     // })
   
//      const count = useRef(0);  // here useRef not re-render the component when the count value is change  

//      useEffect(() =>{         
//         count.current = count.current + 1;
//      });

//   return (
//     <>
//       <h1><ul>useRef hook</ul></h1>
//       <button onClick={() =>{ setValue(prev => prev-1)} }>-1</button>
//       <h1>{value}</h1>
//       <button onClick={() =>{ setValue(prev => prev+1)} }>+1</button>
//       <h1>Rendre Count :{count.current} </h1>
//     </>
//   )


// second example

const inputElem = useRef();

const btnClicked =()=>{
    console.log(inputElem.current);    // whenever useref selecting the input field when we cliick the button it will display the inputelem in the console
                                       // after adding current we get selected html element
    inputElem.current.style.background = 'pink';
}

return(
    <>
    <h1><ul>useRef hook</ul></h1>
    <input type='text' ref={inputElem}/>   {/* here we connect the input field with useref by using ref attribute , here we access the dom element by using useRef */}
    <button onClick={btnClicked}>Click here</button>

    </>
)

}

export default Third
