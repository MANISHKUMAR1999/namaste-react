
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
//let btnName  = "Login"

const [btnName,setBtnname] = useState("Login")

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://img.freepik.com/free-vector/burger-cheese-with-fire-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-premium_138676-5539.jpg?w=826&t=st=1695148160~exp=1695148760~hmac=15fbe29d7fb2f694e05ac95449f779d2228e6c1f46233dfd51c55f3bf5db4bdc"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li >
            <Link to="/">Home</Link>
            </li>
            <li >
              <Link to="/about">About Us</Link>
              </li>
            <li>
            <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <li> <button onClick={()=>{

              btnName === "Login" ? setBtnname("Logout") :setBtnname("Login")

              
            } }>
            {btnName}
          </button></li>
          </ul>
         
        </div>
      </div>
    );
  };


  export default Header