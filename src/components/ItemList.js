import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
const ItemList = (props) => {
  const dispatch=useDispatch();
  const handleItem=(list)=>{
    dispatch(addItem(list));
  }
  const { lists } = props;
  return (
    <div >
      <ul>
        {lists.map((list) => {
          return (
            <div
              className="my-2 border-b-2 border-solid border-black flex justify-between"
              key={list.card.info.id}
            >
              <div>
                
                <div className="font-bold">
                  <span>{list.card.info.name}</span>
                </div>
                <div className="font-medium">
                  <span>₹ {list.card.info.defaultPrice / 100|| list.card.info.price / 100}</span>
                </div>
                <div className="font-normal text-sm w-[80%]">
                  <p>{list.card.info.description}</p>
                </div>
              </div>
              <div>
                <img className="w-[70px] h-[70px]" src={CDN_URL+list.card.info.imageId}></img>
                <button className="border bg-black text-white mx-2.5 cursor-pointer" onClick={()=>handleItem(list)}>Add+</button>
              </div>
            </div>
          );
        })}
      </ul>
      
    </div>
  );
};
export default ItemList;
