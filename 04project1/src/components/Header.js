import { useState } from "react";
import {Link} from "react-router-dom";
import LOGO from "../assests/images/foodvilla.jpg"


export const Title = () => {
  return (
    <a href="/" >
      <img
        alt="logo"
        id="logo"
        src={LOGO}

        className="w-24"
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
    <div className="flex items-center justify-between border-2 bg-yellow-400 shadow-md mb-3">
      <Title />
      <div className="flex justify-between">
        <ul className="flex space-x-10">
          <li className="p-2">
            <Link to="/">HOME</Link>  
          </li>
          <li className="p-2">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="p-2">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="p-2">
            <Link to="/instamart">INSTAMART</Link>
          </li>
          <li className="p-2">
            <Link to="/cart">CART</Link>
          </li>
        </ul>
        <p className="px-4 py-2 text-green-300" onClick={() => userAuth()}>
          {isUserIn}
        </p>
      </div>
    </div>
  );
};

export default HeaderComponent;
