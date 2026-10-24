import { useState, useEffect } from "react";
import { Menu_API } from "./constanrs";
const useRestaurantMenu = (resId) => {
  const [menuList, setmenuList] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(Menu_API + resId);
    const json = await data.json();
    setmenuList(json.data);
  };
  return menuList;
};
export default useRestaurantMenu;