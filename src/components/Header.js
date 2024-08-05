
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import userContext from "./utils/userContext";

const Header = () => {
//let btnName  = "Login"

const [btnName,setBtnname] = useState("Login")
const onlineStatus = useOnlineStatus()

const data = useContext(userContext);
console.log(data,"data from user context");

    return (
      <div className="flex justify-between align-content-center shadow-md gray sm:bg-yellow-50 lg:bg-green">
        <div className="logo-container">
          <img
            className="w-20"
            src="https://img.freepik.com/free-vector/burger-cheese-with-fire-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-premium_138676-5539.jpg?w=826&t=st=1695148160~exp=1695148760~hmac=15fbe29d7fb2f694e05ac95449f779d2228e6c1f46233dfd51c55f3bf5db4bdc"
          />
        </div>
        <div className="nav-items">
          <ul className="flex p-2 m-2 gap-4">
            <li>onlineStatus : {onlineStatus ? "✔" :"🔴"}</li>
            <li >
            <Link to="/" className="text-decoration-none text-black">Home</Link>
            </li>
            <li >
            <Link to="/grocery">Grocery</Link>
            </li>
            <li >
              <Link to="/about">About Us</Link>
              </li>
            <li>
            <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <li className="font-bold">{data.loggedInUser}</li>
            <li > <button onClick={()=>{

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