import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="h-40 flex  items-center justify-between border-2 bg-yellow-400 shadow-md">
     
        <ul className="flex justify-center  w-full">
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
       
      </div>
  
  );
};

export default Footer;
