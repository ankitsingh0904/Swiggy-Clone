import { useState, useEffect } from "react";
import { GroceryItems } from "./GroceryItems.js";
import { GroceryItems1 } from "./GroceryItems.js";
import { GroceryItems2 } from "./GroceryItems.js";
import { GroceryItems3 } from "./GroceryItems.js";
// import Shimmer from "./Shimmer.js";
//Body Component
const Grocery = () => {
  const [menuName, setmenuName] = useState("");
  const [menuName1,setmenuName1]=useState("");
  const [menuName2,setmenuName2]=useState("");
  const [menuName3,setmenuName3]=useState("");
  const [groceryItems, setgroceryItems] = useState([]);
  const [groceryItems1, setgroceryItems1] = useState([]);
  const [groceryItems2, setgroceryItems2] = useState([]);
  const [groceryItems3, setgroceryItems3] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/api/instamart/home/v2?offset=1&layoutId=4771&storeId=867466&primaryStoreId=867466&secondaryStoreId=&clientId=INSTAMART-APP",
    );
    const json = await data.json();
    setmenuName(json.data.cards[0].card.card.header);
    setmenuName1(json.data.cards[1].card.card.header);
    setmenuName2(json.data.cards[2].card.card.header);
    setmenuName3(json.data.cards[3].card.card.header);
    setgroceryItems(
      json.data.cards[0].card.card.gridElements.infoWithStyle.info,
    );
    console.log(json);
    setgroceryItems1(
      json.data.cards[1].card.card.gridElements.infoWithStyle.info,
    );
     setgroceryItems2(
      json.data.cards[2].card.card.gridElements.infoWithStyle.info,
    );
     setgroceryItems3(
      json.data.cards[3].card.card.gridElements.infoWithStyle.info,
    );
  };
  const { title } = menuName;
  const {title:title1}=menuName1;
   const {title:title2}=menuName2;
   const {title:title3}=menuName3;
  // if (groceryItems.length === 0) {
  //    return <Shimmer />;
  // }

  return (
    <div className="body w-[90%] mx-auto my-0 my-10">
      <div className=" my-3">
        <h1 className=" mx-10 text-sm font-medium">{title}</h1>
        <div className=" flex flex-wrap">
          {groceryItems.map((card, index) => {
            return (
              <li key={index}>
                <GroceryItems groceryData={card} />
              </li>
            );
          })}
        </div>
      </div>
      <div className=" my-3">
        <h1 className=" mx-10 mt-1 text-sm font-medium">{title1}</h1>
        <div className=" flex flex-wrap">
          {groceryItems1.map((card, index) => {
            return (
              <li key={index}>
                <GroceryItems1 groceryData={card} />
              </li>
            );
          })}
        </div>
      </div>
      <div className=" my-3">
         <h1 className=" mx-10 mt-1 text-sm font-medium">{title2}</h1>
        <div className=" flex flex-wrap">
          {groceryItems2.map((card, index) => {
            return (
              <li key={index}>
                <GroceryItems2 groceryData={card} />
              </li>
            );
          })}
        </div>
      </div>
         <div className=" my-3">
         <h1 className=" mx-10 mt-1 text-sm font-medium">{title3}</h1>
        <div className=" flex flex-wrap">
          {groceryItems3.map((card, index) => {
            return (
              <li key={index}>
                <GroceryItems3 groceryData={card} />
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Grocery;
