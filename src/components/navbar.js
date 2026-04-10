import React, {useState} from "react"
import {Link} from "gatsby"

const Navbar = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">        
        <a href="/" className="navbar-brand">
          <h1 className="sr-only">Opening the Future</h1>
          <img src="/assets/otf-logo-dark.png" alt="" height="100" width="auto" className="navbar-brand-logo"/> 
        </a>
        <span>A funding model for open access books</span> 
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navbar" className={
          isOpen
            ? "collapse navbar-collapse flex-row show"
            : "collapse navbar-collapse flex-row-reverse"
          }
        >
          <ul className="navbar-nav float-right">
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/about">About the Model</a>
                <a className="dropdown-item" href="/faq">FAQs</a>
                <a className="dropdown-item" href="/resources">Resources</a>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/for-libraries" className="nav-link">
                For Libraries
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/for-publishers" className="nav-link">
                For Publishers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/supporters" className="nav-link">
                Supporters
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>                     
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
