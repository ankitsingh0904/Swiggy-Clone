import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import ResCategories from "./ResCategories.js";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resMenu, setresMenu] = useState("");
  const [showIndex, setshowIndex] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setresMenu(json.data);
  };
  const { resId } = useParams();
  if (resMenu === "") return <Shimmer />;
  const { name, locality, avgRating, costForTwoMessage } =
    resMenu.cards[2].card.card.info;
  const { tabs } = resMenu.cards[4].card.card;
  const { offers } = resMenu.cards[3].card.card.gridElements.infoWithStyle;
  const categories =
    resMenu.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => {
      return (
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  console.log(categories);
  

  //
  return (
    <div className="menu">
      <div className="border border-solid border-black w-[48%] my-0 mx-auto shadow-lg my-5">
        <h3 className="text-center font-bold text-2xl">{name}</h3>
        <h3 className="text-center text-2xs">{avgRating} Stars</h3>
        <h3 className="text-center text-2xs">{locality}</h3>
        <h3 className="text-center text-2xs">{costForTwoMessage}</h3>
        <h3 className="text-center">{tabs[0].title}</h3>
      </div>
      <ul className="flex justify-center gap-2">
        {offers.map((offer, index) => {
          return (
            <div className="offers-page" key={index}>
              <li className="border border-solid border-black my-1 px-1">
                {offer.info.header}
              </li>
            </div>
          );
        })}
      </ul>

      <div>
        {categories.map((category, index) => {
          console.log(index);
          return (
            <ResCategories
              key={index}
              number={index}
              data={category.card.card}
              showList={index === showIndex ? true : false}
              cardHide={()=>setshowIndex(!index)}
              cardShow={() => setshowIndex(index)}            />
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
