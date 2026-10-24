const RestaurantCards = (props) => {
  const { data } = props;
 
  return (
    <div className="rest-cardss">
      <img
        className="card-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          data.info.cloudinaryImageId
        }
      ></img>
      <h2>{data.info.name}</h2>
      <p>{data.info.cuisines.join(", ")}</p>
      <p>{data.info.avgRating}* - {data.info.costForTwo}</p>
      <p>Delivery in {data.info.sla.slaString}</p>
    </div>
  );
};
export default RestaurantCards;
