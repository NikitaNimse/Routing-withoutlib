import "./Navbar.css"

 import React from 'react'
  
  function Navbar() {
    return (
     <>
     <div className="Nav">
      <a href="/" className="nav-menu">Home</a>
      <a href="/about" className="nav-menu">About</a>
      <a href="/contact" className="nav-menu">Contact</a>
      </div>

     </>
    )
  }
  
  export default Navbar