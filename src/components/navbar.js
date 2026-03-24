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
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About the Model
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/for-libraries" className="nav-link">
                For Libraries
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/get-involved" className="nav-link">
                Get Involved
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
