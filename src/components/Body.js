import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router";
import UserContext from "../utils/UserContext.js";
//Body Component
const Body = () => {
  const [Restaurantlist, setRestaurantlist] = useState([]);
  const [filterList, setfilterList] = useState([]);
  const [searchText, setsearchText] = useState("");
  const { loggedInUser, setuserName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6168791&lng=88.4488677&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    setRestaurantlist(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    setfilterList(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    console.log(json);
  };
  if (Restaurantlist.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <div className="body w-[98%] my-0 mx-auto">
        <div className="search flex my-2 w-full">
          <div className="search-bar">
            <input
              className=" border border-solid border-black"
              id="search-box"
              type="text"
              placeholder="Search Here"
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
            ></input>
          </div>
          <div>
            <button
              className="search-btn bg-green-100 border border-solid border-black cursor-pointer mx-2"
              onClick={() => {
                const filteredlist2 = filterList.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()),
                );
                setRestaurantlist(filteredlist2);
              }}
            >
              Search
            </button>
          </div>
          <div>
            <button
              className="filter-btn  bg-green-100 border border-solid border-black cursor-pointer mx-2"
              onClick={() => {
                const filteredlist = filterList.filter((rest) => {
                  return rest.info.avgRating > 4.5;
                });
                console.log(filteredlist);
                setRestaurantlist(filteredlist);
              }}
            >
              Top Rated Restaurant
            </button>
            <input
              className=" border border-solid border-black px-1"
              placeholder="Enter Name"
              value={loggedInUser}
              onChange={(e) => setuserName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="rest-container flex flex-wrap w-full my-0 mx-auto">
          {Restaurantlist.map((cards) => {
            return (
              <Link to={"/restaurant/" + cards.info.id} key={cards.info.id}>
                <RestaurantCard resData={cards} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
};
export default Body;
