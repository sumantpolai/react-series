import React from 'react'
import Profile from './components/Profile'
import Footer from './components/Footer'

// useContext hook is allow us to access data from any component without explicitly passing it down through props at every level.
// simple it use to manage the global data in the react app 
// we can manage pass the value in nested components by using props , it is dificult to manage or  pass the value in more nested components to overcome this problem we use useContext hook
// we can use this hook in 3 steps 1- creating the context, 2-providing the context , 3-consuming the context
function Six() {
  return (
    <>
    <h1><ul>useContext hook</ul></h1>
      <Profile/>
      <Footer/>
    </>
  )
}

export default Six
