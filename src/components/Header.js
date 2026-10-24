import { useContext, useState } from "react";
import { Link } from "react-router";
import useonlineStatus from "../utils/useonlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector(function (store) {
    return store.cart.items;
  });
  const [log, setlog] = useState("Login");
  const onlinestatus = useonlineStatus();
  const userInfo = useContext(UserContext);
  // console.log(userInfo);
  return (
    <div className="header">
      <div className="res-logo">
        <Link to="/">
          <img
            className="logo"
            src="https://t3.ftcdn.net/jpg/04/03/74/22/360_F_403742248_8DDzcFF4jw05lWqftk2yxzKRpFvpZ01Y.jpg"
          ></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlinestatus ? "✅" : "🔴"}</li>
          <Link to="/cart">
            <li>Cart({cartItems.length})</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/grocery">
            <li>Grocery</li>
          </Link>
          <li>
            <p>{userInfo}</p>
            <button
              onClick={function () {
                if (log === "Login") {
                  setlog("Logout");
                  console.log(log);
                } else {
                  setlog("Login");
                }
              }}
            >
              {log}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
