import React, { useState } from "react";
import caLogo from "../assets/logo-ca-gov.svg"
import dmvLogo from "../assets/logo-ca-dmv-white.svg"
import "./styles.css"


// bg = rgb(9, 121, 196)
const Header = () => {
  const [searched, setSearched] = useState(false)

  return (
    <div className="header-bg">
      <div className="header-container">
        <div className="logos-container">
          <a href="https://www.ca.gov/">
            <img className="header-logo" src={caLogo} alt="California State Logo" />
          </a>
          <a href="/">
            <img className="header-logo" src={dmvLogo} alt="California State DMV Logo" />
          </a>
        </div>
        <div className="search-bar-container-col">
          <div className="search-bar-container">
            <input className="search-bar" type="search" placeholder="Search here..." />
            <button onClick={() => setSearched(true)} className="search-bar-submit" type="submit">Search</button>
          </div>
          {
            searched &&
              <div className="font-red">Sorry could not find that. Try searching something else.</div>
          }
        </div>
        
      </div>

    </div>
  )
}

export default Header