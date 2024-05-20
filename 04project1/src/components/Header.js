import { useState } from "react";
import {Link} from "react-router-dom";
import LOGO from "../assests/images/foodvilla.jpg"


export const Title = () => {
  return (
    <a href="/">
      <img
        alt="logo"
        id="logo"
        src={LOGO}
      />
    </a>
  );
};

const HeaderComponent = () => {
  const [isUserIn, setIsUserIn] = useState("LogIn");

  function userAuth() {
    isUserIn === "LogIn" ? setIsUserIn("LogOut") : setIsUserIn("LogIn");
  }

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">HOME</Link>  
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>Cart</li>
        </ul>
        <p className="user" onClick={() => userAuth()}>
          {isUserIn}
        </p>
      </div>
    </div>
  );
};

export default HeaderComponent;
