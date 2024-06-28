import React from 'react'

const Header = ()=> {
    console.log("Header rendred");
  return (
    <>
      <h2>Header</h2>
    </>
  )
}

export default React.memo(Header)  // to fix that problem we use memo method 
