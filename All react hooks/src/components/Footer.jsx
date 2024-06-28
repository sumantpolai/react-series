import React, { useContext } from 'react'
import { AppContext } from '../context/Appcontext';

const Footer = () => {
   
    const phone = useContext(AppContext);  // when we consume then write useContext

  return (
    <div>
      <h2>Footer</h2>
      <h3>Phone:{phone}</h3>
    </div>
  )
}

export default Footer
