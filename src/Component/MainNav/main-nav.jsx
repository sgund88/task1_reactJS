import React from 'react';
import './main-nav.styles.css';
import { GiHamburgerMenu } from 'react-icons/gi';



export default function MainNav() {
  return (
    
      <nav className="main-nav">
      <div id="hamburger-container">
      <GiHamburgerMenu className="hamburger-menu"/>
      </div>
        {/* <ClientSwitcher className="client-switcher" /> */}
        
      </nav>
  
  )
}
