import { CDN_URL } from "../utils/constants.js";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";
export const RestaurantCard = (props) => {
  const data=useContext(UserContext);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines,avgRating,costForTwo,locality} = resData.info;
  return (
    <div className="rest-cards h-[450px] w-[310px] rounded-xl mx-2.5 my-2 bg-gray-200 hover:scale-105">
     <img className="p-2 w-full h-7/12 rounded-xl mb-2" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="heading text-center font-bold text-lg">{name}</h3>
      <h5 className="heading text-center ">{cuisines.join(", ")}</h5>
      <h5 className="heading text-center"><span className="text-lg relative top-[3px] mx-1">*</span>{avgRating} - {resData.info.sla.deliveryTime} Minutes</h5>
      <h5 className="heading text-center">{locality}</h5>
      <h5 className="heading text-center">{data.loggedInUser}</h5>
    </div>
  );
};
export const RestaurantCard2 = (props) => {
  const data=useContext(UserContext);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines,avgRating,costForTwo,locality} = resData.info;
  return (
    <div className="rest-cards h-[450px] w-[310px] rounded-xl mx-2.5 my-2 bg-gray-200 hover:scale-105">
     <img className="p-2 w-full h-7/12 rounded-xl mb-2" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="heading text-center font-bold text-lg">{name}</h3>
      <h5 className="heading text-center ">{cuisines.join(", ")}</h5>
      <h5 className="heading text-center"><span className="text-lg relative top-[3px] mx-1">*</span>{avgRating} - {resData.info.sla.deliveryTime} Minutes</h5>
      <h5 className="heading text-center">{locality}</h5>
      <h5 className="heading text-center">{data.loggedInUser}</h5>
    </div>
  );
};

