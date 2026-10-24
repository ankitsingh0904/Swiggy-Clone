import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemLists = (props) => {
  const { itemData } = props;
  const dispatch = useDispatch();
  const handledAddItems = (card) => {
    dispatch(addItem(card));
  };
  console.log(dispatch);
  return (
    <div className="items">
      {itemData.map((card,index) => {
        return (
          <div className="try1" key={index}>
            <div className="try">
              <h3>{card?.card?.info?.name}</h3>
              <h5>
                ₹{card?.card?.info?.price || card?.card?.info?.defaultPrice}
              </h5>
              <p>{card?.card?.info?.description}</p>
            </div>
            <div className="itemLogos">
              <img
                height={"100px"}
                width={"100px"}
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                  card?.card?.info?.imageId
                }
              ></img>
              <button onClick={()=>{handledAddItems(card)}}>Add</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemLists;
