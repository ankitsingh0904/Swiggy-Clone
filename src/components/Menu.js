import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ItemLists from "./ItemLists";
const Menu = () => {
  const { resId } = useParams();
  const menuList = useRestaurantMenu(resId);
  const categories =
    menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (items) => {
        return (
          items?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      },
    );
  
  // const { itemCards } =
  //   menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);
  // console.log(menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
  return (
    <div className="restaurant-info">
      <div className="resName">
        <h2>{menuList?.cards[2]?.card?.card?.info?.name}</h2>
      </div>
      <div className="menu-container">
        {categories?.map((category, index) => {
          return <RestaurantCategory key={index} menuData={category} />;
        })}
      </div>
    </div>
  );
};
export default Menu;
