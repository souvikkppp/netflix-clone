import React, { useEffect } from 'react'
import "./Nav.css";

export default function Nav() {

 const [show, handleShow] = React.useState(false);

 const tarnsitionNavBar = () => {
  if (window.scrollY > 100) {
    handleShow(true);
  } else {
    handleShow(false);
  }
 }

 useEffect(() => {
  window.addEventListener("scroll", tarnsitionNavBar);
  return () => window.removeEventListener("scroll", tarnsitionNavBar)
 }, []);

  return (
    <div className={`nav ${ show && "nav_black"}`}>
      <div className="nav_contents">
        <a href="/">
          <img 
            className='nav_logo'
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" 
            alt="" 
          />
        </a>
        <a href="/profile">
        <img 
         className='nav_avatar'
        src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg" alt="" />
        </a>
        
      </div>
        
    </div>
  )
}
