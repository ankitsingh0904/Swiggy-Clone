import { useState, useEffect } from "react";
const Grocery = () => {
  const [grocerymenu, setgrocerymenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/api/instamart/home/v2?offset=1&layoutId=4987&storeId=1400971&primaryStoreId=1400971&secondaryStoreId=&clientId=INSTAMART-APP");
    const json = await data.json();
    console.log(json);
    setgrocerymenu(json?.data?.cards[0]);
  };

  return (
    <div className="grocery">
      <h1>{grocerymenu?.card?.card?.header?.title}</h1>
      {/* <div className="grocerycards">
        {grocerymenu.map((items, index) => {
          return <h1 key={index}>{items?.card?.card?.header?.title}</h1>;
        })}
      </div> */}
    </div>
  );
};
export default Grocery;
