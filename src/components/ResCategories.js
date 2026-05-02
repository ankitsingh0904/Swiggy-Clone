import { useState } from "react";
import ItemList from "./ItemList";
const ResCategories = (props) => {
  const { data } = props;
  const { showList, cardShow,  cardHide} = props;
  const handledClick = () => {
    cardShow();
  };
  const closehandle = () => {
    cardHide();
  };

  return (
    <div className="w-[95%] my-0 mx-auto flex justify-center " >
      <div className=" w-[50%] font-bold text-lg  p-4 m-2 shadow-lg bg-gray-100">
        <div
          className="flex justify-between cursor-pointer" onClick={handledClick}
          
        >
          <span >
            {data.title} ({data.itemCards.length})
          </span>
          <span >🔽</span>
        </div>
        <div className="menulists cursor-pointer">
          {showList && <ItemList lists={data.itemCards} />}
          
        </div>
      </div>
    </div>
  );
};
export default ResCategories;
