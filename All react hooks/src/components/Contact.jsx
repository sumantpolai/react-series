import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/Appcontext'

const Contact = () => {
  
  const phone = useContext(AppContext);   // by using this we can access the phone 
                                         // here  contact is present in the profile component , basically here pass the phone to contact don't need  pass to the profile here we  can directly pass to contact

  return (
    <div>
      <h2>Contact</h2>
      <h3>Phone:{phone}</h3>
    </div>
  )
}

export default Contact
