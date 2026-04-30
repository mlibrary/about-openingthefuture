import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

export const titleQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
}
`

const Footer = () => {
    const data = useStaticQuery(titleQuery)
    const {title} = data.site.siteMetadata
    const now = new Date()
    const year = now.getFullYear()

    return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4 contact">
            <a href="/" className="block logo-link"><img src="/assets/OTF-logo.png" alt="Logo: Opening the Future" height="auto" width="150" /></a>            
          </div>                    
          <div className="col-md-6">
            <ul className="list-unstyled second-nav">
              <li><a className="text-light" href="/about">About the Model</a>
                <ul className="list-unstyled">
                  <li><a className="text-light" href="/faq">FAQs</a></li>
                  <li><a className="text-light" href="/resources">Resources</a></li>
                </ul>
              </li>                
              <li><a className="text-light" href="/for-libraries">For Libraries</a></li>              
              <li><a className="text-light" href="/for-publishers">For Publishers</a></li>
              <li><a className="text-light" href="/supporters">Supporters</a></li>
              <li><a className="text-light" href="/contact">Contact</a></li>
            </ul>
          </div>            
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
          <span className=" copyright text-light d-block mb-3 font-weight-normal">© {year}, Michigan Publishing Services · <a className="text-light" href="/privacy">Privacy</a> · <a className="text-light" href="/accessibility">Accessibility</a></span>
          </div>
          <div className="col-md-4 text-right">
            <small className="text-white">Powered by</small> <a target="_blank" href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
