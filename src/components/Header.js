import { LOGO_URL } from "../utils/constants.js";
import { useState, useContext } from "react";
import { Link } from "react-router";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
//Header Component
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const [showInfo,setshowInfo] = useState(false);
  const handledClick=()=>{if(showInfo===false){
setshowInfo(true);
  }
else{
  setshowInfo(false);
}}
  const data = useContext(UserContext);
  const cart=useSelector((store)=>store.cart.items);
  return (
    <div className="header flex justify-between items-center border border-solid border-black bg-pink-100 w-[98%] my-2 mx-auto shadow-2xl rounded-2xl text-xl">
      <div className="logo-container mx-3">
        <Link to="/">
          <img className="logo h-25 w-25" src={LOGO_URL}></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul className="nav-items flex justify-between">
          <li className="list p-4 ">
            <Link to="/">Home</Link>
          </li>
          <li className="list p-4 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="list p-4 ">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="list p-4 ">
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>
          <li className="list p-4 ">
            <Link to="/grocery">Grocery</Link>
          </li>

          <button
            className="btn-login mx-2 rounded-2xl bg-green-100 border border-solid border-black cursor-pointer"
            onClick={() => {
              if (btnName === "Login") {
                setbtnName("Logout");
              } else {
                setbtnName("Login");
              }
            }}
          >
            {btnName}
          </button>
        </ul>
        
      </div>
       <div className="mx-3 w-[10%]">
              <div className="cursor-pointer flex flex-col w-[100%]" onClick={handledClick}>
                <span className="px-18 ">🔽</span>
                 <li className="list text-sm text-center" >
            <Link to="/">{showInfo && data.loggedInUser}</Link>
          </li>
          <li className="list text-center text-sm">
            <Link to="/">{showInfo && data.location}</Link>
          </li>
                </div>
          </div>
    </div>
  );
};
export default Header;
