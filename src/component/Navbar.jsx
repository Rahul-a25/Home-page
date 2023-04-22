import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
           <div className="left"><h2>Rahul Arora</h2></div>
           <div className="right">
                  <ul>
                    <li style={{borderRadius:"5px",backgroundColor:"#f8a5c2",padding:"5px",width:"100px",color:"black"}}>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Order</li>
                    <li>Contact</li>
                  </ul>
           </div>
    </div>
  )
}

export default Navbar
