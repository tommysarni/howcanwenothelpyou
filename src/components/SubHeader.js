import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Appointment from "./Appointments";
import Header from "./Header";
import Home from "./Home";
import License from "./License";
import Registration from "./Registration";
import "./styles.css"


// bg = rgb(9, 121, 196)
const Subheader = () => {

  return (
    <Router>
      <div className="subheader-container">
        <div className="subheader-bg">
          <div className="subheader-right">
            <Link className="subheader-tiles" to="/register">Vehicle Registration</Link>
            <Link className="subheader-tiles" to="/license">Driver License {"&"} ID Cards</Link>
          </div>
          <div className="subheader-right">
            <Link className="subheader-tiles" to="/appointment">Appointments</Link>
          </div>
        </div>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Registration} />
          <Route path="/license" exact component={License} />
          <Route path="/appointment" exact component={Appointment} />
        </div>
      </div>
      
      
    
    </Router>
    

  )
}

export default Subheader