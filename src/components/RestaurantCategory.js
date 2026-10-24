import { useState } from "react";
import ItemLists from "./ItemLists";
const RestaurantCategory = (props) => {
  const { menuData } = props;
   const [showItems,setshowItems]=useState(false);
   const handleClick=()=>{
    if(showItems===false){
     setshowItems(true);
    }
    else{
      setshowItems(false);
    }
   }
  return (
    <div className="menu">
      <div className="menu-Items">
        <div className="menu-title" onClick={handleClick}>
          <h3>
            {menuData?.card?.card?.title}({menuData?.card?.card?.title.length})
          </h3>
          <span>🔽</span>
        </div>
        <div className="itemlist">
          {showItems  && <ItemLists itemData={menuData?.card?.card?.itemCards} />}
        </div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
