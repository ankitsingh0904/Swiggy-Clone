import { useState, useEffect } from "react";
const useFilteredRestaurants = () => {
  const [filtered, setfiltered] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6168791&lng=88.4488677&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);
    setfiltered(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };
  return filtered;
};
export default useFilteredRestaurants;
