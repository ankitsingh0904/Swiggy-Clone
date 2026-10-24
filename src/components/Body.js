import RestaurantCards from "./RestaurantsCards";
import { useEffect, useState } from "react";
import useonlineStatus from "../utils/useonlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import ExploreCuisines from "./ExploreCuisines";
const Body = () => {
  const [resList, setresList] = useState(null);
  const [resList2, setresList2] = useState(null);
  const [filtered, setfiltered] = useState(null);
  const [curatedHeader, setcuratedHeader] = useState(null);
  const [curatedRestaurants, setcuratedRestaurants] = useState(null);
  const [bestCuisines, setbestCuisines] = useState(null);
  const [searchtext, setsearchtext] = useState("");
  const onlinestatus = useonlineStatus();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6168791&lng=88.4488677&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    setresList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setresList2(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setfiltered(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setcuratedHeader(json?.data?.cards[0]?.card?.card?.header?.title);
    setcuratedRestaurants(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info,
    );
    setbestCuisines(json?.data?.cards[7]);
  };
  if (onlinestatus === false) {
    return <h1>You are offline</h1>;
  }
  if (resList === null) {
    return <Shimmer />;
  } else {
    return (
      <div className="body">
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search Foods"
            value={searchtext}
            onChange={function (e) {
              setsearchtext(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={function () {
              const filteredRest = filtered.filter((searchRes) => {
                return searchRes.info.name
                  .toLowerCase()
                  .includes(searchtext.toLowerCase());
              });
              {setresList(filteredRest),setresList2(filteredRest)};
              setcuratedRestaurants(null);
            }}
          >
            &#128269; Search
          </button>
          <button
            className="filterbtn"
            onClick={function () {
              const filteredList = filtered.filter((list) => {
                return list.info.avgRating > 4.3;
              });
              setresList(filteredList);
            }}
          >
            Filter
          </button>
        </div>
        <div className="curated-header">
          <h4>{curatedHeader}</h4>
        </div>

        <div className="curated">
          {curatedRestaurants?.map((items) => {
            return (
              <Link key={items.id} to={items.action.link}>
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
                    items?.imageId
                  }
                />
              </Link>
            );
          })}
        </div>

        <div className="res-container">
          {resList?.map((cards) => {
            return (
              <Link key={cards.info.id} to={"/restaurant/" + cards.info.id}>
                <RestaurantCards data={cards} />
              </Link>
            );
          })}
          {resList2?.map((cards) => {
            return (
              <Link key={cards.info.id} to={"/restaurant/" + cards.info.id}>
                <RestaurantCards data={cards} />
              </Link>
            );
          })}
        </div>
        <div className="best-cuisines">
        <h4>{bestCuisines?.card?.card?.title}</h4>
        <div className="best-cuisines-container">
          {bestCuisines?.card?.card?.brands?.map((item,index)=>{
            return <ExploreCuisines key={index} data={item}/>
          })}
        </div>
        </div>
      </div>
    );
  }
};
export default Body;
