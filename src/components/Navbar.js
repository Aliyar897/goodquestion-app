
import React from 'react'
import styles from '../style/style.module.css'

export default function Navbar() {

  return (
    <div>
    <nav className={styles.navbar}>
        
            <div className="nav-wrapper">
          
            <img className={styles.image} src="https://reactjs.org/logo-og.png" alt="react logo" />   
            <ul id="nav-mobile" className="right">
                <li><a href="sass.html">Articles</a></li>
                <li><a href="badges.html">About Us</a></li>
                <li><a href="collapsible.html">Contact</a></li>
                <a className="waves-effect waves-teal btn-flat white">Sign Up</a>
                <a className="waves-effect waves-teal btn-flat white">Sign In</a>
        
            </ul>
    </div>
  </nav>
    </div>
  )
}
