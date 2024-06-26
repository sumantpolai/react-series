import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)  //here we use useref hook it is a power full hook by this we grab anything fronm window

  const generatePassword = useCallback(() => {   // here we holding the reference in a variable bcz as soon as my page render i want something to generate the passowrd as soon as a component or page is load i want anotber hook to execute this method thatswhy i hold the reference and says to pass this method
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)  // here we generating a random no. and storing it in a variable
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed])  // here we write some dependences and these dependencies don't change

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()  // here it check in passwod ref if have current value if there then select that

  }


  useEffect(() => {   // it is a hook and this allow to run a pice of code on verite of senario
    generatePassword()
  }, [length, numberAllowed, charAllowed]) // here after clicking these key word it start to re run

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}      // here we provide password reference to ref after this now any where of application i can grab reference of i/p feild
        />
        <button
          onClick={copyPasswordToClipboard}  // here we add a event that is to copy pass.
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      <div
        className='flex text-sm gap-x-2'
      >
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}   // setlength is a method who regulate that how you enter the data into the length  and e.target .value is it setting that value into the length
            name=""
            id=""
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)   // it is a callback it take preve. value and then reverse it
            }}
            name=""
            id="" />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            name=""
            id="" />
          <label htmlFor="charInput">Character</label>
        </div>

      </div>
    </div>
  )
}

export default App
